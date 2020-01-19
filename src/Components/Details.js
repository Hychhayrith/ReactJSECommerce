import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../Context/context';
import { ButtonContainer } from './ButtonContainer';

class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					let { id, title, img, price, company, info, inCart } = value.productDetail;

					return (
						<div className="container">
							<div className="row">
								<div className="col-10 mx-auto text-capitalize my-5 text-blue">
									<h1 className="text-center mb-0"> {title} </h1>
								</div>
							</div>

							<div className="row">
								<div className="col-10 mx-auto my-3 col-md-6">
									<img
										src={img}
										alt={title}
										className="img-fluid h-100"
									/>
								</div>

								<div className="col-10 mx-auto text-capitalize my-3 col-md-6">
									<h2>model : {title}</h2>
									<h4 className="text-title text-muted text-uppercase mt-3 mb-2">
										made by: {company}
									</h4>
									<h4 className="text-blue">
										<strong>
											price : <span>$</span>
											{price}
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										brief info about product:
									</p>
									<p className="text-muted lead">{info}</p>

									{/* Create Bottom Segment Buttons */}
									<div className="row ml-0">
										<Link to="/">
											<ButtonContainer>
												back to products
											</ButtonContainer>
										</Link>

										<ButtonContainer
											disabled={inCart}
											cart
											onClick={() =>
												value.handleAddToCart(
													id
												)}
										>
											{inCart ? (
												'in cart'
											) : (
												<div>
													<i className="fa fa-cart-plus" />
													<span>
														add to
														cart
													</span>
												</div>
											)}
										</ButtonContainer>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default Details;
