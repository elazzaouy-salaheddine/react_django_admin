import React, { Component } from "react";
import { render } from "react-dom";
import Base from '../layout/Base';
import './style.css';

class App extends Component {


    render() {
        return (
            <>
                <h1>Hi salaheddine agian </h1>
                <Base />
            </>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);