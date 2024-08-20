import './home.css'
import Player from './player'
import TimerChallenge from './timer-challenge'
export default function Home() {
    return (<div className='home-page'>
        <Player />
        <div className='timer'>
            <TimerChallenge title='Easy' targetTime={1} />
            <TimerChallenge title='Not Easy' targetTime={5} />
            <TimerChallenge title='Getting Tough' targetTime={10} />
            <TimerChallenge title='Pros Only' targetTime={15} />
        </div>
    </div>)
}