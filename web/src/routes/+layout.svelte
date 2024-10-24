<script lang="ts">
  import Transition from '$lib/components/Transition.svelte';
  import '../styles/app.postcss';
  import Navbar from '$lib/components/Navbar.svelte';

  import { afterNavigate } from '$app/navigation';

  // Workaround to ensure page goes back to the top when navigating
  // between routes. More info: https://github.com/sveltejs/kit/issues/2733#issuecomment-1543863772
  afterNavigate(() => {
    document.body.scrollTo(0, 0);
  });

  export let data;
</script>

<div class="grid grid-rows-[auto_1fr_auto]">
  <header class="sticky top-0 z-10"><Navbar /></header>
  <Transition url={data.url}>
    <slot />
  </Transition>
</div>
