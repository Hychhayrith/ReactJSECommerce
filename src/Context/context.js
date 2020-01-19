import React, { Component } from 'react';

import { storeProducts, detailProduct } from '../Assets/productData';

const ProductContext = React.createContext();

// Create CONTEXT PROVIDER
class ProductProvider extends Component {
	state = {
		products: [],
		cart: [],
		subtotalCart: 0,
		tax: 0,
		totalCart: 0,
		productDetail: detailProduct,
		openModal: false,
		modalDetail: {}
	};

	// Note: When we assign value directly to the State, we will use that data as Reference.
	// So whenever data is being in the state, it will also change in the ORIGINAL data source.
	// SOLUTION: Create below function. Then call it in componentDidMount()
	setProductData = () => {
		let tempData = [];
		storeProducts.map((data) => {
			const singleItem = { ...data };
			tempData = [ ...tempData, singleItem ];
		});

		this.setState({ products: tempData });
	};

	getItem = (id) => {
		return this.state.products.find((item) => id === item.id);
	};

	getItemFromCart = (id) => {
		return this.state.cart.find((item) => id === item.id);
	};

	handleAddToCart = (id) => {
		// USE EITHER WAY IS POSSIBLE
		// let tempProducts = [ ...this.state.products ];
		let tempProducts = this.state.products;

		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];

		product.count = 1;
		product.inCart = true;
		product.total = product.price;

		this.setState({ products: tempProducts, cart: [ ...this.state.cart, product ] }, () => {
			this.handleCalculateTotalCart();
		});
	};

	handleProductDetail = (id) => {
		let product = this.getItem(id);

		this.setState({ productDetail: product }, () => {
			// console.log('New Product Detail: \n', this.state.productDetail);
		});
	};

	handleOpenModal = (id) => {
		let product = this.getItem(id);

		this.setState({ openModal: true, modalDetail: product });
	};

	handleCloseModal = () => {
		this.setState({ openModal: false });
	};

	handleIncrement = (id) => {
		let tempCart = this.state.cart;
		let index = tempCart.indexOf(this.getItemFromCart(id));
		let product = tempCart[index];

		product.count += 1;
		product.total = product.price * product.count;

		this.setState({ cart: tempCart }, () => {
			this.handleCalculateTotalCart();
		});
	};

	handleDecrement = (id) => {
		let tempCart = this.state.cart;
		let index = tempCart.indexOf(this.getItemFromCart(id));
		let product = tempCart[index];

		if (product.count > 0) {
			product.count -= 1;
			product.total = product.price * product.count;
		}

		this.setState({ cart: tempCart }, () => {
			this.handleCalculateTotalCart();
		});
	};

	handleDeleteCart = (id) => {
		let tempProduct = this.getItemFromCart(id);
		let index = this.state.cart.indexOf(tempProduct);
		this.state.cart.splice(index, 1);

		let cart = this.state.cart;

		let products = this.state.products;
		let indexOfProduct = products.indexOf(this.getItem(id));
		let product = products[indexOfProduct];
		product.inCart = false;

		this.setState({ cart: cart, products: products }, () => {
			this.handleCalculateTotalCart();
		});
	};

	handleClearCart = () => {
		let tempProduct = this.state.products;
		tempProduct.map((item) => (item.inCart = false));

		this.setState({ products: tempProduct, cart: [] });
	};

	handleCalculateTotalCart = () => {
		let tax = 0.1;
		let subtotal = 0;
		let total = 0;

		this.state.cart.map((item) => (subtotal += item.total));
		tax *= subtotal;
		total = subtotal + tax;

		this.setState({
			subtotalCart: subtotal,
			totalCart: total,
			tax: tax.toFixed(2)
		});
	};

	componentDidMount() {
		this.setProductData();
	}

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleAddToCart: this.handleAddToCart,
					handleProductDetail: this.handleProductDetail,
					handleOpenModal: this.handleOpenModal,
					handleCloseModal: this.handleCloseModal,
					handleIncrement: this.handleIncrement,
					handleDecrement: this.handleDecrement,
					handleDeleteCart: this.handleDeleteCart,
					handleClearCart: this.handleClearCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

// Create CONTEXT CONSUMER
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
