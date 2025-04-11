import { TeamData, CompetitionData } from "@/types/match";

// Teams
const teams: TeamData[] = [
  {
    id: "real-madrid",
    name: "REAL MADRID CF",
    logo: "/lovable-uploads/e47eba9a-f2a9-465e-8ffc-b65e979e760c.png"
  },
  {
    id: "osasuna",
    name: "CA OSASUNA",
    logo: "/lovable-uploads/3837ca71-d4bf-4a75-83ea-38e71c82499c.png"
  },
  {
    id: "rayo-vallecano",
    name: "RAYO VALLECANO",
    logo: "/lovable-uploads/48ef7f4c-e938-47ea-a13d-89f94e3228f9.png"
  },
  {
    id: "real-sociedad",
    name: "REAL SOCIEDAD",
    logo: "/lovable-uploads/a028f63c-ed76-4719-a049-65fff816c947.png"
  },
  {
    id: "sevilla",
    name: "SEVILLA FC",
    logo: "/lovable-uploads/a293a021-3d60-4768-9e45-6bdba65928b5.png"
  },
  {
    id: "valencia",
    name: "VALENCIA CF",
    logo: "/lovable-uploads/0d8d7a24-ab71-48a0-a42a-48a2e841b1a3.png"
  },
  {
    id: "valladolid",
    name: "REAL VALLADOLID CF",
    logo: "/lovable-uploads/cb8c586f-c72b-450f-9659-966755f59429.png"
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
    name: "CLUB BOLÍVAR",
    logo: "/lovable-uploads/dab4c02a-7999-4f6b-ae3c-5067c258269b.png"
  },
  {
    id: "san-antonio",
    name: "SAN ANTONIO FC",
    logo: "/lovable-uploads/bd8ca8ca-e265-41db-a688-763cb843f02f.png"
  },
  {
    id: "bahia",
    name: "ESPORTE CLUBE BAHIA",
    logo: "/lovable-uploads/bb4a8e5f-9b85-45f1-9c37-d1a9e097cfcc.png"
  },
  {
    id: "botafogo",
    name: "BOTAFOGO FR",
    logo: "/lovable-uploads/38bdf3e0-dd35-4b1d-bd5d-7a92452abef4.png"
  },
  {
    id: "flamengo",
    name: "CR FLAMENGO",
    logo: "/lovable-uploads/f5dd6ee7-a1ed-435a-97c7-bcec8ad7688d.png"
  },
  {
    id: "fortaleza",
    name: "FORTALEZA EC",
    logo: "/lovable-uploads/21fdfea6-a73a-4d0e-9e8b-ddc292f2e9dd.png"
  },
  {
    id: "internacional",
    name: "SC INTERNACIONAL",
    logo: "/lovable-uploads/76979b0a-7227-45c0-954d-fdaea5391d63.png"
  },
  {
    id: "palmeiras",
    name: "SE PALMEIRAS",
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
    name: "CA INDEPENDIENTE",
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
  {
    id: "arsenal",
    name: "ARSENAL FC",
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
  },
  {
    id: "athletic-bilbao",
    name: "ATHLETIC CLUB",
    logo: "/lovable-uploads/796bff0e-3089-4d46-9f01-291cdf5908b9.png"
  },
  {
    id: "atletico-madrid",
    name: "CLUB ATLÉTICO DE MADRID",
    logo: "/lovable-uploads/c2fa529e-98b5-4b4e-aa08-f66dd846782a.png"
  },
  {
    id: "barcelona",
    name: "FC BARCELONA",
    logo: "/lovable-uploads/d2bf8d55-b9a0-49b6-bc69-538513efc647.png"
  },
  {
    id: "betis",
    name: "REAL BETIS BALOMPIÉ",
    logo: "/lovable-uploads/ec6ec7b6-7b07-4b64-a003-490add55a3f4.png"
  },
  {
    id: "celta-vigo",
    name: "RC CELTA DE VIGO",
    logo: "/lovable-uploads/c19abce4-726f-4bf6-abb5-ed85740e1412.png"
  },
  {
    id: "espanyol",
    name: "RCD ESPANYOL",
    logo: "/lovable-uploads/dd533563-874b-492a-b652-e2d86f7ffcbf.png"
  },
  {
    id: "getafe",
    name: "GETAFE CF",
    logo: "/lovable-uploads/9dafbf1e-c275-411f-a0b6-a273f0a53288.png"
  },
  {
    id: "girona",
    name: "GIRONA FC",
    logo: "/lovable-uploads/45f7a9b1-4cdf-4ad3-9443-e534545e2658.png"
  },
  {
    id: "albacete",
    name: "ALBACETE BALOMPIÉ",
    logo: "/lovable-uploads/eaf87105-4082-4410-80b8-38672370afc9.png"
  },
  {
    id: "almeria",
    name: "UD ALMERÍA",
    logo: "/lovable-uploads/a02e41a3-73a9-4af3-b652-c712be93879d.png"
  },
  {
    id: "burgos",
    name: "BURGOS CF",
    logo: "/lovable-uploads/cc81b51a-f99d-4e60-8b64-e1516e7b9a5c.png"
  },
  {
    id: "cadiz",
    name: "CÁDIZ CF",
    logo: "/lovable-uploads/97dcc491-b646-4a0b-bde9-a39c65f58e07.png"
  },
  {
    id: "alaves",
    name: "DEPORTIVO ALAVÉS",
    logo: "/lovable-uploads/91972058-1cda-4a4c-b3b0-2e057117a21c.png"
  },
  {
    id: "wolves",
    name: "WOLVERHAMPTON WANDERERS",
    logo: "/lovable-uploads/6ffacc14-fb58-4ea7-ac74-66ab654e7c3b.png"
  },
  {
    id: "fc-cartagena",
    name: "FC CARTAGENA",
    logo: "/lovable-uploads/c2a52879-809b-4d89-b68b-777329817bc2.png"
  },
  {
    id: "cd-castellon",
    name: "CD CASTELLÓN",
    logo: "/lovable-uploads/9dcfbaef-1e00-4f18-af50-e230aa206920.png"
  },
  {
    id: "nastic-tarragona",
    name: "GIMNÀSTIC DE TARRAGONA",
    logo: "/lovable-uploads/bde3037c-4cf1-4815-a1c5-e74e6e435078.png"
  },
  {
    id: "deportivo-la-coruna",
    name: "RC DEPORTIVO DE LA CORUÑA",
    logo: "/lovable-uploads/85668405-2bd6-4e06-b887-c981bfac280c.png"
  },
  {
    id: "sd-eibar",
    name: "SD EIBAR",
    logo: "/lovable-uploads/6442a052-ee1a-4665-9f87-7d332f23fa25.png"
  },
  {
    id: "elche-cf",
    name: "ELCHE CF",
    logo: "/lovable-uploads/6fe44b6f-6435-4f3b-a9f6-159f5ef6a358.png"
  },
  {
    id: "cd-eldense",
    name: "CD ELDENSE",
    logo: "/lovable-uploads/fb02e754-5064-49ca-84b0-3a88f299c39a.png"
  },
  {
    id: "granada-cf",
    name: "GRANADA CF",
    logo: "/lovable-uploads/a1c8c05e-dbfd-425d-82a1-efce62a07e0f.png"
  },
  {
    id: "sd-huesca",
    name: "SD HUESCA",
    logo: "/lovable-uploads/253dcdde-51ec-4166-8821-38b919515a4f.png"
  },
  {
    id: "levante-ud",
    name: "LEVANTE UD",
    logo: "/lovable-uploads/887b31fd-84b7-47a8-b1e7-5f02b10f163a.png"
  },
  {
    id: "malaga-cf",
    name: "MÁLAGA CF",
    logo: "/lovable-uploads/854183a3-b4a1-4b8e-bad5-e3a111015718.png"
  },
  {
    id: "cd-mirandes",
    name: "CD MIRANDÉS",
    logo: "/lovable-uploads/4b459525-f734-4ccf-a9ca-d0e51399d0c1.png"
  },
  {
    id: "racing-ferrol",
    name: "RACING CLUB FERROL",
    logo: "/lovable-uploads/0d9a1d7e-3fad-499f-948e-e9935cdee1a2.png"
  },
  {
    id: "racing-santander",
    name: "REAL RACING CLUB",
    logo: "/lovable-uploads/ccafcfc9-fd7f-4899-b9fa-2d5e389ee30e.png"
  },
  {
    id: "real-oviedo",
    name: "REAL OVIEDO",
    logo: "/lovable-uploads/6d5b475f-fe8c-435b-81a5-c8da1c0d8c87.png"
  },
  {
    id: "sporting-gijon",
    name: "REAL SPORTING DE GIJÓN",
    logo: "/lovable-uploads/76547155-feea-406f-be3e-ea923c864459.png"
  },
  {
    id: "tenerife",
    name: "CD TENERIFE",
    logo: "/lovable-uploads/c19a3485-404c-4122-be6d-5dfa2b5887b0.png" // Corregido logo duplicado
  },
  {
    id: "ud-las-palmas",
    name: "UD LAS PALMAS",
    logo: "/lovable-uploads/ede88a21-5226-4a62-bebc-9ecd35989b7b.png"
  },
  {
    id: "cd-leganes",
    name: "CD LEGANÉS",
    logo: "/lovable-uploads/a6c765b4-9381-4bc8-8283-0e18d958f0e3.png"
  },
  {
    id: "rcd-mallorca",
    name: "RCD MALLORCA",
    logo: "/lovable-uploads/1a69da3b-cfda-4fe9-a83a-b9c1222becb5.png"
  },
  {
    id: "ca-osasuna",
    name: "CA OSASUNA",
    logo: "/lovable-uploads/6dac6242-8ed8-419c-9369-5a30deabc68e.png"
  },
  {
    id: "villarreal",
    name: "VILLARREAL CF",
    logo: "/lovable-uploads/d3f24a3b-2d49-45e9-803d-a80184a0b6cb.png"
  },
  {
    id: "ajax",
    name: "AJAX AMSTERDAM",
    logo: "/lovable-uploads/d7d23e29-c4c7-4458-a2f3-7fa11bb76709.png"
  },
  {
    id: "anderlecht",
    name: "RSC ANDERLECHT",
    logo: "/lovable-uploads/b8b18433-7190-4680-b2b9-6d27adbe64c5.png"
  },
  {
    id: "az-alkmaar",
    name: "AZ ALKMAAR",
    logo: "/lovable-uploads/f50a9a51-412e-4118-9873-e423983d805f.png"
  },
  {
    id: "bodo-glimt",
    name: "FK BODØ/GLIMT",
    logo: "/lovable-uploads/ad52cc64-c329-4922-9c1f-a8a0213f69ec.png"
  },
  {
    id: "fenerbahce",
    name: "FENERBAHÇE SK",
    logo: "/lovable-uploads/66edb00e-c06a-44bd-92b6-212692fabff5.png"
  },
  {
    id: "ferencvaros",
    name: "FERENCVÁROSI TC",
    logo: "/lovable-uploads/b2b7807e-8cc0-45f0-96bf-b65673b6b5ba.png"
  },
  {
    id: "galatasaray",
    name: "GALATASARAY SK",
    logo: "/lovable-uploads/4a31aefc-0e0f-4b27-9c6c-506e269fc2ec.png"
  },
  {
    id: "fc-midtjylland",
    name: "FC MIDTJYLLAND",
    logo: "/lovable-uploads/9cfbd3ed-3e46-4cd6-b4b4-64208b2d53cc.png"
  },
  {
    id: "paok",
    name: "PAOK FC",
    logo: "/lovable-uploads/9fdfb56e-2889-4725-9a17-49dab4bdd0f7.png"
  },
  {
    id: "fc-porto",
    name: "FC PORTO",
    logo: "/lovable-uploads/a45eb0fa-5b5d-4603-8b64-0c2700b66b7c.png"
  },
  {
    id: "real-sociedad",
    name: "REAL SOCIEDAD",
    logo: "/lovable-uploads/6e1b7f31-b8ba-42cb-8215-61e1a9b931b6.png"
  },
  {
    id: "as-roma",
    name: "AS ROMA",
    logo: "/lovable-uploads/940cd1fc-c811-42d9-aaf3-c79ec850db68.png"
  },
  {
    id: "steaua-bucuresti",
    name: "STEAUA BUCUREŞTI",
    logo: "/lovable-uploads/cf208fce-fc65-4d9f-9668-4bf31aa15e17.png"
  }
];

// Competitions
const competitions: CompetitionData[] = [
  {
    id: "la-liga",
    name: "LaLiga EA Sports",
    logo: "/lovable-uploads/69b96579-41ec-49ef
