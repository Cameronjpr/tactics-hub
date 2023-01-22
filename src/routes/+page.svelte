<script>
	import Gameplan from '@lib/Gameplan/Gameplan.svelte';
	export let data;

	console.log(data?.gameplans);
</script>

<h1>TacticsHub</h1>

{#if data?.gameplans}
	<main>
		{#each data.gameplans as gameplan}
			<a href="/gameplan/{gameplan.id}">
				{gameplan.title || 'Untitled Gameplan'}
				<img src="icons/full/chev-right.svg" width="24" height="24" alt="right-facing chevron" />
			</a>
		{/each}
	</main>
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--large);
		max-width: 500px;
		/* margin: 0 auto; */
	}

	a {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
		gap: var(--tiny);
		padding: var(--large);
		background: var(--off-white);
		border-radius: var(--large);
		color: var(--color-secondary);
		border: var(--tiny) solid var(--color-primary);
	}
</style>
