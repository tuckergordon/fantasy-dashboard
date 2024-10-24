<script lang="ts">
  import Transition from '$lib/components/Transition.svelte';
  import '../styles/app.postcss';
  import Navbar from '$lib/components/Navbar.svelte';

  export let data;
</script>

<div class="grid grid-rows-[auto_1fr_auto]">
  <header class="sticky top-0 z-10"><Navbar /></header>
  <Transition url={data.url}>
    <slot />
  </Transition>
</div>
