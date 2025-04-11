
import { format } from "date-fns";
import { MatchData } from "@/types/match";
import { getTeamById, getCompetitionById } from "@/data/sportsData";

interface MatchPreviewProps {
  matchData: MatchData;
}

const MatchPreview = ({ matchData }: MatchPreviewProps) => {
  const homeTeam = getTeamById(matchData.homeTeam);
  const awayTeam = getTeamById(matchData.awayTeam);
  const competition = getCompetitionById(matchData.competition);

  const formattedDate = format(matchData.date, "dd / MM / yyyy");

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Imagen de fondo actualizada */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
        style={{ backgroundImage: `url('/lovable-uploads/d5354129-c8d8-44f0-8c26-18c60a12a46e.png')` }}
      ></div>
      
      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          {/* Competition logo */}
          {competition && (
            <div className="competition-logo">
              <img 
                src={competition.logo} 
                alt={competition.name} 
                className="h-full max-h-16 object-contain"
              />
            </div>
          )}
          
          {/* Date */}
          <div className="match-date text-lg font-semibold">
            {formattedDate}
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-12 py-8">
          {/* Home team */}
          <div className="flex flex-col items-center w-1/3">
            {homeTeam && (
              <>
                <img 
                  src={homeTeam.logo} 
                  alt={homeTeam.name} 
                  className="h-28 md:h-36 object-contain mb-4" 
                />
                <h3 className="text-lg md:text-xl font-bold text-center">{homeTeam.name}</h3>
              </>
            )}
          </div>
          
          {/* El VS ya viene en la imagen de fondo */}
          
          {/* Away team */}
          <div className="flex flex-col items-center w-1/3">
            {awayTeam && (
              <>
                <img 
                  src={awayTeam.logo} 
                  alt={awayTeam.name} 
                  className="h-28 md:h-36 object-contain mb-4" 
                />
                <h3 className="text-lg md:text-xl font-bold text-center">{awayTeam.name}</h3>
              </>
            )}
          </div>
        </div>
        
        <div className="h-10"></div> {/* Bottom spacing */}
      </div>
    </div>
  );
};

export default MatchPreview;
