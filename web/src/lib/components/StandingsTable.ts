import type { Standing, Standings } from '$lib/models/Standings.model';

// TODO: figure out a way to render a svelte component instead of this
// weird JSX-like approach
export function StandingsTable(standings: Standings) {
  const row = (team: Standing, i: number) =>
    (i === 6 ? `<tr><td></td></tr>` : '') +
    `<tr>
      <td>
        ${i + 1}
      </td>
      <td>
        ${team.teamName}
      </td>
      <td>
        ${team.wins}-${team.losses}
      </td>
    </tr>`;
  return `
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Record</th>
          <!-- <th>PF</th>
          <th>PA</th> -->
        </tr>
      </thead>
      <tbody>
        ${standings.map(row).join('')}
      </tbody>
    </table>
  `;
}
