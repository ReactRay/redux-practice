import './hero.css'
import TodoForm from '../form/TodoForm'

function Hero() {
    return (
        <div className="contaienr hero">
            <div className='content c1' id='home'>
                <TodoForm />
            </div>
            <div className='content c2' id='form'>

                <p>good things happen to those who never give up.</p>
            </div>
            <div className='content c3' id='result'>

                <p>good things happen to those who never give up.</p>
            </div>

        </div>
    )
}

export default Hero
