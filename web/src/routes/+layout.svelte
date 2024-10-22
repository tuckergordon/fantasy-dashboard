<script lang="ts">
  import Transition from '$lib/components/Transition.svelte';
  import { AppShell } from '@skeletonlabs/skeleton';
  import '../styles/app.postcss';
  import Navbar from '$lib/components/Navbar.svelte';

  export let data;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Navbar />
  </svelte:fragment>

  <Transition url={data.url}>
    <slot />
  </Transition>
</AppShell>
