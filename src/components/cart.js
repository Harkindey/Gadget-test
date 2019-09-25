import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { Button, CartCounter } from '.';

const CartProducts = {
	hp123: {
		product: {
			productId: 'hp123',
			name:
				'HP Notebook -15 - Intel Core I3 - 4gb Ram - 1tb Hdd - Wins 10',
			price: '148,000',
			formerPrice: '180,000',
			img: 'https://i.imgur.com/1A9qbNK.jpg',
		},
		quantity: 1,
	},
	hp124: {
		product: {
			productId: 'hp124',
			name:
				'Lenovo Ideapad 330 - Intel Core I3 - 8th Gen - 8130u - 15.6 - 4GB RAM, 1TB HDD - Win 10',
			price: '140,000',
			formerPrice: '160,000',
			img: 'https://i.imgur.com/eDYBPzi.jpg',
		},
		quantity: 2,
	},
	hp125: {
		product: {
			productId: 'hp124',
			name:
				'Lenovo Ideapad 330 - Intel Core I3 - 8th Gen - 8130u - 15.6 - 4GB RAM, 1TB HDD - Win 10',
			price: '140,000',
			formerPrice: '160,000',
			img: 'https://i.imgur.com/eDYBPzi.jpg',
		},
		quantity: 2,
	},
	hp126: {
		product: {
			productId: 'hp124',
			name:
				'Lenovo Ideapad 330 - Intel Core I3 - 8th Gen - 8130u - 15.6 - 4GB RAM, 1TB HDD - Win 10',
			price: '140,000',
			formerPrice: '160,000',
			img: 'https://i.imgur.com/eDYBPzi.jpg',
		},
		quantity: 2,
	},
	hp126: {
		product: {
			productId: 'hp124',
			name:
				'Lenovo Ideapad 330 - Intel Core I3 - 8th Gen - 8130u - 15.6 - 4GB RAM, 1TB HDD - Win 10',
			price: '140,000',
			formerPrice: '160,000',
			img: 'https://i.imgur.com/eDYBPzi.jpg',
		},
		quantity: 2,
	},
};

const CartItem = ({ data }) => {
	return (
		<Col sm={12} className="Cart__item">
			<div className="Cart__product-description">
				<div className="Cart__product-img">
					<img src={data.product.img} alt="" />
				</div>
				<div className="Cart__product-text">
					<p>{data.product.name}</p>
					<p> &#8358; {data.product.price}</p>
				</div>
			</div>
			<div className="Cart__item-bottom">
				<CartCounter intitial={data.quanity} />
				<div>
					<Button
						onClick={() => {
							delete CartProducts[data.product.productId];
							console.log(CartProducts);
						}}
					>
						X Remove Item
					</Button>
				</div>
			</div>
		</Col>
	);
};

export const Cart = ({ show, handleClose, handleShow }) => {
	const keys = Object.keys(CartProducts);

	return (
		<Modal show={true} onHide={handleClose} className="customModal">
			<Modal.Header closeButton>
				<Modal.Title>Cart Overview</Modal.Title>
			</Modal.Header>
			<Modal.Body className="customModal__Body">
				<Row>
					{keys.map(item => {
						return (
							<CartItem data={CartProducts[item]} key={item} />
						);
					})}
				</Row>
			</Modal.Body>
			<Modal.Footer className="customModal__Footer">
				<div className="Cart__Subtotal">
					<p>SubTotal</p> <p>&#8358; 000,000</p>
				</div>
				<Button onClick={() => {}}>Checkout</Button>
			</Modal.Footer>
		</Modal>
	);
};
