import React from 'react'
import logo from '../logo.svg'
const Footer = () => {
	return (
		<>
			<footer className="footer mt-auto py-3 bg-light">
				<div className="container align-items-center  d-flex justify-content-lg-between flex-lg-row flex-column justify-content-center">
					<div className="text-muted order-lg-0 order-1 text-center">
						<strong className="me-lg-3 d-lg-inline d-block">Hilton Chicago</strong>
						<small>
							720 South Michigan Ave. Chicago, Illinois, 60605
							<a href="tel:1-312-922-4400" className="ms-lg-3 d-lg-inline d-block">1-312-922-4400</a>
						</small>
					</div>

					<div className="footer-logo order-lg-1 order-0 text-center">
						<img src={logo} alt="Hilton" />
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
