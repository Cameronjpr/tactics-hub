export enum DefendingStyles {
	dropBack = 'Drop back',
	pressAfterPossessionLoss = 'Press after possession loss',
	pressOnHeavyTouch = 'Pressure on heavy touch',
	constantPressure = 'Constant pressure'
}

export enum BuildUpPlay {
	fastBuildUp = 'Fast build up',
	slowBuildUp = 'Slow build up',
	longBall = 'Long ball',
	balanced = 'Balanced'
}

export enum ChanceCreation {
	possession = 'Possession',
	balanced = 'Balanced',
	directPassing = 'Direct passing',
	forwardRuns = 'Forward runs'
}

export const formations = [
	'4-3-3 (1)',
	'4-3-3 (2)',
	'4-3-3 (3)',
	'4-3-3 (4)',
	'4-4-2',
	'4-5-1',
	'4-2-3-1 (1)',
	'4-2-3-1 (2)',
	'4-3-1-2'
];

export type Gameplan = {
	author: string;
	id?: number;
	version: string;
	title: string;
	notes?: string;
	formation: string;
	defStyle: DefendingStyles;
	defDepth?: number;
	defWidth?: number;
	buildUpPlay: BuildUpPlay;
	chanceCreation: ChanceCreation;
	attWidth?: number;
	playersInBox?: number;
	corners?: number;
	freeKicks?: number;
};
