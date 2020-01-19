import React, { Component } from 'react';

class Default extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-lg-6 text-center mt-5">
						<h1 className="text-title text-capitalize">
							<span className="text-danger">404</span> <br /> page not found
						</h1>
						<br />
						<h5>
							The requested URL{' '}
							<span className="text-danger font-weight-bold">
								{this.props.location.pathname} {' '}
							</span>
							was not found.
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default Default;
