<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<!-- TODO: responsive sizing for the images in md -->
<img {src} {alt} loading="lazy" style="width: 500px" />
