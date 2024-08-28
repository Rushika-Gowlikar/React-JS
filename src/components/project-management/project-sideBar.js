import './project.css';
export default function ProjectSideBar({ onStartAddProject, projects, onSelectProject }) {

    console.log(projects + " projects in progress bar")
    return (<aside className="side-bar">
        <h1>Your Projects</h1>
        <div>
            <button className='add-project' onClick={onStartAddProject}>
                + Add Project
            </button>
        </div>
        <ul className='list'>
            {projects.map((project) => {
                // let cssModel;
                // if (project.id === selectedProjectID) {
                //     cssModel = "backgroundColor : white"
                // }
                return (<li key={project.key} >
                    <button className='project-name'
                        onClick={() => onSelectProject(project.id)}>{project.title}</button>
                </li>)
            }
            )}
        </ul>
    </aside>)

}