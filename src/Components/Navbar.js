import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand navbar-dark navbar-bg px-5">
				<Link to="/">
					<h4 className="navbar-brand">
						E-Commerce
					</h4>
				</Link>

				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link
							to="/"
							className="nav-link"
						>
							Product
						</Link>
					</li>
				</ul>

				<Link to="/cart" className="ml-auto">
					<button>
						<i className="fa fa-cart-plus"></i>
						My Cart
					</button>
				</Link>
			</nav>
		);
	}
}

export default Navbar;
