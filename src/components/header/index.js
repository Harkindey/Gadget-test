import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from '../../assets/image/logo3.png';
import { ReactComponent as Cart } from '../../assets/svg/cart.svg';

export const Header = ({ handleShow, cartinglist }) => {
	return (
		<header className="header">
			<Row>
				<Col>
					<img src={Logo} alt="Debra Grace" />
				</Col>
				<Col>
					<div className="cartButton">
						<div onClick={handleShow} style={{ cursor: 'pointer' }}>
							<Cart width={30} />
							<span
								className="badge badge-warning"
								id="lblCartCount"
							>
								{Object.keys(cartinglist).length}
							</span>
						</div>
					</div>
				</Col>
			</Row>
		</header>
	);
};
