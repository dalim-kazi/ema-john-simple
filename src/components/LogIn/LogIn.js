import React, { useContext, useState } from 'react';
import './LogIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
const LogIn = () => {
    const { singIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    let location = useLocation()
    let from =location.state?.from?.pathname || "/"
    const navigate =useNavigate()
    const handleSingIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => {
                const errorMessage =error.message
                console.error(error)
                setError(errorMessage)
        })
    }
    return (
        <div className='form-container'>
            <p className='form-title'>Ema John Login</p>
            <form onSubmit={handleSingIn} className='form'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id=""  placeholder='enter email'/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='enter password' />
                    <p className='errorInfo'>{error}</p>
                </div>
                <div className='btn-container'>
                    <button className='btn-login'>Login</button>
                </div>
            </form>
            <p className='info'>New to ema john <Link className='underline underline-offset-4 text-red-500' to="/singup"> create a new account</Link></p>
        </div>
    );
};

export default LogIn;