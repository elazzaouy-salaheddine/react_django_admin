import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {


    render() {
        return (
            <h1>Hi again salaheddine </h1>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);