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
  },
  // New teams added from the latest batch
  {
    id: "universidad-chile",
    name: "UNIVERSIDAD DE CHILE",
    logo: "/lovable-uploads/1fde970c-99c5-419f-af0a-a9068b0ca155.png"
  },
  {
    id: "atletico-bucaramanga",
    name: "ATLÉTICO BUCARAMANGA",
    logo: "/lovable-uploads/02867a78-2563-4411-ae54-86600c1a8a27.png"
  },
  {
    id: "atletico-nacional",
    name: "ATLÉTICO NACIONAL",
    logo: "/lovable-uploads/de3dcea2-89ad-4da0-90b8-c55e5b8b61b8.png"
  },
  {
    id: "barcelona-sc",
    name: "BARCELONA SC",
    logo: "/lovable-uploads/16edeb16-7894-4b33-9346-b8a0ca7c6a27.png"
  },
  {
    id: "independiente",
    name: "INDEPENDIENTE",
    logo: "/lovable-uploads/6d678c7e-b548-4dca-ad8c-9b7f20b0294d.png"
  },
  {
    id: "ldu-quito",
    name: "LDU QUITO",
    logo: "/lovable-uploads/f81b2a49-63b1-428b-83d1-b9b7f3670bfc.png"
  },
  {
    id: "blackburn",
    name: "BLACKBURN ROVERS FC",
    logo: "/lovable-uploads/dc558ab3-dfa0-4ec7-822d-41da00ec6938.png"
  },
  {
    id: "cardiff-city",
    name: "CARDIFF CITY AFC",
    logo: "/lovable-uploads/e366a475-c519-4f74-890b-72462338e6ff.png"
  },
  {
    id: "coventry-city",
    name: "COVENTRY CITY FC",
    logo: "/lovable-uploads/f3c2a5bb-1eda-4068-bfa4-cb5a9bf06e85.png"
  },
  {
    id: "derby-county",
    name: "DERBY COUNTY FC",
    logo: "/lovable-uploads/fd35fa4a-4ba7-4c0a-b54c-e9656f7f34ea.png"
  },
  {
    id: "hull-city",
    name: "HULL CITY AFC",
    logo: "/lovable-uploads/b4b49070-133a-4dfd-9e59-c47fecdd491a.png"
  },
  {
    id: "leeds-united",
    name: "LEEDS UNITED FC",
    logo: "/lovable-uploads/14b095be-da58-4639-822c-81ce31f8d033.png"
  },
  {
    id: "middlesbrough",
    name: "MIDDLESBROUGH FC",
    logo: "/lovable-uploads/e31d8467-421f-445e-b5e2-7c78328d1d8e.png"
  },
  {
    id: "millwall",
    name: "MILLWALL FC",
    logo: "/lovable-uploads/5e259bed-a3f1-41de-b2c0-ff6c452e69a1.png"
  },
  // New English teams
  {
    id: "preston-north-end",
    name: "PRESTON NORTH END FC",
    logo: "/lovable-uploads/c4296ae2-7ed9-4633-96e8-ce09efc2816f.png"
  },
  {
    id: "queens-park-rangers",
    name: "QUEENS PARK RANGERS",
    logo: "/lovable-uploads/cfba6910-4234-4b23-9f7d-4f1811265b62.png"
  },
  {
    id: "sheffield-united",
    name: "SHEFFIELD UNITED FC",
    logo: "/lovable-uploads/e93dcd10-0522-41c4-905f-9d61dcccd71e.png"
  },
  {
    id: "sheffield-wednesday",
    name: "SHEFFIELD WEDNESDAY",
    logo: "/lovable-uploads/72f62782-5df5-4365-a412-942bc9ccda62.png"
  },
  {
    id: "stoke-city",
    name: "STOKE CITY FC",
    logo: "/lovable-uploads/7f98a324-4fdf-442e-a783-19dc5452f9fe.png"
  },
  {
    id: "sunderland",
    name: "SUNDERLAND AFC",
    logo: "/lovable-uploads/652f492d-0f39-4442-8fc0-74bc80569020.png"
  },
  {
    id: "swansea-city",
    name: "SWANSEA CITY AFC",
    logo: "/lovable-uploads/2b84ce47-b3cc-4295-bdd0-22923147d2b9.png"
  },
  {
    id: "watford",
    name: "WATFORD FC",
    logo: "/lovable-uploads/60613db6-3c2b-4be1-a602-2403694ef158.png"
  },
  {
    id: "west-bromwich",
    name: "WEST BROMWICH ALBION",
    logo: "/lovable-uploads/e041b7ec-e5ff-4299-a595-2643f1987106.png"
  },
  // Premier League teams
  {
    id: "arsenal",
    name: "ARSENAL",
    logo: "/lovable-uploads/fe2c14a7-22df-461d-81f9-3d9b58564d1a.png"
  },
  {
    id: "aston-villa",
    name: "ASTON VILLA FC",
    logo: "/lovable-uploads/e41078a5-bcbf-46fe-9580-097a57b8b67d.png"
  },
  {
    id: "bournemouth",
    name: "AFC BOURNEMOUTH",
    logo: "/lovable-uploads/7957ab4e-3f3c-4761-b805-936bc4dc554e.png"
  },
  {
    id: "brentford",
    name: "BRENTFORD FC",
    logo: "/lovable-uploads/8215fc6f-4e3d-4106-bb46-fc859f68bac7.png"
  },
  {
    id: "brighton",
    name: "BRIGHTON & HOVE ALBION",
    logo: "/lovable-uploads/3f028924-6554-4ba5-850f-f753e3837840.png"
  },
  // New Premier League teams
  {
    id: "chelsea",
    name: "CHELSEA FC",
    logo: "/lovable-uploads/878cee51-97c6-440c-b7d7-538558f8563e.png"
  },
  {
    id: "everton",
    name: "EVERTON FC",
    logo: "/lovable-uploads/40a7ae3e-717b-4f52-babb-a2cf74b2745c.png"
  },
  {
    id: "fulham",
    name: "FULHAM FC",
    logo: "/lovable-uploads/a8fc332f-46cc-46bf-a0ba-738a2f78f34c.png"
  },
  {
    id: "ipswich-town",
    name: "IPSWICH TOWN FC",
    logo: "/lovable-uploads/f02ac916-b8ac-4fff-ad52-69abca257ebc.png"
  },
  {
    id: "leicester-city",
    name: "LEICESTER CITY FC",
    logo: "/lovable-uploads/06ee7aa0-7b3b-47dc-bc4c-a064a7cd77b9.png"
  },
  {
    id: "liverpool",
    name: "LIVERPOOL FC",
    logo: "/lovable-uploads/a877d1f6-7482-4e65-9df6-25d2ae24588d.png"
  },
  {
    id: "manchester-city",
    name: "MANCHESTER CITY FC",
    logo: "/lovable-uploads/ae92c173-30e9-48b6-923a-45cfaa230aed.png"
  },
  {
    id: "manchester-united",
    name: "MANCHESTER UNITED FC",
    logo: "/lovable-uploads/bfb7087e-4abf-4db0-83f9-aeb4a54fbf29.png"
  },
  {
    id: "newcastle-united",
    name: "NEWCASTLE UNITED FC",
    logo: "/lovable-uploads/cf75e18c-1274-4ac4-a18e-c68edb8496b5.png"
  },
  {
    id: "nottingham-forest",
    name: "NOTTINGHAM FOREST FC",
    logo: "/lovable-uploads/1420f98c-25a0-4d82-8b46-962535394eff.png"
  },
  {
    id: "crystal-palace",
    name: "CRYSTAL PALACE FC",
    logo: "/lovable-uploads/a51a4caa-41ac-4a60-837a-6b549b77e6ae.png"
  },
  {
    id: "southampton",
    name: "SOUTHAMPTON FC",
    logo: "/lovable-uploads/7309c69d-94df-4cf7-af49-9607380bb044.png"
  },
  {
    id: "tottenham",
    name: "TOTTENHAM HOTSPUR FC",
    logo: "/lovable-uploads/a16b6c0d-5ea1-4c68-ab48-f295a4afcb9f.png"
  },
  {
    id: "west-ham",
    name: "WEST HAM UNITED FC",
    logo: "/lovable-uploads/6ec4844f-49f5-445b-814c-6f29ad7a35e5.png"
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
