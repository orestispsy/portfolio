import React from "react";
import ReactDOM from "react-dom";

import Projects from "./projects";

class App extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <div className="appBox">
                    <div className="introMenu">
                        <div className="introText">Orestis Psycharis</div>
                        <div className="extLinks">
                            <a href="#">
                                <img
                                    src="./in.png"
                                    className="linkedIn"
                                ></img>
                            </a>
                            <a
                                href="https://github.com/orestispsy/"
                                target="_blank"
                            >
                                <img
                                    src="./git.png"
                                    className="gitHub"
                                ></img>
                            </a>
                        </div>
                    </div>
                    <div className="introTitles">
                        Javascript Developer, focused on React.js | Node.js |
                        Express.js | Redux | PostgreSQL | Socket.io
                    </div>
                    <div className="intro">LATEST PROJECTS</div>
                </div>
       <Projects/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("main"));
