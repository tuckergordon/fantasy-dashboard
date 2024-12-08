import type { Standing, Standings } from '$lib/models/Standings.model';

// original team: current team
const TRADED_FIRSTS = {
  devspiel: 'tgordon18',
  benstone099: 'nachocamacho',
  tgordon18: 'BrianEvans',
  julianpdx: 'ConQD',
  Crams_Clams: 'nachocamacho',
  DanBrownOnTrail: 'jseibert',
} as { [key: string]: string };

// TODO: figure out a way to render a svelte component instead of this
// weird JSX-like approach
export function LotteryTable(standings: Standings, tradedPicks = TRADED_FIRSTS, nPicks = 6) {
  const lottoStandings = standings.slice(-nPicks).sort((a, b) => a.maxPf - b.maxPf);

  const row = (team: Standing, i: number) =>
    (i === 6 ? `<tr><td></td></tr>` : '') +
    `<tr>
      <td>
        ${i + 1}
      </td>
      <td>
        ${team.userName in tradedPicks ? `${tradedPicks[team.userName]} (via ${team.userName})` : team.userName}
      </td>
      <td>
        ${team.maxPf}
      </td>
    </tr>`;
  return `
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Max PF</th>
        </tr>
      </thead>
      <tbody>
        ${lottoStandings.map(row).join('')}
      </tbody>
    </table>
  `;
}
