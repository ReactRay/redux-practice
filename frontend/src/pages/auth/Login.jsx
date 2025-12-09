import { Link } from 'react-router-dom'
import './auth.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/authReducer/authThunks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const { user } = useSelector(state => state.auth);


    async function handleSubmit(e) {
        e.preventDefault()
        await dispatch(loginThunk(formState));


        navigate('/home');


    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div>

            <form className='auth-form' onSubmit={handleSubmit} >
                <h1>Login Page</h1>
                <div className='form-control'>
                    <label htmlFor='Email'>Email:</label>
                    <input onChange={handleChange} value={formState.email} type="email" name='email' id='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password:</label>
                    <input onChange={handleChange} value={formState.password} type="password" name='password' id='password' />
                </div>


                <button type='submit' className='btn btn-primary btn-block'>Login</button>
                <Link to="/">no account ? register!</Link>
            </form>
        </div>
    )
}

export default Login
