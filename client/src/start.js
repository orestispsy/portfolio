import React from "react";
import ReactDOM from "react-dom";

import Projects from "./projects";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: 0
        };
    }

    setProject(e) {
        this.setState(
            {
               selectedProject: e
            }
            // () => console.log("State after setState: ", this.state)
        );
    }

    render() {
        return (
            <div className="appContainer">
                <div className="appBox">
                    <div className="introMenu">
                        <div className="introText">Orestis Psycharis</div>
                        <div className="extLinks">
                            <a href="https://www.linkedin.com/in/orestis-psycharis">
                                <img src="./in.png" className="linkedIn"></img>
                            </a>
                            <a
                                href="https://github.com/orestispsy/"
                                target="_blank"
                                title="GitHub Repos"
                            >
                                <img src="./git.png" className="gitHub"></img>
                            </a>
                        </div>
                    </div>
                    {this.state.selectedProject == 0 && (
                        <div className="introTitles">
                            Javascript Developer, focused on React.js | Node.js
                            | Express.js | Redux | Socket.io | PostgreSQL
                        </div>
                    )}
                    <div className="intro">LATEST PROJECTS</div>
                </div>
                <Projects
                    setProject={(e) => this.setProject(e)}
                    selectedProject={this.state.selectedProject}
                />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("main"));
