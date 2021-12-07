import React from 'react'
import {Link} from 'react-router-dom';
import './form.css';
import {LinkContainer} from 'react-router-bootstrap';
import Header from '../../components/Header';

const Register = () => {

    return (
        <>
            <Header/>
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
                            <label className='labeld'> Name </label>
                            <div>


                                <input className='form-input-name'
                                       type='text'
                                       name='username'
                                       placeholder='First Name'
                                />

                                <input className='form-input-name2'
                                       type='text'
                                       name='username'
                                       placeholder='Last Name'

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
                            />
                        </div>

                        <div className='form-inputs'>

                            <label className='labeld'> Password </label>

                            <input
                                className='form-input'
                                type='password'
                                name='password'
                                placeholder='Enter your password'

                            />
                        </div>

                        <div className='form-inputs'>

                            <label className='labeld'> Confirm Password </label>
                            <input
                                className='form-input'
                                type='password'
                                name='password2'
                                placeholder='Confirm your password'

                            />
                        </div>
                        <LinkContainer to='/emailsent'>
                            <button className='form-input-btn' type='submit'>Sign up</button>
                        </LinkContainer>

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