import React, { Component } from 'react';

import styled from 'styled-components';

import { ButtonContainer } from './ButtonContainer';
import { ProductConsumer } from '../Context/context';
import { Link } from 'react-router-dom';

class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					let { img, price, title } = value.modalDetail;
					if (value.openModal) {
						return (
							<ModalContainer>
								<div className="container">
									<div className="row">
										<div className="modalClass col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-5">
											<h5 className="font-weight-bold">
												item added to the cart
											</h5>

											<img
												src={img}
												alt={title}
												className="img-fluid"
											/>

											<h5 className="font-weight-bold">
												{title}
											</h5>

											<h5 className="font-weight-bold text-muted">
												price ${price}
											</h5>
											<div className="row justify-content-center">
												<Link to="/">
													<ButtonContainer
														onClick={() =>
															value.handleCloseModal()}
													>
														store
													</ButtonContainer>
												</Link>

												<Link to="/cart">
													<ButtonContainer
														cart
														onClick={() =>
															value.handleCloseModal()}
													>
														go to
														cart
													</ButtonContainer>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					} else {
						return null;
					}
				}}
			</ProductConsumer>
		);
	}
}

export default Modal;

const ModalContainer = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;

	.modalClass {
		background: var(--mainWhite);
	}
`;
