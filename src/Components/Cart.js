import React, { Component } from 'react';
import { ProductConsumer } from '../Context/context';
import Title from './Title';
import CartLabel from './CartLabel';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

class Cart extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					if (value.cart.length > 0) {
						return <NotEmptyCart value={value} />;
					} else {
						return <EmptyCart />;
					}
				}}
			</ProductConsumer>
		);
	}
}

export default Cart;

const EmptyCart = () => (
	<div className="container-fluid mt-5">
		<div className="row">
			<div className="col-10 mx-auto text-title text-center">
				<h1>your cart is empty</h1>
			</div>
		</div>
	</div>
);

const NotEmptyCart = ({ value }) => (
	<div className="container-fluid mt-5">
		<div className="row">
			<div className="col-10 mx-auto text-center">
				<Title name="your" title="cart" />
				<CartLabel />

				{value.cart.map((item, index) => {
					return <CartItem key={index} item={item} value={value} />;
				})}

				<CartTotal value={value} />
			</div>
		</div>
	</div>
);
