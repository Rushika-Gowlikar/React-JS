import Input from "./input"
export default function NewProject() {
    return (<div className="input">

        <div className="form-fields">
            <Input label="Title" />
            <Input label="Description" textarea />
            <Input label="Due Date" />
        </div>
        <menu >
            <button className="cancel">Cancel</button>
            &nbsp;
            <button className="save">Save</button>
        </menu>
    </div >)
}