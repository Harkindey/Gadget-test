import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { Container } from 'react-bootstrap';
import { ProductListing, Header, Cart } from './components';
import { Api } from './data/api';

function App() {
	const [show, setCartState] = useState(false);
	const [products, setProducts] = useState([]);

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
				<Header handleShow={handleShow} />
				<div className="Products">
					<div className="title">
						<p>Product Listing</p>
					</div>
					<ProductListing data={products} />
				</div>
			</Container>
			<Cart
				show={show}
				handleShow={handleShow}
				handleClose={handleClose}
			/>
		</div>
	);
}

export default App;
