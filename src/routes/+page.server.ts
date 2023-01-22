import { supabaseClient } from '@lib/db';

export async function load() {
	const { data, error } = await supabaseClient.from('Gameplans').select();

	if (error) {
		throw error;
	}

	return { gameplans: data };
}
