import './project.css';
export default function ProjectSideBar({ onStartAddProject }) {

    return (<aside className="side-bar">
        <h1>Your Projects</h1>
        <div>
            <button className='add-project' onClick={onStartAddProject}>
                + Add Project
            </button>
        </div>
    </aside>)

}