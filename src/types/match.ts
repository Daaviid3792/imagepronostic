
export interface MatchData {
  homeTeam: string;
  awayTeam: string;
  competition: string;
  date: Date;
}

export interface TeamData {
  id: string;
  name: string;
  logo: string;
}

export interface CompetitionData {
  id: string;
  name: string;
  logo: string;
}
