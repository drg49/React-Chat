import React from 'react';
import * as api from '../../api/user';

export default function Signup({ formData, isLoading, setIsLoading, spinner }) {

  const handleSignUp = () => {
    setIsLoading(true);
    api.signUp(formData)
        .then(() => {
          api.login({ usernameOrEmail: formData.username, password: formData.password})
              .then(() => api.validateUser().then(() => window.location.reload()));
        })
        .catch(() => setIsLoading(false));
  }

  return (
    <>
      <div className='flex-row'>
        <input
          id='first-name'
          className='lf-input'
          placeholder='First Name'
          type='text'
          name='firstName'
        />
      </div>
      <div className='flex-row'>
        <input
          id='last-name'
          className='lf-input'
          placeholder='Last Name'
          type='text'
          name='lastName'
        />
      </div>
      <div className='flex-row'>
        <input
          id='username'
          className='lf-input'
          placeholder='Username'
          type='text'
          name='username'
        />
      </div>
      <div className='flex-row'>
        <input
          id='email'
          className='lf-input'
          placeholder='Email'
          type='email'
          name='email'
        />
      </div>
      <div className='flex-row'>
        <input
          id='password'
          className='lf-input'
          placeholder='Password'
          type='password'
          name='password'
        />
      </div>
      <button
        className='lf-submit'
        onClick={handleSignUp}
        disabled={isLoading}
      >
        SIGN UP {isLoading && spinner}
      </button>
    </>
  )
}