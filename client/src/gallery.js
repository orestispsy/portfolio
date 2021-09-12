import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Gallery({
    projects,
    selectedProject,
    toggleGallery,
    setToggleGallery,
}) {
    const [counter, setCounter] = useState(0);
    const [maxItems, setMaxItems] = useState(0);

    useEffect(
        function () {
            if (projects && selectedProject) {
                if (projects[selectedProject].pics) {
                    setMaxItems(projects[selectedProject].pics.length - 1);
                }
            }
        },
        [maxItems]
    );

    return (
        <>
            {selectedProject && projects[selectedProject].pics && (
                <div className="galleryContainer">
                    <img
                        className={
                            (!toggleGallery && "galleryPic") ||
                            (toggleGallery && "galleryPicWide")
                        }
                        src={projects[selectedProject].pics[counter].pic}
                    ></img>

                    {selectedProject != 0 && (
                        <div className="galleryControls">
                            <div className="galleryNumbers">
                                {counter + 1}/
                                {projects[selectedProject].pics.length}
                            </div>
                            <div
                                className="prvGallery"
                                title="Previous"
                                onClick={() => {
                                    if (counter > 0) {
                                        setCounter(counter - 1);
                                    } else {
                                        return;
                                    }
                                }}
                            >
                                ◄
                            </div>
                            <input
                                value={counter}
                                type="range"
                                className="rangeInput"
                                min={0}
                                max={maxItems}
                                onChange={(e) => {
                                    setCounter(parseInt(e.target.value));
                                }}
                            ></input>
                            <div
                                className="nxtGallery"
                                title="Next"
                                onClick={() => {
                                    if (counter < maxItems || counter == 0) {
                                        setCounter(counter + 1);
                                    }
                                }}
                            >
                                ►
                            </div>
                            {!toggleGallery && (
                                <img
                                    src="./../zoom.png"
                                    className="zoom"
                                    title="Zoom"
                                    onClick={() => {
                                        setToggleGallery(true);
                                    }}
                                ></img>
                            )}
                        </div>
                    )}

                    {projects[selectedProject] &&
                        !toggleGallery &&
                        projects.map((project) => (
                            <React.Fragment key={project.id}>
                                {projects[selectedProject].id == project.id && (
                                    <div className="descLinks" key={project.id}>
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
                                        {project.git && (
                                            <a
                                                className="git"
                                                href={project.git}
                                                target="_blank"
                                                title="Check Code"
                                            >
                                                <img src="./git.png"></img>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                </div>
            )}
        </>
    );
}
