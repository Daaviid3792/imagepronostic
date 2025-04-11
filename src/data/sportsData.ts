
import { TeamData, CompetitionData } from "@/types/match";

// Equipos
const teams: TeamData[] = [
  {
    id: "real-madrid",
    name: "REAL MADRID",
    logo: "/lovable-uploads/41648b76-84ee-4983-b7f3-14829239bc87.png"
  },
  {
    id: "arsenal",
    name: "ARSENAL",
    logo: "/lovable-uploads/daf1eb78-92ab-4dfb-878c-67106b7a4dcb.png"
  },
  {
    id: "osasuna",
    name: "OSASUNA",
    logo: "/lovable-uploads/3837ca71-d4bf-4a75-83ea-38e71c82499c.png"
  },
  {
    id: "rayo-vallecano",
    name: "RAYO VALLECANO",
    logo: "/lovable-uploads/91d655b9-ea36-4397-be78-35e78b977dd7.png"
  },
  {
    id: "real-sociedad",
    name: "REAL SOCIEDAD",
    logo: "/lovable-uploads/b21d383b-f03f-4da8-8d51-dd1faafd003a.png"
  },
  {
    id: "sevilla",
    name: "SEVILLA FC",
    logo: "/lovable-uploads/6f4a62f0-cecd-4a25-9d14-375ad139d815.png"
  },
  {
    id: "valencia",
    name: "VALENCIA CF",
    logo: "/lovable-uploads/3d9c3a9f-02ee-4dd5-ab9d-ccf9f5e94586.png"
  },
  {
    id: "valladolid",
    name: "REAL VALLADOLID",
    logo: "/lovable-uploads/22967fd5-b99e-4a09-b25e-bf79873fd02c.png"
  }
];

// Competiciones
const competitions: CompetitionData[] = [
  {
    id: "laliga",
    name: "LaLiga",
    logo: "/lovable-uploads/7b309617-02f6-41f0-9890-83d760a4914a.png"
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    logo: "/lovable-uploads/d1bb3c7d-7561-45ac-9372-fc8e5e1f181f.png"
  },
  {
    id: "fifa-qualifiers",
    name: "FIFA Qualifiers",
    logo: "/lovable-uploads/3837ca71-d4bf-4a75-83ea-38e71c82499c.png"
  }
];

// Funciones para obtener datos
export const getTeams = (): TeamData[] => {
  return teams;
};

export const getCompetitions = (): CompetitionData[] => {
  return competitions;
};

export const getTeamById = (id: string): TeamData | undefined => {
  return teams.find(team => team.id === id);
};

export const getCompetitionById = (id: string): CompetitionData | undefined => {
  return competitions.find(competition => competition.id === id);
};
