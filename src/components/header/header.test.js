import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Header } from '.';

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

const cart = {
	gad123: {
		product: {
			formerPrice: 26000,
			img: 'https://i.imgur.com/Kjc7KCs.jpg',
			name:
				'Wireless Magnetically Bluetooth Keyboard Case For Samsung Galaxy Tab S5E',
			price: 25000,
			productId: 'gad123',
		},
		quantity: 2,
	},
	hp123: {
		product: {
			formerPrice: 180000,
			img: 'https://i.imgur.com/1A9qbNK.jpg',
			name:
				'HP Notebook -15 - Intel Core I3 - 4gb Ram - 1tb Hdd - Wins 10',
			price: 148000,
			productId: 'hp123',
		},
		quantity: 1,
	},
	hp125: {
		product: {
			formerPrice: 168000,
			img: 'https://i.imgur.com/vUVm0CT.jpg',
			name:
				'HP Notebook-15-Intel®Core™i3-8130U-4GB RAM-1TB HDD -NVME Keyboard-Win 10',
			price: 148000,
			productId: 'hp125',
		},
		quantity: 1,
	},
};

it('renders cart indicator', async () => {
	// Use the asynchronous version of act to apply resolved promises
	await act(async () => {
		render(<Header handleShow={() => {}} cartinglist={cart} />, container);
	});
	expect(container.querySelector('[data-testid="cart"]').textContent).toEqual(
		'3'
	);
});
