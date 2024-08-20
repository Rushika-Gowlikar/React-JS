import './home.css'
import { useRef, useState } from "react"

export default function TimerChallenge({ title, targetTime }) {
    let timerStatus;
    const [timerExpire, setTimerExpire] = useState(false);
    const timer = useRef(false)
    function handleStart() {
        timerStatus = timer.current.value = setTimeout(() => {
            setTimerExpire(true)
        }, targetTime * 1000)
    }
    function handleStop() {
        clearTimeout(timerStatus)

    }
    return (<div id="challenge">
        <h2>{title}</h2>
        <p>{timerExpire && <p>You Lost!</p>}</p>
        {/* <p>{stopTimer && <p>Timer Stopped!</p>}</p> */}
        <p>{targetTime}</p>
        <p><button className='btn' ref={timer} onClick={handleStart}>Start Challenge</button></p>
        <p><button className='btn' onClick={handleStop}>Stop Challenge</button></p>

    </div>)
}