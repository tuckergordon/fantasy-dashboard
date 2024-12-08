export type Standings = Standing[];

export interface Standing {
  teamName: string;
  userId: string;
  userName: string;
  wins: number;
  losses: number;
  pf: number;
  pa: number;
  maxPf: number;
}
