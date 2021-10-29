import { Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from './logo.svg'
import Header from './Components/Header';
class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Hilton'
        }
    }

    render() {
        return (
            <>
                <Header />
            </>
        );
    }
}

App.propTypes = {

};

export default App;