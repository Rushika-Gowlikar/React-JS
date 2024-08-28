import { useRef } from "react";
import Input from "./input"
import ValidationContent from "./validation-content";

export default function NewProject({ updatedDetails, onCancel }) {
    const model = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();


    function updatedProjectDetails() {
        const updatedTitle = titleRef.current.value;
        const updatedDescription = descriptionRef.current.value;
        const updatedDate = dateRef.current.value;

        if (updatedTitle.trim() === '' || updatedDescription.trim() === '' || updatedDate.trim() === '') {
            model.current.open();
            return;
        }

        updatedDetails({
            title: updatedTitle,
            description: updatedDescription,
            date: updatedDate
        })

    }


    return (

        <>
            <ValidationContent ref={model} buttonCaption="Close"><h1>Invaild Input</h1>
                <p>Oops..looks like you forget to enter a value</p>
                <p>Please make sure you provide valid input for every field</p></ValidationContent>
            <div className="input">

                <div className="form-fields">
                    <Input type="text" label="Title" ref={titleRef} />
                    <Input label="Description" textarea ref={descriptionRef} />
                    <Input type="date" label="Date" ref={dateRef} />
                </div>
                <menu className="add-project-btn" >
                    <button className="cancel" onClick={onCancel}>Cancel</button>
                    &nbsp;
                    <button className="save" onClick={updatedProjectDetails}>Save</button>
                </menu>
            </div ></>)
}