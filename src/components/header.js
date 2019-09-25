import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from './image/logo3.png';
import { ReactComponent as Cart } from './svg/cart.svg';

export const Header = ({ handleShow, cartinglist }) => {
	return (
		<header className="header">
			<Row>
				<Col>
					<img src={Logo} alt="Debra Grace" />
				</Col>
				<Col>
					<div className="cartButton" onClick={handleShow}>
						<div className="cartButton__box">
							<Cart width={30} fill="#fff" /> <p>My Cart</p>
							<span className="cartButton__number">
								<h6>{Object.keys(cartinglist).length}</h6>
							</span>
						</div>
					</div>
				</Col>
			</Row>
		</header>
	);
};
