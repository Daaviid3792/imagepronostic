
import { format } from "date-fns";
import { MatchData } from "@/types/match";
import { getTeamById, getCompetitionById } from "@/data/sportsData";

interface MatchPreviewProps {
  matchData: MatchData;
  showLive?: boolean;
}

const MatchPreview = ({ matchData, showLive = false }: MatchPreviewProps) => {
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
      
      {/* Efecto de campo de fútbol */}
      <div className="absolute inset-0 z-0">
        {/* Línea central */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2"></div>
        
        {/* Círculo central */}
        <div className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full border-2 border-white/20 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Áreas de portería */}
        <div className="absolute left-0 bottom-0 w-1/5 h-2/5 border-r-2 border-t-2 border-white/20"></div>
        <div className="absolute right-0 top-0 w-1/5 h-2/5 border-l-2 border-b-2 border-white/20"></div>
        
        {/* VS centrado */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white/40">
          VS
        </div>
      </div>
      
      {/* Indicador LIVE */}
      {showLive && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white rounded-full px-6 py-1.5 flex items-center gap-2 border-2 border-red-600">
            <span className="text-red-600 font-bold">LIVE</span>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
      
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
          
          <div className="w-1/3"></div> {/* Espacio central */}
          
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
