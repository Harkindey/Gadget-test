import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { Button, CartCounter } from '.';

export const Cart = ({ show, handleClose, handleShow }) => {
	return (
		<Modal show={true} onHide={handleClose} className="customModal">
			<Modal.Header closeButton>
				<Modal.Title>Cart Overview</Modal.Title>
			</Modal.Header>
			<Modal.Body className="customModal__Body">
				<Row>
					<Col sm={12} className="Cart__item">
						<div className="Cart__product-description">
							<div className="Cart__product-img">
								<img
									src={"https://i.imgur.com/1A9qbNK.jpg'"}
									alt=""
								/>
							</div>
							<div className="Cart__product-text">
								<p>
									HP Notebook -15 - Intel Core I3 - 4gb Ram -
									1tb Hdd - Wins 10
								</p>
								<p> &#8358; 148,000</p>
							</div>
						</div>
						<div className="Cart__item-bottom">
							<CartCounter />
							<div>
								<Button>X Remove Item</Button>
							</div>
						</div>
					</Col>
					<Col sm={12} className="Cart__item">
						md=12
					</Col>
					<Col sm={12} className="Cart__item">
						{' '}
						md=12
					</Col>
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
