import { supabaseClient } from '@lib/db';
import type { PageServerLoad } from './$types';

export const load = (async (event: any) => {
	const { params } = event;

	const { data, error } = await supabaseClient
		.from('Gameplans')
		.select()
		.eq('id', params.gameplanId);

	if (error) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		gameplan: data[0]
	};
}) satisfies PageServerLoad;
