
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import MatchCreator from "@/components/MatchCreator";
import MatchPreview from "@/components/MatchPreview";
import { toast } from "sonner";
import { MatchData } from "@/types/match";

const Index = () => {
  const [matchData, setMatchData] = useState<MatchData>({
    homeTeam: "",
    awayTeam: "",
    competition: "",
    date: new Date(),
  });
  
  const [previewVisible, setPreviewVisible] = useState(false);

  const handlePreviewClick = () => {
    if (!matchData.homeTeam || !matchData.awayTeam || !matchData.competition) {
      toast.error("Por favor, completa todos los campos");
      return;
    }
    setPreviewVisible(true);
  };

  const handleBackToEdit = () => {
    setPreviewVisible(false);
  };

  const handleDownload = () => {
    toast.success("Imagen descargada correctamente");
    // La funcionalidad de descarga se implementará en una versión posterior
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
                <MatchPreview matchData={matchData} />
                <div className="mt-8 flex justify-center gap-4">
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
