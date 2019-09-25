export const Data = {
	init: () => {
		localStorage.clear();
		localStorage.setItem(
			'products',
			JSON.stringify([
				{
					productId: 'mac123',
					name:
						'Apple MacBook Air Intel Core i5 - 4GB - 256GB SSD - 13.3-Inch 1.6Ghz - Silver',
					price: 402010,
					formerPrice: 483600,
					img: 'https://i.imgur.com/oT29j9Q.png',
				},
				{
					productId: 'mac124',
					name:
						'Apple Macbook Pro - 13" Touch Bar - Intel Core I5 - 8gb Memory - 256GB SSD - 2018 Model',
					price: 600000,
					formerPrice: 623600,
					img: 'https://i.imgur.com/pKj6P7b.jpg',
				},
				{
					productId: 'mac125',
					name:
						'Apple Macbook Pro 15.4" Laptop - Intel Core I9 - 16gb Memory - Amd Radeon Pro 560x - 512gb /2019',
					price: 820520,
					formerPrice: 870000,
					img: 'https://i.imgur.com/oq30vXH.jpg',
				},
				{
					productId: 'gad123',
					name:
						'Wireless Magnetically Bluetooth Keyboard Case For Samsung Galaxy Tab S5E',
					price: 25000,
					formerPrice: 26000,
					img: 'https://i.imgur.com/Kjc7KCs.jpg',
				},
				{
					productId: 'gad124',
					name:
						'Shockproof 3-layer Full Rugged Hybrid Defender For Samsung Galaxy Tab A6 10.1 T580/t585',
					price: '12000',
					formerPrice: 14000,
					img: 'https://i.imgur.com/rje3Ly9.jpg',
				},
				{
					productId: 'hp123',
					name:
						'HP Notebook -15 - Intel Core I3 - 4gb Ram - 1tb Hdd - Wins 10',
					price: 148000,
					formerPrice: 180000,
					img: 'https://i.imgur.com/1A9qbNK.jpg',
				},
				{
					productId: 'hp124',
					name:
						'Lenovo Ideapad 330 - Intel Core I3 - 8th Gen - 8130u - 15.6 - 4GB RAM, 1TB HDD - Win 10',
					price: 140000,
					formerPrice: 160000,
					img: 'https://i.imgur.com/eDYBPzi.jpg',
				},
				{
					productId: 'hp125',
					name:
						'HP Notebook-15-Intel®Core™i3-8130U-4GB RAM-1TB HDD -NVME Keyboard-Win 10',
					price: 148000,
					formerPrice: 168000,
					img: 'https://i.imgur.com/vUVm0CT.jpg',
				},
			])
		);
	},
};
