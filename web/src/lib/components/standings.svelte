<script lang="ts">
	export let standings;
</script>

<ol>
	{#each standings as team}
		<li>
			{team.name}
			({team.settings.wins}-{team.settings.losses})
		</li>
	{/each}
</ol>
