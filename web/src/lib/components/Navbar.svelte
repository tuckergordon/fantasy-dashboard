<script lang="ts">
  import Icon from '@iconify/svelte';

  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';

  import { page } from '$app/stores';
</script>

<AppBar background="bg-primary-600 dark:bg-surface-500 text-surface">
  <!-- Placeholder for now just to keep trail elements on the right -->
  {#snippet lead()}
    <a
      href="/"
      class="mr-4 flex shrink-0 items-center font-bold italic"
      data-sveltekit-preload-data="hover">
      <img src="/images/mmish.png" class="h-10 rounded-full" alt="'mmish" />
      <span class="mx-2 hidden sm:inline">'mmish</span>
    </a>
    {#if $page.data?.metadata?.id}
      <a
        href="/{$page.data.metadata.id}"
        class="border-l border-current pl-6"
        data-sveltekit-preload-data="hover">
        {$page.data.metadata.name}
      </a>
    {/if}
  {/snippet}

  {#snippet trail()}
    <a
      class="btn-icon hover:variant-soft-surface hover:text-on-primary-token !mx-0"
      href="https://github.com/tuckergordon/mmish"
      target="_blank"
      rel="noreferrer">
      <Icon icon="fa-brands:github" />
    </a>
    <LightSwitch rounded="rounded-full" />
  {/snippet}
</AppBar>
