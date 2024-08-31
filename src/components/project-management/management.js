import ProjectSideBar from "./project-sideBar";
import NewProject from "./new-project";
import NoProject from "./no-project";
import './project.css';
import { useState } from "react";
import SelectedProject from "./selected-project";
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
    function handleSelectProject(id) {
        setProjectsStates(previousState => {
            return {
                ...previousState,
                selectedProjectId: id,
            }
        })
    }
    function handleDeleteProject() {
        setProjectsStates(previousState => {
            return {
                ...previousState,
                selectedProjectId: undefined,
                projects: previousState.projects.filter(project =>
                    project.id !== previousState.selectedProjectId
                )
            }
        })
    }
    function cancelAddProject() {
        setProjectsStates(previousState => {
            return {
                ...previousState,
                selectedProjectId: undefined,
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
                ...previousState.selectedProjectId = undefined,
                projects: [...previousState.projects, newProject]
            }
        })

    }

    console.log(projectsState)
    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
    console.log(selectedProject)
    let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject updatedDetails={handleSaveDetails} onCancel={cancelAddProject} />
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProject onStartAddProject={startHandleProject} />
    }

    return (<div className="row">
        <div className="col-lg-3"><ProjectSideBar onStartAddProject={startHandleProject} projects={projectsState.projects} onSelectProject={handleSelectProject} /></div>
        <div className="col-lg-12">{content}</div>


    </div>)

}