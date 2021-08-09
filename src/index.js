import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
    render() {
        return <div className="appContainer">Hello World !</div>;
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
