import { useState, useEffect } from "react";
import React from "react";

export default function Projects({setProject, selectedProject}) {

    let projects = require("./tools/projects.json");

    return (
        <div>
            <div className="projectBoxBack">
                <div className="projectBox">
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
                                            </div>
                                            {project.id == 1 &&
                                                selectedProject == 0 && (
                                                    <img
                                                        src="./hot.png"
                                                        className="hot"
                                                    ></img>
                                                )}
                                        </div>
                                    </div>
                                )}
                                {selectedProject == project.id && (
                                    <div className="projectPreview">
                                        <div className="projectText"  onClick={(e)=>setProject(0)}>
                                            {project.description}
                                        </div>
                                        <div className="descLinks">
                                            <a
                                                className="git"
                                                href={project.git}
                                                target="_blank"
                                            >
                                                <img src="./git.png"></img>
                                            </a>
                                            <a
                                                className="linkPreview"
                                                href={project.url}
                                                target="_blank"
                                            >
                                                <img src="./linkPreview.png"></img>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
