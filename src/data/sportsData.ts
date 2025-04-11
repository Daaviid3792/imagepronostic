import { TeamData, CompetitionData } from "@/types/match";

// Teams
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
  },
  {
    id: "central-cordoba",
    name: "CENTRAL CÓRDOBA",
    logo: "/lovable-uploads/6f62440c-bb09-46f9-8b6a-4a64c25faf25.png"
  },
  {
    id: "estudiantes",
    name: "ESTUDIANTES DE LA PLATA",
    logo: "/lovable-uploads/b85913f6-2dab-4920-8150-39e3afdaf76f.png"
  },
  {
    id: "racing-club",
    name: "RACING CLUB",
    logo: "/lovable-uploads/a512f96c-830d-4f60-a36a-e72c5331d290.png"
  },
  {
    id: "velez-sarsfield",
    name: "VÉLEZ SARSFIELD",
    logo: "/lovable-uploads/001fa7da-25db-4bb3-832d-8c026b9d282e.png"
  },
  {
    id: "bolivar",
    name: "BOLÍVAR",
    logo: "/lovable-uploads/dab4c02a-7999-4f6b-ae3c-5067c258269b.png"
  },
  {
    id: "san-antonio",
    name: "SAN ANTONIO",
    logo: "/lovable-uploads/bd8ca8ca-e265-41db-a688-763cb843f02f.png"
  },
  {
    id: "bahia",
    name: "ESPORTE CLUBE BAHIA",
    logo: "/lovable-uploads/bb4a8e5f-9b85-45f1-9c37-d1a9e097cfcc.png"
  },
  {
    id: "botafogo",
    name: "BOTAFOGO",
    logo: "/lovable-uploads/38bdf3e0-dd35-4b1d-bd5d-7a92452abef4.png"
  },
  {
    id: "flamengo",
    name: "FLAMENGO",
    logo: "/lovable-uploads/f5dd6ee7-a1ed-435a-97c7-bcec8ad7688d.png"
  },
  {
    id: "fortaleza",
    name: "FORTALEZA",
    logo: "/lovable-uploads/21fdfea6-a73a-4d0e-9e8b-ddc292f2e9dd.png"
  },
  {
    id: "internacional",
    name: "INTERNACIONAL",
    logo: "/lovable-uploads/76979b0a-7227-45c0-954d-fdaea5391d63.png"
  },
  {
    id: "palmeiras",
    name: "PALMEIRAS",
    logo: "/lovable-uploads/c8af9970-c8aa-4dec-9555-fa544f0c3102.png"
  },
  {
    id: "sao-paulo",
    name: "SÃO PAULO FC",
    logo: "/lovable-uploads/f53105bf-b6df-4dea-b9f4-6e7809ca116d.png"
  },
  {
    id: "colo-colo",
    name: "COLO-COLO",
    logo: "/lovable-uploads/96467229-90b4-47ba-bb76-e2d55e3f95de.png"
  }
];

// Competitions
const competitions: CompetitionData[] = [
  {
    id: "laliga",
    name: "LaLiga",
    logo: "/lovable-uploads/f102c84e-6227-424b-8e0b-c4889d0a34a1.png"
  },
  {
    id: "laliga-hypermotion",
    name: "LaLiga Hypermotion",
    logo: "/lovable-uploads/70b75b7d-83ae-4220-8526-97684a09c5bf.png"
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    logo: "/lovable-uploads/a8113cb9-eee6-42c1-b942-022ba71049fd.png"
  },
  {
    id: "premier-league",
    name: "Premier League",
    logo: "/lovable-uploads/e57e210a-93fb-4815-8660-2c638dfb4159.png"
  },
  {
    id: "serie-a",
    name: "Serie A",
    logo: "/lovable-uploads/cb19ae6b-5eb9-49c8-9665-c0a5c6f4f4cd.png"
  },
  {
    id: "fifa-qualifiers",
    name: "FIFA World Cup Qualifiers",
    logo: "/lovable-uploads/8293aead-0ec0-4678-9f16-e19d530be339.png"
  },
  {
    id: "champions-league",
    name: "UEFA Champions League",
    logo: "/lovable-uploads/6abff526-6610-44c8-9b84-ec714b97d6e1.png"
  },
  {
    id: "europa-league",
    name: "UEFA Europa League",
    logo: "/lovable-uploads/6d3bdec9-7d4d-45ab-81d1-a5015e6a5b96.png"
  },
  {
    id: "copa-del-rey",
    name: "Copa del Rey",
    logo: "/lovable-uploads/598d30db-f5f3-4f01-8ca8-8cd13f76e31f.png"
  },
  {
    id: "fa-cup",
    name: "Emirates FA Cup",
    logo: "/lovable-uploads/11e48d83-b5ee-412c-8a0a-489fe68baab9.png"
  },
  {
    id: "carabao-cup",
    name: "Carabao Cup",
    logo: "/lovable-uploads/5fcbb392-f1d7-4eb7-82cf-397efcc0c567.png"
  },
  {
    id: "coppa-italia",
    name: "Coppa Italia",
    logo: "/lovable-uploads/4eb93df2-308d-40da-a518-722f7e079cfb.png"
  },
  {
    id: "supercopa-espana",
    name: "Supercopa de España",
    logo: "/lovable-uploads/53a07a92-30fa-470d-baec-f2680e680720.png"
  },
  {
    id: "supercoppa-italiana",
    name: "Supercoppa Italiana",
    logo: "/lovable-uploads/a5f068a6-2d5e-4d28-ae9b-1446a37d4c0a.png"
  },
  {
    id: "uefa-nations-league",
    name: "UEFA Nations League",
    logo: "/lovable-uploads/71a52d90-ba0a-49e2-91fd-80f5f85725c8.png"
  },
  {
    id: "copa-libertadores",
    name: "CONMEBOL Libertadores",
    logo: "/lovable-uploads/8de0f57f-7b11-4580-99df-44c5c763ceb6.png"
  }
];

// Functions to get data
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
