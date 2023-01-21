import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const { request } = event;
		const data = await request.formData();

		console.log(...data);
		console.log(data.get('formation'));
	}
};
