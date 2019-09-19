import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<header>
				<Row>
					<Col>Icon</Col>
					<Col>Cart</Col>
				</Row>
			</header>
		</div>
	);
}

export default App;
