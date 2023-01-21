import { BuildUpPlay, ChanceCreation, DefendingStyles } from './types';

export const gameplan = {
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
