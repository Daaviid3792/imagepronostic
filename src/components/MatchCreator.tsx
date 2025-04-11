
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MatchData, TeamData, CompetitionData } from "@/types/match";
import { getTeams, getCompetitions } from "@/data/sportsData";

interface MatchCreatorProps {
  matchData: MatchData;
  setMatchData: React.Dispatch<React.SetStateAction<MatchData>>;
}

const MatchCreator = ({ matchData, setMatchData }: MatchCreatorProps) => {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionData[]>([]);

  useEffect(() => {
    setTeams(getTeams());
    setCompetitions(getCompetitions());
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="homeTeam" className="text-gray-300 mb-2 block">
            Equipo Local
          </Label>
          <Select 
            value={matchData.homeTeam}
            onValueChange={(value) => setMatchData({...matchData, homeTeam: value})}
          >
            <SelectTrigger className="w-full bg-gray-800 text-white border-gray-700">
              <SelectValue placeholder="Selecciona equipo local" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
              {teams.map((team) => (
                <SelectItem key={team.id} value={team.id} className="hover:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <img src={team.logo} alt={team.name} className="w-6 h-6 object-contain" />
                    <span>{team.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="awayTeam" className="text-gray-300 mb-2 block">
            Equipo Visitante
          </Label>
          <Select
            value={matchData.awayTeam}
            onValueChange={(value) => setMatchData({...matchData, awayTeam: value})}
          >
            <SelectTrigger className="w-full bg-gray-800 text-white border-gray-700">
              <SelectValue placeholder="Selecciona equipo visitante" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
              {teams.map((team) => (
                <SelectItem key={team.id} value={team.id} className="hover:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <img src={team.logo} alt={team.name} className="w-6 h-6 object-contain" />
                    <span>{team.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="competition" className="text-gray-300 mb-2 block">
            Competición
          </Label>
          <Select
            value={matchData.competition}
            onValueChange={(value) => setMatchData({...matchData, competition: value})}
          >
            <SelectTrigger className="w-full bg-gray-800 text-white border-gray-700">
              <SelectValue placeholder="Selecciona competición" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
              {competitions.map((competition) => (
                <SelectItem key={competition.id} value={competition.id} className="hover:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <img src={competition.logo} alt={competition.name} className="w-6 h-6 object-contain" />
                    <span>{competition.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-gray-300 mb-2 block">Fecha del Partido</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-gray-800 text-white border-gray-700",
                  !matchData.date && "text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {matchData.date ? format(matchData.date, "dd/MM/yyyy", { locale: es }) : "Selecciona fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
              <Calendar
                mode="single"
                selected={matchData.date}
                onSelect={(date) => date && setMatchData({...matchData, date})}
                initialFocus
                className="bg-gray-800 text-white"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default MatchCreator;
