<script>
	import Gameplan from '@lib/Gameplan/Gameplan.svelte';
	export let data;

	console.log(data?.gameplans);
</script>

<h1>TacticsHub</h1>

{#if data?.gameplans}
	{#each data.gameplans as gameplan}
		<Gameplan {gameplan} />
	{/each}
{/if}

<style>
</style>
