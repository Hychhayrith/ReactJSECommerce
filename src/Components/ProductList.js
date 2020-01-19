import React, { Component } from "react";

import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context/context";

class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title
							name="our"
							title="products"
						/>

						<div className="row">
							<CreateProductList />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ProductList;

const CreateProductList = () => (
	<ProductConsumer>
		{value => {
			return value.products.map(product => (
				<Product key={product.id} product={product} />
			));
		}}
	</ProductConsumer>
);
