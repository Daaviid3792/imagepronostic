
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
        
        {/* Área superior derecha - Figura rectangular con semicírculo */}
        <div className="absolute top-0 right-0 z-0">
          {/* Rectángulo base */}
          <div className="w-40 h-52 border-l-2 border-b-2 border-gray-400 opacity-30"></div>
          {/* Semicírculo */}
          <div className="absolute top-52 right-0 w-24 h-24 border-l-2 border-t-2 rounded-tl-full border-gray-400 opacity-30"></div>
        </div>
        
        {/* Área inferior izquierda - Figura rectangular con semicírculo */}
        <div className="absolute bottom-0 left-0 z-0">
          {/* Rectángulo base */}
          <div className="w-40 h-52 border-r-2 border-t-2 border-gray-400 opacity-30"></div>
          {/* Semicírculo */}
          <div className="absolute bottom-52 left-0 w-24 h-24 border-r-2 border-b-2 rounded-br-full border-gray-400 opacity-30"></div>
        </div>
        
        {/* Círculo central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-gray-400 opacity-20"></div>
        
        {/* Línea media */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400 opacity-20 transform -translate-y-1/2"></div>
        
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
