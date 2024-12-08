export type Standings = Standing[];

export interface Standing {
  teamName: string;
  wins: number;
  losses: number;
  pf: number;
  pa: number;
  maxPf: number;
}
