import React, {useState,} from 'react'
import {Link} from 'react-router-dom';
import './form.css';
import {LinkContainer} from 'react-router-bootstrap';
import Header from '../../components/Header';
import {register} from "../../actions/adminActions";
import {useDispatch, useSelector} from 'react-redux'
import Message from "../../components/Message";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPassword_Confirmation] = useState("")
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch()
    const submitHandler = (e) => {


        e.preventDefault()
        if (password !== password_confirmation) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(username, email, password))
        }

    }


    return (
        <>
            <Header/>
            {message && <Message variant='danger'>{message}</Message>}

            <div className='form-container'>
                <LinkContainer to='/'>
                    <span className='close-btn'>×</span>

                </LinkContainer>

                <div className='form-content-right'>

                    <form onSubmit
                          className='form'
                          noValidate>

                        <div className='form-inputs'>

                            <br/>
                            <h1>Register For Admin</h1>
                            <label className='labeld'> Username </label>
                            <div>


                                <input className='form-input-name'
                                       type='text'
                                       name='username'
                                       placeholder='User Name'
                                       value={username} onChange={(e) => setUsername(e.target.value)}
                                />


                            </div>


                        </div>
                        <div className='form-inputs'>

                            <label className='labeld'> Email </label>
                            <input
                                className='form-input'
                                type='email'
                                name='email'
                                placeholder='Enter your email'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-inputs'>

                            <label className='labeld'> Password </label>

                            <input
                                className='form-input'
                                type='password'
                                name='password'
                                placeholder='Enter your password'
                                value={password} onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>

                        <div className='form-inputs'>

                            <label className='labeld'> Confirm Password </label>
                            <input
                                className='form-input'
                                type='password'
                                name='password2'
                                placeholder='Confirm your password'

                                value={password_confirmation} onChange={(e) => setPassword_Confirmation(e.target.value)}
                            />
                        </div>

                        <button className='form-input-btn' type='submit' onClick={submitHandler}>Sign up</button>


                        <span className='form-input-login'>
              Already have an account ? Login < Link to='/login'> here </Link>
            </span>

                    </form>
                </div>

            </div>
        </>

    )
}

export default Register;