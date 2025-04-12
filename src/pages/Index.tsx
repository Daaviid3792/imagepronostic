
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import MatchCreator from "@/components/MatchCreator";
import MatchPreview from "@/components/MatchPreview";
import { toast } from "sonner";
import { MatchData } from "@/types/match";
import { getTeamById } from "@/data/sportsData";
import html2canvas from "html2canvas";
import { useLocation, useNavigate } from "react-router-dom";
import { Share2 } from "lucide-react";

const Index = () => {
  const [matchData, setMatchData] = useState<MatchData>({
    homeTeam: "",
    awayTeam: "",
    competition: "",
    date: new Date(),
  });
  
  const [previewVisible, setPreviewVisible] = useState(false);
  const [showLive, setShowLive] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Parse URL parameters on component mount
  useEffect(() => {
    console.log("URL search params:", location.search);
    const searchParams = new URLSearchParams(location.search);
    const urlParams = searchParams.get("match");
    
    console.log("Parsed match params:", urlParams);
    
    if (urlParams) {
      try {
        // Format should be homeTeam-awayTeam-date with optional -live suffix
        const isLive = urlParams.endsWith("-live");
        const paramString = isLive ? urlParams.slice(0, -5) : urlParams;
        const parts = paramString.split("-");
        
        console.log("Parts:", parts, "isLive:", isLive);
        
        if (parts.length >= 2) {
          const homeTeamId = parts[0];
          const awayTeamId = parts[1];
          
          console.log("Home team ID:", homeTeamId, "Away team ID:", awayTeamId);
          
          // Date is optional in the URL
          let date = new Date();
          if (parts.length >= 3) {
            const dateStr = parts[2];
            // Try to parse date if it looks like YYYYMMDD format
            if (/^\d{8}$/.test(dateStr)) {
              const year = parseInt(dateStr.substring(0, 4));
              const month = parseInt(dateStr.substring(4, 6)) - 1;
              const day = parseInt(dateStr.substring(6, 8));
              date = new Date(year, month, day);
              console.log("Parsed date:", date);
            }
          }
          
          // Update the match data if the team IDs are valid
          const homeTeam = getTeamById(homeTeamId);
          const awayTeam = getTeamById(awayTeamId);
          
          console.log("Found teams:", homeTeam, awayTeam);
          
          if (homeTeam && awayTeam) {
            setMatchData(prev => ({
              ...prev,
              homeTeam: homeTeamId,
              awayTeam: awayTeamId,
              competition: prev.competition || "laliga", // Default to a valid competition if none set
              date
            }));
            
            // If we have valid teams, show preview
            setPreviewVisible(true);
            
            // Set live mode if specified
            if (isLive) {
              setShowLive(true);
            }
          } else {
            console.error("Invalid team IDs:", homeTeamId, awayTeamId);
          }
        }
      } catch (error) {
        console.error("Error parsing URL parameters:", error);
      }
    }
  }, [location.search]);

  const handlePreviewClick = () => {
    if (!matchData.homeTeam || !matchData.awayTeam || !matchData.competition) {
      toast.error("Por favor, completa todos los campos");
      return;
    }
    setPreviewVisible(true);
  };

  const handleBackToEdit = () => {
    setPreviewVisible(false);
    setShowLive(false);
  };

  const handleToggleLive = () => {
    setShowLive(!showLive);
  };

  const handleShareLink = () => {
    try {
      // Format the date as YYYYMMDD
      const year = matchData.date.getFullYear();
      const month = String(matchData.date.getMonth() + 1).padStart(2, '0');
      const day = String(matchData.date.getDate()).padStart(2, '0');
      const dateStr = `${year}${month}${day}`;
      
      // Create URL parameter
      let urlParam = `${matchData.homeTeam}-${matchData.awayTeam}-${dateStr}`;
      if (showLive) {
        urlParam += "-live";
      }
      
      // Create the full URL
      const url = `${window.location.origin}${window.location.pathname}?match=${urlParam}`;
      
      console.log("Generated share URL:", url);
      
      // Copy to clipboard
      navigator.clipboard.writeText(url).then(() => {
        toast.success("Enlace copiado al portapapeles");
      }, () => {
        toast.error("No se pudo copiar al portapapeles");
      });
    } catch (error) {
      console.error("Error generating share link:", error);
      toast.error("Error al generar enlace para compartir");
    }
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;

    try {
      const homeTeam = getTeamById(matchData.homeTeam);
      const awayTeam = getTeamById(matchData.awayTeam);
      
      if (!homeTeam || !awayTeam) {
        toast.error("Error al obtener información de los equipos");
        return;
      }

      const fileName = `${homeTeam.name}-${awayTeam.name}.webp`;
      
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        scale: 2, // mejor calidad
      });
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(url);
            toast.success("Imagen descargada correctamente");
          } else {
            toast.error("Error al generar la imagen");
          }
        },
        "image/webp",
        0.9
      ); // 0.9 = 90% de calidad
    } catch (error) {
      console.error("Error al descargar la imagen:", error);
      toast.error("Error al descargar la imagen");
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Creador de Imágenes de Pronósticos de Fútbol
        </h1>
        
        <Card className="max-w-4xl mx-auto bg-[#222] border-gray-700">
          <div className="p-6">
            {!previewVisible ? (
              <>
                <MatchCreator 
                  matchData={matchData}
                  setMatchData={setMatchData}
                />
                <div className="mt-8 flex justify-center">
                  <Button 
                    onClick={handlePreviewClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                  >
                    Previsualizar Imagen
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div ref={previewRef}>
                  <MatchPreview matchData={matchData} showLive={showLive} />
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={handleBackToEdit}
                    variant="outline"
                    className="border-gray-500 text-gray-300 hover:bg-gray-700"
                  >
                    Volver a Editar
                  </Button>
                  <Button 
                    onClick={handleDownload}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Descargar Imagen
                  </Button>
                  <Button 
                    onClick={handleToggleLive}
                    className={`${
                      showLive ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"
                    } text-white`}
                  >
                    {showLive ? "Quitar Live" : "Añadir Live"}
                  </Button>
                  <Button 
                    onClick={handleShareLink}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartir Enlace
                  </Button>
                </div>
              </>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;
