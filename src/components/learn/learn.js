import { useEffect, useReducer, useState } from 'react'
import './learn.css'

export default function Learn(){
 
 
    
const [initialValue, setNewValue]= useState("Neo");
const [state,dispatch]= useReducer(reducer,{age:1});

useEffect(()=>{
 console.log("update data")
})
function reducer(state,action ){
if(action.type==="increment_age"){
    return {age: state.age+1 }
}
}
function handleClick(){
dispatch ({type: 'increment_age' })
}
  function UpdateValue($event){
setNewValue($event.target.value)
  }


    return (<div className='learn-page'>
        <input type='text' className='inputField' value={initialValue} onChange={UpdateValue}/><br/>
        {initialValue}
        <br/>
        <button className="btn" onClick={handleClick}>Increment value</button>
        <p>Hello! You are {state.age}.</p>
    </div>)
}