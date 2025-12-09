

import React from 'react'

function Register() {
    return (
        <div className='page-container'>
            <h1>Register Page</h1>
            <form className='auth-form' >
                <div className='form-control'>
                    <label htmlFor='Email'>Email:</label>
                    <input type="email" name='email' id='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>Register</button>
            </form>
        </div>
    )
}

export default Register
