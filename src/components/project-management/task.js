import NewTask from "./new-task";

export default function Task() {
    return <div>
        <h1>Task Management</h1>
        <p>The project does not have any task</p>
        <NewTask />
        <ul></ul>
    </div>
}