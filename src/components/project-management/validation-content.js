import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"



const ValidationContent =
    forwardRef(function ValidationContent({ children, buttonCaption }, ref) {
        const dialog = useRef()
        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                }
            }
        })

        return createPortal(
            <dialog ref={dialog}>{children}
                <form>
                    <button className="cancel">{buttonCaption}</button>
                </form></dialog>, document.getElementById('validation-content'));
    })

export default ValidationContent;