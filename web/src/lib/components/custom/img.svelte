<script lang="ts">
  interface Props {
    src: string;
    alt: string;
  }

  let { src, alt }: Props = $props();
</script>

<!-- TODO: responsive sizing for the images in md -->
<img {src} {alt} loading="lazy" />
