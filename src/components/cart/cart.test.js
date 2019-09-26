import React from 'react';
import { omit } from 'lodash';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Cart } from '.';

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

it('subtotal calculation corresponds', () => {
	let cart = {
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

	act(() => {
		render(
			<Cart
				show={true}
				handleClose={() => {}}
				handleShow={() => {}}
				setCartingList={() => {}}
				cartinglist={cart}
			/>,
			container
		);
	});

	const subtotal = document.querySelector('[data-testid=subtotal]');
	expect(subtotal.innerHTML).toBe('₦ 346,000');

	cart = omit(cart, ['gad123']);
	act(() => {
		render(
			<Cart
				show={true}
				handleClose={() => {}}
				handleShow={() => {}}
				setCartingList={() => {}}
				cartinglist={cart}
			/>,
			container
		);
	});
	expect(subtotal.innerHTML).toBe('₦ 296,000');
});
