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
import { Share2, ExternalLink, Download } from "lucide-react";

const PREDEFINED_MATCHES = {
  "barcelona-realmadrid": {
    homeTeam: "barcelona",
    awayTeam: "realmadrid",
    competition: "laliga",
    date: new Date(2025, 4, 10) // 10 de Mayo de 2025
  },
  "manchestercity-liverpool": {
    homeTeam: "manchestercity",
    awayTeam: "liverpool",
    competition: "premierleague",
    date: new Date(2025, 4, 15) // 15 de Mayo de 2025
  },
  "bayern-dortmund": {
    homeTeam: "bayern",
    awayTeam: "dortmund",
    competition: "bundesliga",
    date: new Date(2025, 4, 20) // 20 de Mayo de 2025
  },
  "psg-marseille": {
    homeTeam: "psg",
    awayTeam: "marseille",
    competition: "ligue1",
    date: new Date(2025, 4, 25) // 25 de Mayo de 2025
  }
};

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

  useEffect(() => {
    const path = location.pathname.substring(1);
    console.log("Path detectado:", path);
    
    if (path && PREDEFINED_MATCHES[path]) {
      const matchConfig = PREDEFINED_MATCHES[path];
      console.log("Partido predefinido encontrado:", matchConfig);
      
      const isLive = path.endsWith("-live");
      const pathWithoutLive = isLive ? path.substring(0, path.length - 5) : path;
      
      if (PREDEFINED_MATCHES[pathWithoutLive]) {
        setMatchData(PREDEFINED_MATCHES[pathWithoutLive]);
        setPreviewVisible(true);
        setShowLive(isLive);
        return;
      }
    }
    
    const params = new URLSearchParams(location.search);
    const matchParam = params.get("match");
    
    if (matchParam) {
      try {
        const isLive = matchParam.endsWith("-live");
        const paramString = isLive ? matchParam.slice(0, -5) : matchParam;
        const parts = paramString.split("-");
        
        console.log("Parts from URL param:", parts, "isLive:", isLive);
        
        if (parts.length >= 2) {
          const homeTeamId = parts[0];
          const awayTeamId = parts[1];
          
          let date = new Date();
          if (parts.length >= 3) {
            const dateStr = parts[2];
            if (/^\d{8}$/.test(dateStr)) {
              const year = parseInt(dateStr.substring(0, 4));
              const month = parseInt(dateStr.substring(4, 6)) - 1;
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
              competition: params.get("comp") || "laliga",
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
  }, [location]);

  const generateMatchUrl = () => {
    let predefinedMatchKey = null;
    for (const [key, match] of Object.entries(PREDEFINED_MATCHES)) {
      if (match.homeTeam === matchData.homeTeam && match.awayTeam === matchData.awayTeam) {
        predefinedMatchKey = key;
        break;
      }
    }
    
    if (predefinedMatchKey) {
      return `${window.location.origin}/${predefinedMatchKey}${showLive ? "-live" : ""}`;
    }
    
    const year = matchData.date.getFullYear();
    const month = String(matchData.date.getMonth() + 1).padStart(2, '0');
    const day = String(matchData.date.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;
    
    let urlParam = `${matchData.homeTeam}-${matchData.awayTeam}-${dateStr}`;
    if (showLive) {
      urlParam += "-live";
    }
    return `${window.location.origin}?match=${urlParam}`;
  };

  const handlePreviewClick = () => {
    if (!matchData.homeTeam || !matchData.awayTeam || !matchData.competition) {
      toast.error("Por favor, completa todos los campos");
      return;
    }
    setPreviewVisible(true);
  };

  const handleOpenInNewTab = async () => {
    if (!matchData.homeTeam || !matchData.awayTeam || !matchData.competition) {
      toast.error("Por favor, completa todos los campos");
      return;
    }
    
    try {
      const homeTeam = getTeamById(matchData.homeTeam);
      const awayTeam = getTeamById(matchData.awayTeam);
      
      if (!homeTeam || !awayTeam) {
        toast.error("Error al obtener información de los equipos");
        return;
      }
      
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '1280px';
      tempContainer.style.height = '720px';
      tempContainer.style.position = 'fixed';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      document.body.appendChild(tempContainer);
      
      const previewElement = document.createElement('div');
      previewElement.style.width = '1280px';
      previewElement.style.height = '720px';
      tempContainer.appendChild(previewElement);
      
      const tempMatchPreview = document.createElement('div');
      tempMatchPreview.innerHTML = `<div class="w-full aspect-video rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
        <div class="absolute inset-0 bg-cover bg-center z-0 opacity-100" style="background-image: url('/lovable-uploads/d5354129-c8d8-44f0-8c26-18c60a12a46e.png')"></div>
        <div class="relative z-10 w-full h-full flex flex-col justify-between p-8">
          <!-- Match content here -->
        </div>
      </div>`;
      previewElement.appendChild(tempMatchPreview);
      
      if (previewRef.current) {
        const clone = previewRef.current.cloneNode(true) as HTMLElement;
        clone.style.width = '1280px';
        clone.style.height = '720px';
        previewElement.innerHTML = '';
        previewElement.appendChild(clone);
      }
      
      const canvas = await html2canvas(previewElement, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true
      });
      
      document.body.removeChild(tempContainer);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          window.open(url, '_blank');
        } else {
          toast.error("Error al generar la imagen");
        }
      }, 'image/webp', 0.9);
    } catch (error) {
      console.error("Error al generar imagen para nueva pestaña:", error);
      toast.error("Error al generar la imagen");
    }
  };

  const handleOpenImageInNewTab = async () => {
    if (!matchData.homeTeam || !matchData.awayTeam || !matchData.competition) {
      toast.error("Por favor, completa todos los campos");
      return;
    }
    
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
        scale: 2,
        useCORS: true,
        allowTaint: true
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
      );
    } catch (error) {
      console.error("Error al descargar la imagen:", error);
      toast.error("Error al descargar la imagen");
    }
  };

  const handleBackToEdit = () => {
    setPreviewVisible(false);
    setShowLive(false);
    navigate("/", { replace: true });
  };

  const handleToggleLive = () => {
    setShowLive(!showLive);
  };

  const handleShareLink = () => {
    try {
      const matchUrl = generateMatchUrl();
      
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
        scale: 2,
        useCORS: true,
        allowTaint: true
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
      );
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
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={handlePreviewClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                  >
                    Previsualizar Imagen
                  </Button>
                  <Button 
                    onClick={handleOpenInNewTab}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Abrir Imagen WebP
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
                  <Button 
                    onClick={handleOpenImageInNewTab}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Abrir Imagen WebP
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
