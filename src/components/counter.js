import React, { useReducer, useEffect } from 'react';

const initialState = { count: 1 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			if (state.count === 1) return;
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

export const CartCounter = ({ setCartingList, productId, count }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// useEffect(
	// 	() => {
	// 		async function UpdateCount() {
	// 			setCartingList({
	// 				type: 'QuantityChange',
	// 				productId,
	// 				payload: state,
	// 			});
	// 		}
	// 		setTimeout(fetchData);
	// 	},
	// 	[state.count]
	// );

	return (
		<div className="Cart__counter">
			<button
				onClick={() => dispatch({ type: 'decrement' })}
				className="decrement"
			>
				-
			</button>
			<div className="count">{state.count}</div>
			<button
				onClick={() => dispatch({ type: 'increment' })}
				className="increment"
			>
				+
			</button>
		</div>
	);
};
