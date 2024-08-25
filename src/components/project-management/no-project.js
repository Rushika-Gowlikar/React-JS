import notepad from '../../assets/notepad.png'
export default function NoProject({ onStartAddProject }) {
    return (<div className="input">
        <img src={notepad} className='notepad-img' />
        <h1 className='form-label'>No Project Selected</h1>
        <p style={{ color: "green", fontSize: "30px" }}>Select a project or get started with a new project</p>
        <button className='save' onClick={onStartAddProject}>Create a new project</button>
    </div>)
}