export type Standings = Standing[];

export interface Standing {
  teamId: bigint;
  teamName: string;
  wins: number;
  losses: number;
  pf: number;
  pa: number;
  maxPf: number;
}
