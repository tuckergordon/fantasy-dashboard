<script lang="ts">
  import Icon from '@iconify/svelte';

  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';

  import { page } from '$app/stores';
</script>

<AppBar background="bg-primary-500 dark:bg-surface-800 text-on-surface-token">
  <!-- Placeholder for now just to keep trail elements on the right -->
  <svelte:fragment slot="lead">
    {#if $page.data?.metadata?.id}
      <a
        href="/{$page.data.metadata.id}"
        class="flex items-center font-bold"
        data-sveltekit-preload-data="hover"
      >
        {#if $page.data?.league_avatar}
          <img
            src="https://sleepercdn.com/avatars/thumbs/{$page.data.league_avatar}"
            class="mr-2 h-10 rounded-full"
            alt={$page.data.metadata.name}
          />
        {/if}
        {$page.data.metadata.name}
      </a>
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a
      class="btn-icon hover:variant-soft-surface hover:text-on-primary-token !mx-0"
      href="https://github.com/tuckergordon/fantasy-dashboard"
      target="_blank"
      rel="noreferrer"
    >
      <Icon icon="fa-brands:github" />
    </a>
    <LightSwitch rounded="rounded-full" />
  </svelte:fragment>
</AppBar>
