import React, { Component } from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: "Hilton",
		};
	}

	render() {
		return (
			<>
				<Header />
				<Banner />
				<Footer />
			</>
		);
	}
}

App.propTypes = {};

export default App;
