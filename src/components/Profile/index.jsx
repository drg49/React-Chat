import React from 'react';
import * as api from '../../api/user';

export default function Profile() {

  const handleLogout = () => {
    api.logout()
      .then(() => window.location.reload())
        .catch(err => console.log(err))
  }
  
  return (
    <>
      <p>Profile Page</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}