export default function NewProject() {
    return (<>
        <menu>
            <li>Cancel</li>
            <li>Save</li>
        </menu>
        <div>
            <Input label="Title" />
            <Input label="Description" textarea />
            <Input label="Due Date" />
        </div>
    </>)
}