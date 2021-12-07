import React from 'react'
import '../admin/signin/login.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../components/Header";


function SignIN() {


  return (
    <div >
      <Header />
      <div className='justify-container'>

        <div className='sign-in1'>
          <span className='sign-in2'>
            <div className='form'>
              <span>
                Sign In
              </span>
              <div className='form-inputs'>

                <label className='form-label' > Username </label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your First Name'


                />
              </div>
              <div className='form-inputs' >

                <label className='form-label' > Password </label>

                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password'

                />
              </div>
              <LinkContainer to='/userprofile'>
                <button className='form-input-btn' type='submit'>Sign in </button>
              </LinkContainer>
              <span className='form-input-login' >
                Forgotten Password ? Click < Link to='/resetpw' > here </Link>
              </span>

            </div>
          </span>
        </div>
      </div >
    </div>
  )
}

export default SignIN
