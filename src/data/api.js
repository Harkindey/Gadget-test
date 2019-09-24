import { Products } from './db';

export const Api = {
	get: () => {
		return Promise.resolve({
			data: Products,
		});
	},
};
