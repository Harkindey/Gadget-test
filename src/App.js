import React from 'react';
import Logo from './components/image/logo.png';
import { ReactComponent as Cart } from './components/svg/cart.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
	return (
		<Container className="App">
			<header>
				<Row>
					<Col>
						<img src={Logo} alt="Debra Grace" />
					</Col>
					<Col>
						<div className="cart">
							<Cart width={30} />
						</div>
					</Col>
				</Row>
			</header>
		</Container>
	);
}

export default App;
