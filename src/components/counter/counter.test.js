import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { CartCounter } from '.';

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

it('counter increases and decreases when clicked', () => {
	act(() => {
		render(<CartCounter setCartingList={() => {}} count={0} />, container);
	});
	const state = document.querySelector('[data-testid=state]');
	expect(state.innerHTML).toBe('0');

	const plusButton = document.querySelector('[data-testid=increment]');
	const minusButton = document.querySelector('[data-testid=decrement]');

	act(() => {
		plusButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	});
	expect(state.innerHTML).toBe('1');

	act(() => {
		for (let i = 0; i < 5; i++) {
			plusButton.dispatchEvent(
				new MouseEvent('click', { bubbles: true })
			);
		}
	});
	expect(state.innerHTML).toBe('6');

	act(() => {
		for (let i = 0; i < 3; i++) {
			minusButton.dispatchEvent(
				new MouseEvent('click', { bubbles: true })
			);
		}
	});

	expect(state.innerHTML).toBe('3');
});
