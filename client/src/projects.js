import { useState, useEffect } from "react";
import React from "react";

import useSound from "use-sound";

import music from "./../public/music.mp3";

export default function Projects({ setProject, selectedProject }) {
    const [mute, setMute] = useState(false);

    const [play, { stop }] = useSound(music, { volume: 0.75 });

    const letMusic = (e) => {
        if (!mute) {
            play();
        }
    };

    let projects = require("./tools/projects.json");

    return (
        <>
            <div className="projectBoxBack">
                <div
                    className="projectBox"
                    style={{
                        height: selectedProject == 0 && `19vh`,
                    }}
                >
                    {projects &&
                        projects.map((project) => (
                            <div key={project.id} className="description">
                                {(selectedProject == 0 ||
                                    selectedProject == project.id) && (
                                    <div
                                        onClick={(e) => {
                                            if (selectedProject) {
                                                setProject(0);
                                            } else {
                                                setProject(project.id);
                                                setMute(true);
                                            }
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
                                                            onClick={() =>
                                                                letMusic()
                                                            }
                                                        ></img>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {selectedProject == project.id && (
                                    <div className="projectPreview">
                                        <div
                                            className="projectText"
                                            onClick={(e) => {
                                                setProject(0);
                                            }}
                                        >
                                            {project.description}
                                        </div>
                                        <div className="descLinks">
                                            {project.url && (
                                                <a
                                                    className="linkPreview"
                                                    href={project.url}
                                                    target="_blank"
                                                    title="Open Project"
                                                >
                                                    <img src="./linkPreview.png"></img>
                                                </a>
                                            )}
                                            <a
                                                className="git"
                                                href={project.git}
                                                target="_blank"
                                                title="Check Code"
                                            >
                                                <img src="./git.png"></img>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
