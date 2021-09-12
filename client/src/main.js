import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import React from "react";
import useSound from "use-sound";

import music from "./../public/music.mp3";

export default function Main({
    setProject,
    selectedProject,
    projects,
    mute,
    setMute,
    projectView,
}) {
    const [play, { stop }] = useSound(music, { volume: 0.75 });
    const [bioView, setBioView] = useState(false);

    const projRef = useRef();

    const letMusic = (e) => {
        if (!mute) {
            play();
            setMute(true);
        }
    };

    useEffect(function () {
        setProject(false);
    }, []);

    useEffect(function () {
        if (projectView) {
            clearTimeout(timer);
            const timer = setTimeout(() => {
                window.scrollTo({
                    top: projRef.current.offsetTop,
                    behavior: "smooth",
                });
            }, 0);
        }
    }, []);

    return (
        <div className="mainContainer">
            <div className="introTitles">
                <div>Full-Stack Web Developer</div>
                <div className="bio">
                    Born and raised in Greece, currently living in Berlin,
                    Germany. First studies in electronics. Then, after times of
                    wandering, lots of luck and undeniable fate, life brought me
                    back into the web tech scene.{" "}
                    {!bioView && <span id="dots">. .</span>}
                    {!bioView && (
                        <span
                            onClick={() => {
                                setBioView(!bioView);
                            }}
                        >
                            show more
                        </span>
                    )}
                </div>
                {bioView && (
                    <>
                        {" "}
                        <div className="bio">
                            {`Last year, I took part in the legendary Bootcamp of The Spiced Academy in Berlin. A camp that
                altered my knowledge to the point and teached me how to activate super-powers. I code mainly using Javascript/HTML/CSS, Node.js, Express.js, React.js, Redux, PostgreSQL and 
                Socket.io. `}
                        </div>
                        <div className="bio">
                            {` I like putting into my websites an old-School style approach, by using the aesthetics of the mid-late 90's  era.
                     Back then when I was a kid,
                 accessing the Web for my very first time, like entering a never ending Game . . . 
                `}
                        </div>
                        <div className="bio">
                            {` When building an App I never get bored.
                I find coding creative to the point it reaches the element of Art. And I have a Mission through that. To reach up high & above.
                `}
                        </div>
                        <div className="bio">
                            I love Music too. I run a web-radio show. I also
                            play the drums & percussion. A side of my life
                            includes the Sun, a Beach and a right place to
                            chill. I know what the Secret of Monkey Island is
                            and I still miss the times listening to the calling
                            tone of a dial-up connection.{" "}
                            {bioView && (
                                <span
                                    onClick={() => {
                                        setBioView(!bioView);
                                        window.scrollTo({
                                            top: 0,
                                        });
                                    }}
                                >
                                    hide
                                </span>
                            )}
                        </div>{" "}
                    </>
                )}
            </div>
            <div className="intro" ref={projRef}>
                <div>LATEST PROJECTS</div>
            </div>

            <div className="projectBoxBack">
                <div className="projectBox">
                    {projects &&
                        projects.map((project) => (
                            <Link
                                to={`/projects/${project.id}`}
                                key={project.id}
                                className="description"
                            >
                                {(!selectedProject ||
                                    selectedProject == project.id) && (
                                    <div
                                        onClick={(e) => {
                                            setProject(project.id);
                                        }}
                                    >
                                        <div className="projectBack">
                                            <div className="project">
                                                <div className="name">
                                                    {project.name}
                                                </div>
                                                <img
                                                    className="imgScr"
                                                    src={project.preview}
                                                    id={
                                                        selectedProject != 0
                                                            ? project.flag
                                                            : undefined
                                                    }
                                                ></img>
                                                {project.hot &&
                                                    selectedProject == 0 && (
                                                        <img
                                                            src="./hot.png"
                                                            className="hot"
                                                            onClick={() => {
                                                                letMusic();
                                                            }}
                                                        ></img>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Link>
                        ))}
                </div>
            </div>
            <div className="techStack">
                <img
                    className="techPic"
                    id="trio"
                    src="./../tech/trio.png"
                ></img>
                <img
                    className="techPic"
                    id="techPic"
                    src="./../tech/nodejs.png"
                ></img>
                <img
                    className="techPic"
                    id="techPicX"
                    src="./../tech/expressjs.png"
                ></img>
                <img className="techPic" src="./../tech/react.png"></img>

                <img className="techPic" src="./../tech/redux.png"></img>

                <img
                    className="techPic"
                    id="techPic"
                    src="./../tech/socketio.png"
                ></img>
                <img className="techPic" src="./../tech/postgresql.png"></img>
                <img
                    className="techPic"
                    id="techPic"
                    src="./../tech/gcloud.png"
                ></img>
                <img
                    className="techPic"
                    id="techPic"
                    src="./../tech/aws.png"
                ></img>
            </div>
        </div>
    );
}
