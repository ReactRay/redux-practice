

import './auth.css'
import { useState } from 'react'

function Register() {

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        role: 'poster'
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <div className='page-container'>

            <form className='auth-form' onSubmit={handleSubmit} >
                <h1>Register Page</h1>
                <div className='form-control'>
                    <label htmlFor='Email'>Email:</label>
                    <input onChange={handleChange} value={formState.email} type="email" name='email' id='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password:</label>
                    <input onChange={handleChange} value={formState.password} type="password" name='password' id='password' />
                </div>
                <div className='form-control'>
                    <select onChange={handleChange} value={formState.role} name='role' id='role'>
                        <option value="poster">Poster</option>
                        <option value="commenter">Commenter</option>
                    </select>
                </div>

                <button type='submit' className='btn btn-primary btn-block'>Register</button>
            </form>
        </div>
    )
}

export default Register
