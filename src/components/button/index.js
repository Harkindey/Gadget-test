import React from 'react';

export const Button = ({ onClick, children }) => {
	return (
		<button className="Button" onClick={onClick}>
			{children}
		</button>
	);
};
