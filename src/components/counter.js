import React, { useState } from 'react';

export const CartCounter = () => {
	const [count, setCount] = useState(1);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		if (count === 1) return;
		setCount(count - 1);
	};
	return (
		<div class="Cart__counter">
			<button onClick={decrement} className="decrement">
				-
			</button>
			<div class="count">{count}</div>
			<button onClick={increment} className="increment">
				+
			</button>
		</div>
	);
};
