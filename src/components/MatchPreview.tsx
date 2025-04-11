
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
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
        style={{ backgroundImage: `url('/lovable-uploads/d5354129-c8d8-44f0-8c26-18c60a12a46e.png')` }}
      ></div>
      
      {/* Football field effect */}
      <div className="absolute inset-0 z-0">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 transform -translate-x-1/2"></div>
        
        {/* Center circle */}
        <div className="absolute left-1/2 top-1/2 w-32 h-32 rounded-full border-2 border-white/30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Field outline */}
        <div className="absolute inset-2 border-2 border-white/30 rounded-sm"></div>
        
        {/* Left penalty area */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          {/* Large penalty area */}
          <div className="absolute left-2 top-1/2 w-40 h-80 border-2 border-white/30 transform -translate-y-1/2"></div>
          
          {/* Small goal area */}
          <div className="absolute left-2 top-1/2 w-16 h-40 border-2 border-white/30 transform -translate-y-1/2"></div>
          
          {/* Penalty arc */}
          <div className="absolute left-[166px] top-1/2 w-20 h-40 border-r-2 border-white/30 rounded-r-full transform -translate-y-1/2"></div>
          
          {/* Penalty spot */}
          <div className="absolute left-32 top-1/2 w-2 h-2 bg-white/30 rounded-full transform -translate-y-1/2"></div>
        </div>
        
        {/* Right penalty area */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          {/* Large penalty area */}
          <div className="absolute right-2 top-1/2 w-40 h-80 border-2 border-white/30 transform -translate-y-1/2"></div>
          
          {/* Small goal area */}
          <div className="absolute right-2 top-1/2 w-16 h-40 border-2 border-white/30 transform -translate-y-1/2"></div>
          
          {/* Penalty arc */}
          <div className="absolute right-[166px] top-1/2 w-20 h-40 border-l-2 border-white/30 rounded-l-full transform -translate-y-1/2"></div>
          
          {/* Penalty spot */}
          <div className="absolute right-32 top-1/2 w-2 h-2 bg-white/30 rounded-full transform -translate-y-1/2"></div>
        </div>
        
        {/* Corner arcs */}
        <div className="absolute top-2 left-2 w-6 h-6 border-r-2 border-white/30 rounded-br-full"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-l-2 border-white/30 rounded-bl-full"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-r-2 border-t-2 border-white/30 rounded-tr-full"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-l-2 border-t-2 border-white/30 rounded-tl-full"></div>
        
        {/* VS text - without rectangle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-7xl font-extrabold text-white shadow-lg">
            VS
          </div>
        </div>
      </div>
      
      {/* LIVE indicator */}
      {showLive && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white rounded-full px-6 py-1.5 flex items-center gap-2 border-2 border-red-600">
            <span className="text-red-600 font-bold">LIVE</span>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
      
      {/* Content */}
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
          
          {/* Date - enhanced with same format as VS */}
          <div className="match-date text-xl font-bold bg-gray-900/50 px-4 py-1 rounded-lg border border-white/30">
            {formattedDate}
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-16 py-4">
          {/* Home team - better centered */}
          <div className="flex flex-col items-center justify-center w-1/3">
            {homeTeam && (
              <>
                <div className="flex justify-center items-center h-32 md:h-44">
                  <img 
                    src={homeTeam.logo} 
                    alt={homeTeam.name} 
                    className="h-28 md:h-40 object-contain" 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mt-1">{homeTeam.name}</h3>
              </>
            )}
          </div>
          
          <div className="w-1/3"></div> {/* Center space */}
          
          {/* Away team - better centered */}
          <div className="flex flex-col items-center justify-center w-1/3">
            {awayTeam && (
              <>
                <div className="flex justify-center items-center h-32 md:h-44">
                  <img 
                    src={awayTeam.logo} 
                    alt={awayTeam.name} 
                    className="h-28 md:h-40 object-contain" 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mt-1">{awayTeam.name}</h3>
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
