import ProjectSideBar from "./project-sideBar";
import NewProject from "./new-project";
import NoProject from "./no-project";
import './project.css';
import { useState } from "react";
export default function ProjectManagement() {

    const [projectsState, setProjectsStates] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function startHandleProject() {
        setProjectsStates(previousState => {
            return {
                ...previousState,
                selectedProjectId: null,
            }
        })
    }
    function handleSaveDetails(projectDetails) {

        setProjectsStates(previousState => {
            const newProject = {
                ...projectDetails,
                id: Math.floor(Math.random() * 100)
            }

            return {
                ...previousState,
                projects: [...previousState.projects, newProject]
            }
        })

    }

    console.log(projectsState)

    let content;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject updatedDetails={handleSaveDetails} />
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProject onStartAddProject={startHandleProject} />
    }
    return (<div className="row">
        <div className="col-lg-3"><ProjectSideBar onStartAddProject={startHandleProject} /></div>
        <div className="col-lg-9">{content}</div>


    </div>)

}