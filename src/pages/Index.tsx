
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
    const params = new URLSearchParams(location.search);
    
    // Método 1: Usar el parámetro "match" (barcelona-realmadrid-20250510-live)
    const matchParam = params.get("match");
    
    // Método 2: Usar parámetros individuales (home=barcelona&away=realmadrid&live=true)
    const homeTeamParam = params.get("home");
    const awayTeamParam = params.get("away");
    const dateParam = params.get("date");
    const liveParam = params.get("live") === "true";
    const competitionParam = params.get("comp") || "laliga";
    
    console.log("URL search:", location.search);
    console.log("Match param:", matchParam);
    console.log("Individual params:", { homeTeamParam, awayTeamParam, dateParam, liveParam, competitionParam });
    
    // Priorizar método 1 (formato match=team1-team2...)
    if (matchParam) {
      try {
        // Verificar si termina con -live
        const isLive = matchParam.endsWith("-live");
        const paramString = isLive ? matchParam.slice(0, -5) : matchParam;
        const parts = paramString.split("-");
        
        console.log("Parts:", parts, "isLive:", isLive);
        
        if (parts.length >= 2) {
          const homeTeamId = parts[0];
          const awayTeamId = parts[1];
          
          // Fecha opcional en la URL
          let date = new Date();
          if (parts.length >= 3) {
            const dateStr = parts[2];
            // Intentar parsear fecha si tiene formato YYYYMMDD
            if (/^\d{8}$/.test(dateStr)) {
              const year = parseInt(dateStr.substring(0, 4));
              const month = parseInt(dateStr.substring(4, 6)) - 1; // 0-11 en JS
              const day = parseInt(dateStr.substring(6, 8));
              date = new Date(year, month, day);
            }
          }
          
          const homeTeam = getTeamById(homeTeamId);
          const awayTeam = getTeamById(awayTeamId);
          
          console.log("Found teams:", homeTeam, awayTeam);
          
          if (homeTeam && awayTeam) {
            setMatchData({
              homeTeam: homeTeamId,
              awayTeam: awayTeamId,
              competition: competitionParam,
              date
            });
            setPreviewVisible(true);
            setShowLive(isLive);
          } else {
            console.error("Invalid team IDs:", homeTeamId, awayTeamId);
          }
        }
      } catch (error) {
        console.error("Error parsing match parameter:", error);
      }
    } 
    // Usar método 2 si el método 1 falló y existen parámetros individuales
    else if (homeTeamParam && awayTeamParam) {
      try {
        const homeTeam = getTeamById(homeTeamParam);
        const awayTeam = getTeamById(awayTeamParam);
        
        if (homeTeam && awayTeam) {
          // Parsear la fecha si existe
          let date = new Date();
          if (dateParam && /^\d{8}$/.test(dateParam)) {
            const year = parseInt(dateParam.substring(0, 4));
            const month = parseInt(dateParam.substring(4, 6)) - 1;
            const day = parseInt(dateParam.substring(6, 8));
            date = new Date(year, month, day);
          }
          
          setMatchData({
            homeTeam: homeTeamParam,
            awayTeam: awayTeamParam,
            competition: competitionParam,
            date
          });
          setPreviewVisible(true);
          setShowLive(liveParam);
        }
      } catch (error) {
        console.error("Error parsing individual parameters:", error);
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
      // Formatear la fecha como YYYYMMDD
      const year = matchData.date.getFullYear();
      const month = String(matchData.date.getMonth() + 1).padStart(2, '0');
      const day = String(matchData.date.getDate()).padStart(2, '0');
      const dateStr = `${year}${month}${day}`;
      
      // Crear dos formatos de URL para compartir
      
      // Formato 1: ?match=team1-team2-date(-live)
      let urlParam = `${matchData.homeTeam}-${matchData.awayTeam}-${dateStr}`;
      if (showLive) {
        urlParam += "-live";
      }
      const matchUrl = `${window.location.origin}${window.location.pathname}?match=${urlParam}`;
      
      // Formato 2: ?home=team1&away=team2&date=date&live=true/false
      const paramUrl = new URL(window.location.origin + window.location.pathname);
      paramUrl.searchParams.append("home", matchData.homeTeam);
      paramUrl.searchParams.append("away", matchData.awayTeam);
      paramUrl.searchParams.append("date", dateStr);
      paramUrl.searchParams.append("comp", matchData.competition);
      if (showLive) {
        paramUrl.searchParams.append("live", "true");
      }
      
      // Usar formato 1 (más corto)
      navigator.clipboard.writeText(matchUrl).then(() => {
        toast.success("Enlace copiado al portapapeles");
        console.log("Generated URL:", matchUrl);
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
