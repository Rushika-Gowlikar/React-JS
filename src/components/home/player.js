import { useState } from "react"
import { useRef } from "react";
import './home.css'
export default function Player() {

   const [enterPlayerName, setPlayerName] = useState(null);
   const playerName = useRef(null)
   function handleClick() {
      setPlayerName(playerName.current.value);
   }

   return (<>
      <section>
         <h2>Welcome ! {enterPlayerName ?? 'unkown entity'}</h2>
         <p>
            <input type="text" ref={playerName} />
            <button onClick={handleClick}>Set Name</button> </p></section></>)
}