import { useRef } from "react";
import Input from "./input"

export default function NewProject({ updatedDetails }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();


    function updatedProjectDetails() {
        const updatedTitle = titleRef.current.value;
        const updatedDescription = descriptionRef.current.value;
        const updatedDate = dateRef.current.value;


        updatedDetails({
            title: updatedTitle,
            description: updatedDescription,
            date: updatedDate
        })

    }


    return (<div className="input">

        <div className="form-fields">
            <Input label="Title" ref={titleRef} />
            <Input label="Description" textarea ref={descriptionRef} />
            <Input label="Due Date" ref={dateRef} />
        </div>
        <menu className="add-project-btn" >
            <button className="cancel">Cancel</button>
            &nbsp;
            <button className="save" onClick={updatedProjectDetails}>Save</button>
        </menu>
    </div >)
}