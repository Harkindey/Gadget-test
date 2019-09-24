import React from 'react';
import { isEmpty } from 'lodash';
import { Row, Col, Spinner } from 'react-bootstrap';
import { Button } from '.';

const Product = ({ data }) => {
	return (
		<Col md={3} className="items">
			<div className="product">
				<div className="product__img">
					<img src={data.img} alt="product" />
				</div>
				<div className="product__description">
					<p className="product__title">{data.name}</p>
					<div className="product__amount">
						<p>&#8358;{data.price}</p>{' '}
						<p className="formerAmount">
							&#8358;{data.formerPrice}
						</p>
					</div>
				</div>
				<Button
					onClick={() => {
						console.log(data.productId);
					}}
				>
					Add To Cart
				</Button>
			</div>
		</Col>
	);
};

export const ProductListing = ({ data }) => {
	if (isEmpty(data)) {
		return (
			<Row style={{ width: '100%', height: '70vh' }} className="loader">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Row>
		);
	}
	return (
		<Row>
			{data.map(item => {
				return <Product data={item} key={item.productId} />;
			})}
		</Row>
	);
};
