export interface User {
  user_id: string;
  username: string;
  display_name: string;
  avatar: string;
  metadata: UserMetadata;
  is_owner: boolean;
}

export interface UserMetadata {
  team_name: string;
}

export interface League {
  total_rosters: number;
  status: string;
  sport: string;
  settings: LeagueSettings;
  season_type: string;
  season: string;
  scoring_settings: LeagueScoringSettings;
  // TODO: update type
  roster_positions: unknown[];
  previous_league_id: string;
  name: string;
  league_id: string;
  draft_id: string;
  avatar: string;
}

// TODO: update type
// export interface LeagueSettings {}
export type LeagueSettings = unknown;

// TODO: update type
// export interface LeagueScoringSettings {}
export type LeagueScoringSettings = unknown;

export interface Roster {
  starters: string[];
  settings: RosterSettings;
  roster_id: number;
  reserve: unknown[];
  players: string[];
  owner_id: string;
  league_id: string;
}

export interface RosterSettings {
  wins: number;
  waiver_position: number;
  waiver_budget_used: number;
  total_moves: number;
  ties: number;
  losses: number;
  fpts: number;
  fpts_decimal: number;
  fpts_against_decimal: number;
  fpts_against: number;
}
