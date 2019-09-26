import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			if (state === 1) return state;
			return state - 1;
		default:
			throw new Error();
	}
}

export const CartCounter = ({ setCartingList, productId, count }) => {
	const [state, dispatch] = useReducer(reducer, count);

	useEffect(
		() => {
			async function UpdateCount() {
				setCartingList({
					type: 'QuantityChange',
					productId,
					quantity: state,
				});
			}
			UpdateCount();
		},
		[state]
	);

	return (
		<div className="Cart__counter">
			<button
				onClick={() => dispatch({ type: 'decrement' })}
				className="decrement"
				data-testid="decrement"
			>
				-
			</button>
			<div className="count" data-testid="state">
				{state}
			</div>
			<button
				onClick={() => dispatch({ type: 'increment' })}
				className="increment"
				data-testid="increment"
			>
				+
			</button>
		</div>
	);
};
