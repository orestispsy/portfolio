import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <div className="appBox">
                    <div>Welcome </div>
                </div>
                ;
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
