import React from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import Project from "./project";
import EmailForm from "./emailForm";

import Main from "./main";

import projects from "./tools/projects.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: false,
            emailForm: false,
            mute: false,
            projectView: false,
        };
    }

    componentDidMount() {}

    setProjectView(e) {
        this.setState({
            projectView: e,
        });
    }

    setMute(e) {
        this.setState({
            mute: e,
        });
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
            <HashRouter hashType="noslash">
                <div className="appContainer">
                    <div className="appBox">
                        <div className="introMenu">
                            <Link to={"/"} className="introText">
                                {!this.state.selectedProject &&
                                    "Orestis Psycharis"}{" "}
                                {this.state.selectedProject &&
                                    projects.projects[
                                        this.state.selectedProject
                                    ].name}
                            </Link>
                        </div>
                        {!this.state.selectedProject && (
                            <div className="extLinks">
                                <a
                                    href="https://www.linkedin.com/in/orestis-psycharis"
                                    target="_blank"
                                    title="LinkedIn"
                                >
                                    <img
                                        src="./in.png"
                                        className="linkedIn"
                                    ></img>
                                </a>
                                <a
                                    href="https://github.com/orestispsy/"
                                    target="_blank"
                                    title="GitHub Repos"
                                >
                                    <img
                                        src="./git.png"
                                        className="gitHub"
                                    ></img>
                                </a>
                                <a
                                    href="tel:+4915224273054"
                                    target="_blank"
                                    title="Call Me"
                                >
                                    <img
                                        src="./phone.png"
                                        className="phone"
                                    ></img>
                                </a>
                                <a
                                    href="mailto:opsychar@gmail.com"
                                    target="_blank"
                                    title="Send Email"
                                >
                                    <img
                                        src="./mail.png"
                                        className="email"
                                    ></img>
                                </a>

                                <Link to={"/contact"}>
                                    <div
                                        title="Send Quick Message"
                                        className="mail"
                                        onClick={() => {
                                            this.setProject(false);
                                        }}
                                    ></div>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <Main
                                setProject={(e) => this.setProject(e)}
                                selectedProject={this.state.selectedProject}
                                projects={projects.projects}
                                setMute={(e) => this.setMute(e)}
                                mute={this.state.mute}
                                projectView={this.state.projectView}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/contact"
                        render={(props) => (
                            <EmailForm
                                setProjectView={(e) => this.setProjectView(e)}
                            />
                        )}
                    />

                    <Route
                        path="/projects/:id"
                        render={(props) => (
                            <Project
                                match={props.match}
                                setProject={(e) => this.setProject(e)}
                                selectedProject={this.state.selectedProject}
                                projects={projects.projects}
                                setMute={(e) => this.setMute(e)}
                                projectView={this.state.projectView}
                                setProjectView={(e) => this.setProjectView(e)}
                            />
                        )}
                    />
                </div>
            </HashRouter>
        );
    }
}
