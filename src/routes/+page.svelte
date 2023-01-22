<script>
	import Gameplan from '@lib/Gameplan/Gameplan.svelte';
	import Chevron from '@lib/icons/Chevron.svelte';
	export let data;

	console.log(data?.gameplans);
</script>

<main>
	<h1>Browse gameplans</h1>
	{#if data?.gameplans}
		{#each data.gameplans as gameplan}
			<a href="/gameplan/{gameplan.id}">
				{gameplan.title || 'Untitled Gameplan'}
				<Chevron />
			</a>
		{/each}
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--large);
		max-width: 500px;
		margin: 0 auto;
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
		border: var(--tiny) solid var(--color-secondary);
	}
</style>
