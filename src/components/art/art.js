import './art.css'
import NotePad from './notepad'
import { useState } from 'react';
export default function Art(){
    const [component, goToComponent]= useState(null);
    function handleClick(){
        goToComponent(<NotePad/>)
    }
    return (<>
    <div className='notepad' onClick={handleClick}>Note Pad</div>
    
    {component}
    </>
    )
}