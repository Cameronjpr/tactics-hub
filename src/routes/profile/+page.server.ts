import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	signout: async (event) => {
		const { supabaseClient } = await getSupabase(event);
		await supabaseClient.auth.signOut();
		throw redirect(303, '/');
	}
};
