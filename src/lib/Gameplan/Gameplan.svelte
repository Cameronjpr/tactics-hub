<script lang="ts">
	import type { Gameplan } from '@lib/types';

	export let gameplan: Gameplan;
</script>

<article>
	<h1>{gameplan.title}</h1>
	<h2>{gameplan.formation}</h2>
	<section>
		<h3>Defence</h3>
		<strong>Defensive style</strong>
		<span>{gameplan.defStyle}</span>
	</section>

	<section>
		<h3>Offence</h3>
		<div>
			<strong>Build up play:</strong>
			<span>{gameplan.buildUpPlay}</span>
		</div>
		<div>
			<strong>Chance creation:</strong>
			<span>{gameplan.chanceCreation}</span>
		</div>
		<div>
			<strong>Players in box:</strong>
			<span>{gameplan.playersInBox}</span>
		</div>
		<div>
			<strong>Corners:</strong>
			<span>{gameplan.corners}</span>
		</div>
		<div>
			<strong>Free kicks:</strong>
			<span>{gameplan.freeKicks}</span>
		</div>
	</section>
	<div>
		<button>Copy as text ✨</button>
		<button>Create shareable link</button>
	</div>
</article>

<style>
	article {
		max-width: 500px;
		padding: var(--large);
		background: var(--off-white);
		border-radius: var(--large);
		border: var(--tiny) solid var(--color-lightgrey);
		display: flex;
		flex-direction: column;
		gap: var(--large);
	}

	section {
		display: flex;
		flex-direction: column;
	}

	div {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
</style>
