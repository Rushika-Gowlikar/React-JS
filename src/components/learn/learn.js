import { useState } from 'react'
import './learn.css'
export default function Learn(){
 const [initialValue, setNewValue]= useState("Neo")
  function UpdateValue($event){
setNewValue($event.target.value)
  }


    return (<div className='learn-page'>
        <input type='text' className='inputField' value={initialValue} onChange={UpdateValue}/><br/>
        {initialValue}
    </div>)
}