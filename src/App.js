import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { Container } from 'react-bootstrap';
import { ProductListing, Header, Cart } from './components';
import { Api } from './data/api';
import { omit } from 'lodash';

const initialState = {};

function reducer(state, action) {
	switch (action.type) {
		case 'Add':
			if (action.payload.productId in state)
				return {
					...state,
					[action.payload.productId]: {
						...state[action.payload.productId],
						quantity: state[action.payload.productId].quantity + 1,
					},
				};

			return {
				...state,
				[action.payload.productId]: {
					product: action.payload,
					quantity: 1,
				},
			};
		case 'QuantityChange':
			return {
				...state,
				[action.payload.productId]: {
					...state[action.payload.productId],
					quantity: action.payload.quantity,
				},
			};
		case 'Delete':
			return omit(state, [action.productId]);
		default:
			throw new Error();
	}
}

function App() {
	const [show, setCartState] = useState(false);
	const [products, setProducts] = useState([]);
	const [cartinglist, setCartingList] = useReducer(reducer, initialState);

	const handleClose = () => setCartState(false);
	const handleShow = () => setCartState(true);

	useEffect(() => {
		async function fetchData() {
			const result = await Api.get();
			setProducts(result.data);
		}
		setTimeout(fetchData, 5000);
	}, []);

	return (
		<div className="App">
			<Container className="Container">
				<Header handleShow={handleShow} cartinglist={cartinglist} />
				<div className="Products">
					<div className="title">
						<p>Product Listing</p>
					</div>
					<ProductListing
						data={products}
						setCartingList={setCartingList}
					/>
				</div>
			</Container>
			<Cart
				show={show}
				handleShow={handleShow}
				handleClose={handleClose}
				setCartingList={setCartingList}
				cartinglist={cartinglist}
			/>
		</div>
	);
}

export default App;
