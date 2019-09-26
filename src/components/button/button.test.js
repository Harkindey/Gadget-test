import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Button } from '.';

let container = null;
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders with a Child', () => {
	act(() => {
		render(
			<div>
				<Button>Click Me</Button>
			</div>,
			container
		);
	});
	expect(container.textContent).toBe('Click Me');

	act(() => {
		render(
			<div>
				<Button>Checkout</Button>
			</div>,
			container
		);
	});
	expect(container.textContent).toBe('Checkout');

	act(() => {
		render(
			<div>
				<Button>Add To Cart</Button>
			</div>,
			container
		);
	});
	expect(container.textContent).toBe('Add To Cart');
});
