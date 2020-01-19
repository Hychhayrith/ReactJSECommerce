import React from 'react';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Cart from './Components/Cart';
import Default from './Components/Default';
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import { ProductConsumer } from './Context/context';
import Modal from './Components/Modal';

function App() {
	return (
		<React.Fragment>
			<Navbar />

			<Switch>
				{/* exact : used to avoid '/' matching with all the path */}
				<Route exact path="/" component={ProductList} />
				<Route path="/details" component={Details} />
				<Route path="/cart" component={Cart} />
				<Route component={Default} />
			</Switch>

			<Modal />
			<ProductConsumer>{(value) => (value.openModal ? <Modal /> : null)}</ProductConsumer>
		</React.Fragment>
	);
}

export default App;
