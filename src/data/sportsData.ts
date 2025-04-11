
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
    logo: "/lovable-uploads/90963c8c-14ec-4064-afe8-6eeec7635eaf.png"
  },
  {
    id: "laliga-hypermotion",
    name: "LaLiga Hypermotion",
    logo: "/lovable-uploads/a212f979-e598-407c-b70c-08be8b6af25b.png"
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    logo: "/lovable-uploads/b6e59334-283a-400b-b501-c5eced373d80.png"
  },
  {
    id: "premier-league",
    name: "Premier League",
    logo: "/lovable-uploads/12eed8f3-ce1c-4010-99c0-58de6744b66c.png"
  },
  {
    id: "serie-a",
    name: "Serie A",
    logo: "/lovable-uploads/aa818ade-83a1-41a0-9123-16bfde9941b6.png"
  },
  {
    id: "fifa-qualifiers",
    name: "FIFA World Cup Qualifiers",
    logo: "/lovable-uploads/b78f5f7c-9e55-4457-8776-d807131a8966.png"
  },
  {
    id: "champions-league",
    name: "UEFA Champions League",
    logo: "/lovable-uploads/0818ccf2-c294-4abd-b099-00995a37dde9.png"
  },
  {
    id: "europa-league",
    name: "UEFA Europa League",
    logo: "/lovable-uploads/efd7aae1-ae6e-4265-8356-de60440e4ff3.png"
  },
  {
    id: "copa-del-rey",
    name: "Copa del Rey",
    logo: "/lovable-uploads/69b96579-41ec-49ef-acbe-2a481ff97d10.png"
  },
  {
    id: "fa-cup",
    name: "Emirates FA Cup",
    logo: "/lovable-uploads/78df498a-0fc1-4851-9537-3375bc6db0f4.png"
  },
  {
    id: "carabao-cup",
    name: "Carabao Cup",
    logo: "/lovable-uploads/72c3e5ba-5b24-4950-a498-8a88b3abaa29.png"
  },
  {
    id: "coppa-italia",
    name: "Coppa Italia",
    logo: "/lovable-uploads/14e67a32-0993-4e47-ac21-94edc3da1455.png"
  },
  {
    id: "supercopa-espana",
    name: "Supercopa de España",
    logo: "/lovable-uploads/57ab70aa-3860-41f1-96cc-50887a11a3b5.png"
  },
  {
    id: "supercoppa-italiana",
    name: "Supercoppa Italiana",
    logo: "/lovable-uploads/a2dfe5e7-b042-4969-9b28-7f2ac9a9db34.png"
  },
  {
    id: "uefa-nations-league",
    name: "UEFA Nations League",
    logo: "/lovable-uploads/68a9569e-ba47-4c17-9610-fb57c81e470a.png"
  },
  {
    id: "copa-libertadores",
    name: "CONMEBOL Libertadores",
    logo: "/lovable-uploads/c19a3485-404c-4122-be6d-5dfa2b5887b0.png"
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
