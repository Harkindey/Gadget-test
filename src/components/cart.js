import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { Button, CartCounter } from '.';

const CartItem = ({ data, setCartingList, parent }) => {
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
				<CartCounter
					productId={data.product.productId}
					setCartingList={setCartingList}
					count={data.quantity}
				/>
				<div>
					<Button
						onClick={() => {
							setCartingList({
								type: 'Delete',
								productId: data.product.productId,
							});
							console.log(parent);
						}}
					>
						X Remove Item
					</Button>
				</div>
			</div>
		</Col>
	);
};

export const Cart = ({
	show,
	handleClose,
	handleShow,
	setCartingList,
	cartinglist,
}) => {
	const keys = Object.keys(cartinglist);

	return (
		<Modal show={show} onHide={handleClose} className="customModal">
			<Modal.Header closeButton>
				<Modal.Title>Cart Overview</Modal.Title>
			</Modal.Header>
			<Modal.Body className="customModal__Body">
				<Row>
					{keys.map(item => {
						return (
							<CartItem
								data={cartinglist[item]}
								key={item}
								setCartingList={setCartingList}
								parent={cartinglist}
							/>
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
