export const Api = {
	get: () => {
		return Promise.resolve({
			data: JSON.parse(localStorage.getItem('product')),
		});
	},
};
