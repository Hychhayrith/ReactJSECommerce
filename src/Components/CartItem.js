import React from 'react';

function CartItem({ item, value }) {
	let { id, img, title, price, count, total } = item;
	return (
		// <div className="container-fluid">
		<div className="row text-center my-3">
			<div className="col-10 mx-auto col-lg-2 text-center">
				<img
					src={img}
					alt={title}
					className="img-fluid"
					style={{ width: '5rem', height: '5rem' }}
				/>
			</div>

			<div className="col-10 mx-auto col-lg-2 ">
				<strong>
					<span className="d-lg-none">Product: </span> {title}
				</strong>
			</div>

			<div className="col-10 mx-auto col-lg-2 ">
				<strong className="d-lg-none">Price: </strong> ${price}
			</div>

			<div className="col-10 mx-auto col-lg-2 ">
				<span className="btn btn-black mx-1" onClick={() => value.handleDecrement(id)}>
					-
				</span>
				<span className="btn btn-value mx-1">{count}</span>
				<span className="btn btn-black mx-1" onClick={() => value.handleIncrement(id)}>
					+
				</span>
			</div>

			<div className="col-10 mx-auto col-lg-2">
				<div className="trash-icon" onClick={() => value.handleDeleteCart(id)}>
					<i className="fa fa-trash" />
				</div>
			</div>

			<div className="col-10 mx-auto col-lg-2 ">
				<h5>
					<strong className="d-lg-none">Item Total: </strong> ${total}
				</h5>
			</div>
		</div>
		// </div>
	);
}

export default CartItem;
