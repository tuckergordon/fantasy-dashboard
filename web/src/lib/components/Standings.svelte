<script lang="ts">
  import type { Standings } from '$lib/models/Standings.model';

  let { standings }: { standings: Standings } = $props();
</script>

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
    {#each standings as team, i}
      <!-- TODO: modify table with CSS instead of inserting blank row -->
      {#if i === 6}
        <tr><td></td></tr>
      {/if}
      <tr>
        <td>
          {i + 1}
        </td>
        <td>
          {team.teamName}
        </td>
        <td>
          {team.wins}-{team.losses}
        </td>
        <!-- <td>
          {team.pf}
        </td>
        <td>
          {team.pa}
        </td> -->
      </tr>
    {/each}
  </tbody>
</table>
