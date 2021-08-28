import React from "react";
import ReactDOM from "react-dom";

import Projects from "./projects";
import EmailForm from "./emailForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: 0,
            emailForm: true,
        };
    }

    setProject(e) {
        this.setState({
            selectedProject: e,
        });
    }

    toggleEmailForm() {
        this.setState(
            {
                emailForm: !this.state.emailForm,
            }
            // ,
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
                            <a
                                href="https://www.linkedin.com/in/orestis-psycharis"
                                target="_blank"
                                title="LinkedIn"
                            >
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
                    <div className="mailBack">
                        <div
                            className="mail"
                            onClick={() => this.toggleEmailForm()}
                        ></div>
                    </div>
                    {this.state.selectedProject == 0 &&
                        !this.state.emailForm && (
                            <div className="introTitles">
                                Javascript Developer focused on React.js |
                                Node.js | Express.js | Redux | Socket.io |
                                PostgreSQL
                            </div>
                        )}
                    {!this.state.emailForm && (
                        <div className="intro">LATEST PROJECTS</div>
                    )}
                </div>
                {!this.state.emailForm && (
                    <Projects
                        setProject={(e) => this.setProject(e)}
                        selectedProject={this.state.selectedProject}
                    />
                )}
                {this.state.emailForm && (
                    <EmailForm toggleEmailForm={() => this.toggleEmailForm()} />
                )}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("main"));
