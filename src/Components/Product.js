import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../Context/context';

class Product extends Component {
	render() {
		let { title, price } = this.props.product;

		return (
			<div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card cardWrapper">
					<ProductConsumer>
						{(value) => <CardBody product={this.props.product} value={value} />}
					</ProductConsumer>

					{/* Create Card Footer */}
					<div className="card-footer d-flex justify-content-between cardFooter">
						<p className="align-self-center text-capitalize mb-0">{title}</p>
						<h5 className="text-blue font-italic mb-0">
							<span className="mr-1">$</span>
							{price}
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
};

export default Product;

const CardBody = ({ product, value }) => {
	let { id, img, title, inCart } = product;

	return (
		<div className="imgContainer p-5" onClick={() => value.handleProductDetail(id)}>
			<Link to="/details">
				<img src={img} alt={title} className="card-img-top" />
			</Link>

			<button
				className="card-btn"
				// disabled={inCart}
				onClick={() => (inCart ? value.handleOpenModal(id) : value.handleAddToCart(id))}
			>
				{inCart ? (
					<p className="text-capitalize mb-0">in cart</p>
				) : (
					<i className="fa fa-cart-plus" />
				)}
			</button>
		</div>
	);
};
