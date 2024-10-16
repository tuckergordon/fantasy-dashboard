<script lang="ts">
	import type { MatchupGroups } from "$lib/sleeper-utils";

	export let matchupGroups: MatchupGroups;
</script>

<table class="table rounded-sm">
  <tbody>
    {#each matchupGroups as [_, matchups]}
      <tr class="text-gray-500">
        <td class={matchups[0].points > matchups[1].points ? 'font-semibold bg-green-200' : 'bg-red-200'}>
          <div class="flex flex-col gap-1 justify-center">
            <div>{matchups[0].roster.name}</div>
            <div>{matchups[0].points}</div>
          </div>
        </td>
       <td class="bg-slate-100 text-center">vs</td>
       <td class={matchups[1].points > matchups[0].points ? 'font-semibold bg-green-200' : 'bg-red-200'}>
        <div class="flex flex-col gap-1 justify-center">
          <div>{matchups[1].roster.name}</div>
          <div>{matchups[1].points}</div>
        </div>
      </td>
      </tr>
    {/each}
  </tbody>
</table>
