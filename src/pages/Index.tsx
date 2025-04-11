
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import MatchCreator from "@/components/MatchCreator";
import MatchPreview from "@/components/MatchPreview";
import { toast } from "sonner";
import { MatchData } from "@/types/match";
import { getTeamById } from "@/data/sportsData";
import html2canvas from "html2canvas";

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
          Creador de Imágenes de Partidos de Fútbol
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
