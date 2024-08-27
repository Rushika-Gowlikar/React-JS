import './project.css';
export default function ProjectSideBar({ onStartAddProject, projects }) {

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
                return <li key={project.key} >
                    <button className='project-name'>{project.title}</button>
                </li>
            }
            )}
        </ul>
    </aside>)

}