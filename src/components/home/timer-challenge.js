import './home.css'
import { useRef, useState } from "react"

export default function TimerChallenge({ title, targetTime }) {

    const [timerExpire, setTimerExpire] = useState(false);
    const timer = useRef(false)
    function handleStart() {
        timer.current.value = setTimeout(() => {
            setTimerExpire(true)
        }, targetTime * 1000)
    }
    function handleStop() {
        clearTimeout(timer.current.value)

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