<script lang="ts">
  import Icon from '@iconify/svelte';

  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-primary-500 dark:bg-surface-800 text-on-surface-token">
  <!-- Placeholder for now just to keep trail elements on the right -->
  <svelte:fragment slot="lead">&nbsp;</svelte:fragment>
  <svelte:fragment slot="trail">
    <a
      class="btn-icon !mx-0 hover:variant-soft-surface hover:text-on-primary-token"
      href="https://github.com/tuckergordon/fantasy-dashboard"
      target="_blank"
      rel="noreferrer"
    >
      <Icon icon="fa-brands:github" />
    </a>
    <LightSwitch rounded="rounded-full" />
  </svelte:fragment>
</AppBar>
