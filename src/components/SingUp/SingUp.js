import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const SingUp = () => {
    const {craeteUser}=useContext(AuthContext)
    const [error, setError] = useState(null)
    const handleSubmitSingUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        if (password.length < 8) {
            setError('password should be 8 characters or more')
        }
        if (password !== confirm) {
            setError('your password is did not match')
        }
        craeteUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(error => {
                const message = error.code
              setError(message)
        })
    }
    return (
        <div className='form-container1'>
        <p className='form-title1'>Ema John Singup</p>
        <form onSubmit={handleSubmitSingUp} className='form'>
            <div className="form-control1">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id=""  placeholder='enter email'/>
            </div>
            <div className="form-control1">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id=""  placeholder='enter password'/>
                </div>
                <div className="form-control1">
                <label htmlFor="password">confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='enter confirm password' />
                    <p className='errorInfo'>{ error}</p>
                </div>
            <div className='btn-container1'>
                <button className='btn-login1'>Login</button>
            </div>
            </form>
            <p className='info1'> Alredy Have an account  <Link className='underline underline-offset-4 text-red-500' to="/login">  login</Link></p>
    </div>
    );
};

export default SingUp;