
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
    <div className="w-full aspect-video rounded-lg overflow-hidden text-white relative">
      {/* Fondo que simula campo de fútbol */}
      <div className="absolute inset-0 bg-[#1A1F2C] z-0">
        {/* Campo de fútbol estilizado con líneas diagonales */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "linear-gradient(135deg, rgba(50, 55, 65, 0.8) 0%, rgba(25, 28, 36, 0.8) 100%)",
            backgroundSize: "cover"
          }}
        ></div>
        
        {/* Líneas del campo simuladas */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: `url('public/lovable-uploads/765ddb20-005b-4003-a821-25f1dfc55f53.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        {/* Área superior derecha */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 border-l-[40px] border-b-[40px] rounded-bl-full opacity-15 border-gray-500 z-0"></div>
        
        {/* Área inferior izquierda */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 border-r-[40px] border-t-[40px] rounded-tr-full opacity-15 border-gray-500 z-0"></div>
        
        {/* Efecto de gradiente para dar profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/40 via-transparent to-[#1A1F2C]/70 z-0"></div>
      </div>
      
      {/* Texto VS en el centro con estilo */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="text-7xl md:text-8xl font-bold tracking-widest opacity-20 text-gray-400">VS</span>
      </div>
      
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
          
          {/* Espacio central para el VS */}
          <div className="w-1/3 flex justify-center items-center">
            {/* El VS ya está como parte del fondo */}
          </div>
          
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
