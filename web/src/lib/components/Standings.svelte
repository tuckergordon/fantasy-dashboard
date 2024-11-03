<script lang="ts">
  import type { Roster } from '$lib/models/Sleeper.model';

  let { standings }: { standings: (Roster & { name: string })[] } = $props();
</script>

<ol>
  {#each standings as team}
    <li>
      {team.name}
      ({team.settings.wins}-{team.settings.losses})
    </li>
  {/each}
</ol>
