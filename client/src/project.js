import { useState, useEffect, Fragment, useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

import Gallery from "./gallery";

export default function Project({
    setProject,
    selectedProject,
    projects,
    match,
    setMute,
    setProjectView,
}) {
    const [toggleGallery, setToggleGallery] = useState(false);

    const elemRef = useRef();

    const galRef = useRef();

    useEffect(function () {
        setProject(match.params.id);
        setProjectView(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(
        function () {
            if (toggleGallery) {
                window.scrollTo({
                    top: galRef.current.offsetTop,
                    behavior: "smooth",
                });
            }
        },
        [toggleGallery]
    );

    return (
        <>
            <div
                className="projectBoxBack"
                style={{
                    marginTop: selectedProject ? "4vmax" : "none",
                }}
                ref={galRef}
            >
                {!toggleGallery && (
                    <Link
                        to={"/"}
                        className="closeTab"
                        onClick={() => {
                            setMute(true);
                            setProjectView(true);
                        }}
                    >
                        X
                    </Link>
                )}
                {toggleGallery && (
                    <div
                        className="closeTab"
                        onClick={() => {
                            setToggleGallery(false);
                        }}
                    >
                        X
                    </div>
                )}
                {projects &&
                    projects.map((project) => (
                        <React.Fragment key={project.id}>
                            {selectedProject == project.id && (
                                <div className="projectBox" id="projectBox">
                                    <Gallery
                                        projects={projects}
                                        selectedProject={selectedProject}
                                        toggleGallery={toggleGallery}
                                        setToggleGallery={setToggleGallery}
                                    />
                                    {!toggleGallery && (
                                        <div className="description">
                                            <div className="projectPreview">
                                                <div
                                                    className="projectText"
                                                    ref={elemRef}
                                                >
                                                    {project.description && (
                                                        <div className="features">
                                                            Description
                                                        </div>
                                                    )}
                                                    {project.description}
                                                    <div className="featuresContainer">
                                                        {project.stack && (
                                                            <div
                                                                className="features"
                                                                id="features"
                                                            >
                                                                Tech
                                                            </div>
                                                        )}
                                                        {project.stack &&
                                                            project.stack.map(
                                                                (feature) => (
                                                                    <div
                                                                        key={
                                                                            feature
                                                                        }
                                                                    >
                                                                        {
                                                                            feature
                                                                        }
                                                                    </div>
                                                                )
                                                            )}
                                                        {project.features && (
                                                            <div
                                                                className="features"
                                                                id="features"
                                                            >
                                                                Features
                                                            </div>
                                                        )}
                                                        {project.features &&
                                                            project.features.map(
                                                                (feature) => (
                                                                    <div
                                                                        key={
                                                                            feature
                                                                        }
                                                                    >
                                                                        {
                                                                            feature
                                                                        }
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {project.features && !toggleGallery && (
                                        <div className="projectScroll">
                                            <div
                                                className="projectUp"
                                                title="Top"
                                                onMouseDown={() => {
                                                    var i = 10;
                                                    var int = setInterval(
                                                        function () {
                                                            elemRef.current.scrollTop =
                                                                elemRef.current
                                                                    .scrollTop -
                                                                i;
                                                            i += 10;
                                                            if (i >= 200)
                                                                clearInterval(
                                                                    int
                                                                );
                                                        },
                                                        20
                                                    );
                                                }}
                                            >
                                                
                                            </div>

                                            <div
                                                className="projectDown"
                                                title="Scroll Down"
                                                onMouseDown={() => {
                                                    var i = 0;
                                                    var int = setInterval(
                                                        function () {
                                                            elemRef.current.scrollTop =
                                                                elemRef.current
                                                                    .scrollTop +
                                                                i;
                                                            i += 1;
                                                            if (i >= 20)
                                                                clearInterval(
                                                                    int
                                                                );
                                                        },
                                                        20
                                                    );
                                                }}
                                            >
                                                
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
            </div>
        </>
    );
}
