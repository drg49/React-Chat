import React from 'react';
// import * as api from '../../api/user';

export default function Profile() {

  const handleLogout = () => {
    console.log('Logging out')
  }

  return (
    <>
      <p>Profile Page</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}