import React from 'react';
import * as api from '../../api/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const profileIcon = <FontAwesomeIcon icon={faUser} color='#808080' />
const keyIcon = <FontAwesomeIcon icon={faKey} color='#E2A211' />

export default function Login({ formData, isLoading, setIsLoading, spinner }) {

  const handleLogin = () => {
    setIsLoading(true);
    api.login(formData)
        .then(() => {
          api.validateUser().then(() => window.location.reload());
        })
        .catch(() => setIsLoading(false));
  }

  return (
    <>
      <div className='flex-row'>
        <label className='lf-label' htmlFor='username-email'>{profileIcon}</label>
        <input
          id='username-email'
          className='lf-input'
          placeholder='Username or Email'
          type='text'
          name='usernameOrEmail'
        />
      </div>
      <div className='flex-row'>
        <label className='lf-label' htmlFor='password'>{keyIcon}</label>
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
        onClick={handleLogin}
        disabled={isLoading}
      >
        LOGIN {isLoading && spinner}
      </button>
    </>
  )
}