import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <div className="appBox">
                    <div className="introMenu">
                        <div className="introText">Orestis Psycharis</div>
                        <div>
                            <a href="#">
                                <img
                                    src="./linkedIn.png"
                                    className="linkedIn"
                                ></img>
                            </a>
                            <a
                                href="https://github.com/orestispsy/"
                                target="_blank"
                            >
                                <img
                                    src="./gitHub.png"
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
                <div className="projectBoxBack">
                    <div className="projectBox">
                        <a
                            href="https://thousandgigs.herokuapp.com"
                            className="project"
                            target="_blank"
                        >
                            <div className="name">The Gig Guide</div>
                            <img
                                className="imgScr"
                                src="preview1kgg.jpg"
                                id="three"
                            ></img>
                        </a>
                        <a
                            href="/spotiFIRE/index.html"
                            className="project"
                            target="_blank"
                        >
                            <div className="name">SpotiFIRE!</div>
                            <img
                                className="imgScr"
                                src="./spotiFIRE/preview.jpg"
                                id="one"
                            ></img>
                        </a>

                        <a
                            href="/connect4/index.html"
                            className="project"
                            target="_blank"
                        >
                            <div className="name">Connect4</div>
                            <img
                                className="imgScr"
                                src="/connect4/preview.jpg"
                                id="two"
                            ></img>
                        </a>
                        <a
                            href="https://warm-spire-33241.herokuapp.com/"
                            className="project"
                            target="_blank"
                        >
                            <div className="name">Petition</div>
                            <img
                                className="imgScr"
                                src="previewPetition.jpg"
                                id="four"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("main"));
