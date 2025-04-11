
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
    <div className="w-full aspect-video image-arena-bg rounded-lg overflow-hidden">
      <div className="image-arena-content w-full h-full flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          {/* Competición logo */}
          {competition && (
            <div className="competition-logo">
              <img src={competition.logo} alt={competition.name} className="h-full max-h-20 object-contain" />
            </div>
          )}
          
          {/* Fecha */}
          <div className="match-date">
            {formattedDate}
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-8">
          {/* Equipo local */}
          <div className="flex flex-col items-center w-1/3">
            {homeTeam && (
              <>
                <img src={homeTeam.logo} alt={homeTeam.name} className="team-logo" />
                <h3 className="team-name text-center">{homeTeam.name}</h3>
              </>
            )}
          </div>
          
          {/* VS */}
          <div className="vs-text">
            VS
          </div>
          
          {/* Equipo visitante */}
          <div className="flex flex-col items-center w-1/3">
            {awayTeam && (
              <>
                <img src={awayTeam.logo} alt={awayTeam.name} className="team-logo" />
                <h3 className="team-name text-center">{awayTeam.name}</h3>
              </>
            )}
          </div>
        </div>
        
        <div className="h-10"></div> {/* Espacio inferior */}
      </div>
    </div>
  );
};

export default MatchPreview;
