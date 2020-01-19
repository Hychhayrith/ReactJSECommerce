import React from 'react';
import { Link } from 'react-router-dom';

function CartTotal({ value }) {
	let { subtotalCart, tax, totalCart, handleClearCart } = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 ml-auto col-lg-4 text-capitalize">
						<Link to="/">
							<button
								className="btn btn-outline-danger mt-2 mb-4 px-5 font-weight-bold text-capitalize"
								type="button"
								style={{ fontSize: '1.2rem' }}
								onClick={() => handleClearCart()}
							>
								<span>clear cart</span>
							</button>
						</Link>

						<div className="text-right">
							<h5>
								<span className="text-title">sub total: </span>
								<strong>${subtotalCart}</strong>
							</h5>

							<h5>
								<span className="text-title">tax: </span>
								<strong>${tax}</strong>
							</h5>

							<h5>
								<span className="text-title">total: </span>
								<strong>${totalCart}</strong>
							</h5>

							<img
								src="https://i.ibb.co/8zznFzk/express-checkout-hero-sg.png"
								alt="checkout with paypal"
								className="img-fluid w-50"
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default CartTotal;
