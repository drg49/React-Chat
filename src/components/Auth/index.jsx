import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

const spinner = <FontAwesomeIcon icon={faSpinner} size='1x' color='white' id="auth-form-spinner" spin />

export default function Auth() {
  const [formData, setFormData] = React.useState({});
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const redirect = () => {
    isSignUp ? setIsSignUp(false) : setIsSignUp(true);
    setFormData({});
  }

  const props = {
    formData: formData,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    spinner: spinner
  }

  return (
    <>
      <h1>Chat Express</h1>
      <div className='login-form' onChange={handleChange}>
        { isSignUp ? <Signup {...props} /> : <Login {...props} /> }
      </div>
      <span
        className='lf-auth-link'
        onClick={redirect}
      >
        {isSignUp ? 'Login' : 'Sign Up'}
      </span>
    </>
  )
}