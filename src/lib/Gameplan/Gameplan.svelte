<script lang="ts">
	import { gameplan } from '@lib/gameplan';

	export let playersInBox = gameplan.tactics.offence.playersInBox ?? 5;
</script>

<article>
	<h1>{gameplan.title}</h1>
	<h2>{gameplan.formation}</h2>
	<section>
		<h3>Defence</h3>
		<strong>Defensive style</strong>
		<span>{gameplan.tactics.defence.style}</span>
	</section>

	<section>
		<h3>Offence</h3>
		<div>
			<strong>Build up play:</strong>
			<span>{gameplan.tactics.offence.buildUpPlay}</span>
		</div>
		<div>
			<strong>Chance creation:</strong>
			<span>{gameplan.tactics.offence.chanceCreation}</span>
		</div>
		<div>
			<strong>Players in box:</strong>
			<span>{gameplan.tactics.offence.playersInBox}</span>
		</div>
		<input type="range" min="1" max="10" bind:value={playersInBox} />
	</section>
	<div>
		<button>Copy as text ✨</button>
		<button>Create shareable link</button>
	</div>
</article>

<style>
	article {
		max-width: 500px;
		padding: 1rem;
		background: var(--color-lightgrey);
		border-radius: var(--medium);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	section {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		border: var(--tiny) solid var(--color-secondary);
		border-radius: var(--medium);
	}

	div {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
</style>
