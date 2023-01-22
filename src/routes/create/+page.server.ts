import type { BuildUpPlay, ChanceCreation, DefendingStyles, Gameplan } from '@lib/types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const { request } = event;
		const formData = await request.formData();

		const { session, supabaseClient } = await getSupabase(event);
		if (!session) {
			throw redirect(303, '/login');
		}

		const gameplanData: Gameplan = {
			author: session.user.id,
			version: '2023.1',
			title: formData.get('title') as string,
			formation: formData.get('formation') as string,
			defStyle: formData.get('defStyle') as DefendingStyles,
			defDepth: Number(formData.get('defDepth')),
			defWidth: Number(formData.get('defWidth')),
			buildUpPlay: formData.get('buildUpPlay') as BuildUpPlay,
			chanceCreation: formData.get('chanceCreation') as ChanceCreation,
			attWidth: Number(formData.get('attWidth')),
			playersInBox: Number(formData.get('playersInBox')),
			corners: Number(formData.get('corners')),
			freeKicks: Number(formData.get('freeKicks'))
		};

		const { error } = await supabaseClient.from('Gameplans').insert(gameplanData);

		if (error) {
			throw error;
		}
	}
};
