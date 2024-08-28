export default function SelectedProject({ project, onDelete }) {

    const formattedDate = new Date(project.date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return <div className="input">
        <header style={{ 'color': 'blue' }} >
            <div>
                <h1>{project.title}</h1>
                <button className="cancel" onClick={onDelete}>delete</button>
            </div>
            <h4>{formattedDate}</h4>
            <p>{project.description}</p>
        </header>
        <hr />
        Tasks
    </div>
}