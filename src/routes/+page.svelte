<script lang="ts">
	import Chevron from '@lib/icons/Chevron.svelte';
	import Funnel from '@lib/icons/Funnel.svelte';
	import type { Gameplan } from '@lib/types';
	export let data;

	console.log(data?.gameplans);

	let searchTerm = '';

	$: gameplans =
		searchTerm === ''
			? data?.gameplans
			: data?.gameplans.filter((gp: Gameplan) => {
					if (gp.title.includes(searchTerm)) return true;

					return false;
			  });
</script>

<main>
	<h1>Browse gameplans</h1>
	<section id="gameplan-search">
		<input bind:value={searchTerm} type="text" placeholder="Search by name" />
		<button>
			Filter <Funnel />
		</button>
	</section>
	{#if gameplans}
		{#each gameplans as gameplan}
			<a href="/gameplan/{gameplan.id}">
				{gameplan.title || 'Untitled Gameplan'}
				<Chevron />
			</a>
		{/each}
		<span>{gameplans.length} results</span>
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

	#gameplan-search {
		display: flex;
		gap: var(--large);
		width: 100%;
		justify-content: space-between;
	}
	#gameplan-search input {
		flex-grow: 1;
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
