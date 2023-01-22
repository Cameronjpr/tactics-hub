<script lang="ts">
	import Gameplan from '@lib/Gameplan/Gameplan.svelte';

	export let data;
</script>

<h1>Gameplan</h1>

<Gameplan gameplan={data?.gameplan} />
