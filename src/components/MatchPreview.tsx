
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
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('/lovable-uploads/43c3ff17-de45-45a4-8528-18b420681f46.png')`,
          backgroundSize: 'cover'
        }}
      ></div>
      
      {/* Efecto de gradiente para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-0"></div>
      
      {/* Efecto de resplandor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_70%)] z-0"></div>
      
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
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
                  className="h-28 md:h-36 object-contain mb-4 drop-shadow-lg" 
                />
                <h3 className="text-lg md:text-xl font-bold text-center drop-shadow-md">{homeTeam.name}</h3>
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
                  className="h-28 md:h-36 object-contain mb-4 drop-shadow-lg" 
                />
                <h3 className="text-lg md:text-xl font-bold text-center drop-shadow-md">{awayTeam.name}</h3>
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
