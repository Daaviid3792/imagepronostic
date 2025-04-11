
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
        
        {/* Left penalty area - Large */}
        <div className="absolute left-0 top-1/2 w-1/6 h-2/5 border-r-2 border-t-2 border-b-2 border-white/30 transform -translate-y-1/2"></div>
        {/* Left penalty area - Small */}
        <div className="absolute left-0 top-1/2 w-[10%] h-1/5 border-r-2 border-t-2 border-b-2 border-white/30 transform -translate-y-1/2"></div>
        {/* Left penalty arc */}
        <div className="absolute left-[16.67%] top-1/2 w-10 h-20 border-r-2 border-white/30 rounded-l-full transform -translate-x-full -translate-y-1/2"></div>
        
        {/* Right penalty area - Large */}
        <div className="absolute right-0 top-1/2 w-1/6 h-2/5 border-l-2 border-t-2 border-b-2 border-white/30 transform -translate-y-1/2"></div>
        {/* Right penalty area - Small */}
        <div className="absolute right-0 top-1/2 w-[10%] h-1/5 border-l-2 border-t-2 border-b-2 border-white/30 transform -translate-y-1/2"></div>
        {/* Right penalty arc */}
        <div className="absolute right-[16.67%] top-1/2 w-10 h-20 border-l-2 border-white/30 rounded-r-full transform translate-x-full -translate-y-1/2"></div>
        
        {/* VS centered - enhanced */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-7xl font-extrabold text-white bg-gray-900/50 px-6 py-3 rounded-lg border-2 border-white/40 shadow-lg">
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
        
        <div className="flex justify-center items-center gap-4 md:gap-12 py-4">
          {/* Home team - better centered */}
          <div className="flex flex-col items-center justify-center w-1/3">
            {homeTeam && (
              <>
                <div className="flex justify-center items-center h-32 md:h-40">
                  <img 
                    src={homeTeam.logo} 
                    alt={homeTeam.name} 
                    className="h-28 md:h-36 object-contain" 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mt-2">{homeTeam.name}</h3>
              </>
            )}
          </div>
          
          <div className="w-1/3"></div> {/* Center space */}
          
          {/* Away team - better centered */}
          <div className="flex flex-col items-center justify-center w-1/3">
            {awayTeam && (
              <>
                <div className="flex justify-center items-center h-32 md:h-40">
                  <img 
                    src={awayTeam.logo} 
                    alt={awayTeam.name} 
                    className="h-28 md:h-36 object-contain" 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mt-2">{awayTeam.name}</h3>
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
