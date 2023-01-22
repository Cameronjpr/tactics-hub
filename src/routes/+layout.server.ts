import type { LayoutServerLoad } from '.svelte-kit/types/src/routes/$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
	const { fetch } = event;
	const { session } = await getSupabase(event);

	return {
		session: session
	};
};
