import { forwardRef } from "react"

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return (
        <div >
            <p >
                <label className="form-label">{label}</label>
                {textarea ? <textarea ref={ref} className="textarea" {...props} /> : <input className="input-field" ref={ref}  {...props} />}
            </p></div>
    )
})

export default Input;