<script lang="ts" module>
  export { img } from '$lib/components/custom';
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

{@render children?.()}
