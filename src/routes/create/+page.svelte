<script lang="ts">
	import { enhance } from '$app/forms';
	import { BuildUpPlay, ChanceCreation, DefendingStyles, formations } from '@lib/types';

	let tags = [] || ['High depth', 'High pressing', 'Narrow'];

	let title = '';
	let newGameplan = {
		version: '2023.1',
		title: 'Tiki taka',
		formation: '4-3-3 (4)',
		tactics: {
			defence: {
				style: DefendingStyles.pressAfterPossessionLoss,
				width: 50,
				depth: 50
			},
			offence: {
				buildUpPlay: BuildUpPlay.fastBuildUp,
				chanceCreation: ChanceCreation.possession,
				width: 50,
				playersInBox: 6,
				corners: 1,
				freeKicks: 1
			}
		},
		playerInstructions: {}
	};
</script>

<h1>Create a gameplan</h1>

<form method="POST" use:enhance>
	<fieldset>
		<legend>General</legend>
		<label for="title"> Title </label>
		<input type="text" name="title" bind:value={title} />
		<label for="formation"> Formation </label>
		<select name="formation" bind:value={newGameplan.formation} on:change={() => ''}>
			{#each formations as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</fieldset>
	<fieldset>
		<legend>Defense</legend>
		<label for="defStyle"> Defensive style </label>
		<select name="defStyle" bind:value={newGameplan.tactics.defence.style} on:change={() => ''}>
			{#each Object.values(DefendingStyles) as defStyle}
				<option value={defStyle}>{defStyle}</option>
			{/each}
		</select>
		<label for="defDepth"> Defensive depth </label>
		<input
			name="defDepth"
			type="range"
			bind:value={newGameplan.tactics.defence.depth}
			min="1"
			max="100"
		/>
		<input
			name="defDepth"
			type="number"
			bind:value={newGameplan.tactics.defence.depth}
			min="1"
			max="100"
		/>
		<label for="defWidth"> Defensive width </label>
		<input
			name="defWidth"
			type="range"
			bind:value={newGameplan.tactics.defence.width}
			min="1"
			max="100"
		/>
		<input
			name="defWidth"
			type="number"
			bind:value={newGameplan.tactics.defence.width}
			min="1"
			max="100"
		/>
	</fieldset>
	<fieldset>
		<legend>Offense</legend>
		<label for="buildUpPlay">Build-up play</label>
		<select
			name="buildUpPlay"
			bind:value={newGameplan.tactics.offence.buildUpPlay}
			on:change={() => ''}
		>
			{#each Object.values(BuildUpPlay) as buildUpStyle}
				<option value={buildUpStyle}>{buildUpStyle}</option>
			{/each}
		</select>
		<label for="chanceCreation">Chance creation</label>
		<select
			name="chanceCreation"
			bind:value={newGameplan.tactics.offence.chanceCreation}
			on:change={() => ''}
		>
			{#each Object.values(ChanceCreation) as chanceCreationStyle}
				<option value={chanceCreationStyle}>{chanceCreationStyle}</option>
			{/each}
		</select>
		<label for="attackWidth">Attacking width</label>
		<input
			name="attackWidth"
			type="range"
			bind:value={newGameplan.tactics.offence.width}
			min="1"
			max="100"
		/>
		<input
			name="attackWidth"
			type="number"
			bind:value={newGameplan.tactics.offence.width}
			min="1"
			max="100"
		/>
	</fieldset>
	<button>Create gameplan</button>
</form>
<section>
	<h3>Tags</h3>
	<ul>
		{#each tags as tag}
			<li>
				<span>{tag}</span>
				<button>
					<img src="icons/mini/cross.svg" width="20" height="20" alt="a house" />
				</button>
			</li>
		{/each}
	</ul>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: var(--x-large);
		max-width: 500px;
	}

	@media (min-width: 500px) {
		form {
			margin: 0 auto;
		}
	}

	legend {
		background: var(--color-secondary);
		padding-inline: var(--large);
		padding-block: var(--small);
		color: var(--off-white);
		border-radius: var(--medium);
	}

	fieldset {
		display: flex;
		flex-direction: column;
		gap: var(--medium);
		border-radius: var(--large);
		border: 2px solid var(--color-lightgrey);
	}

	input,
	select {
		display: block;
		margin-block: var(--small);
	}

	label {
		color: var(--color-grey);
		font-size: 0.75rem;
	}

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--small);
	}

	li {
		display: flex;
		align-items: center;
		gap: var(--medium);
		color: var(--off-white);
		background: var(--color-secondary);
		padding: var(--medium);
		border-radius: var(--medium);
	}

	li button {
		background: none;
		padding: var(--small);
	}
</style>
