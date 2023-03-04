import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Chat from './components/Chat';
import NavMenu from './components/NavMenu';
import * as api from './api/user.js';
import './App.scss';

const spinner = <FontAwesomeIcon icon={faSpinner} size='10x' color='gray' spin />
// React router version 6 uses the keyword Routes instead of Switch
// It also uses this new element prop

// Lazy loading our routes to enhance performance, components won't be loaded unless they are needed.
const Contacts = lazy(() => import("./components/Contacts"));
const Auth = lazy(() => import("./components/Auth"));
const Profile = lazy(() => import("./components/Profile"));

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  React.useEffect(() => {
    api.validateUser()
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false))
  }, []);

  return (
    <>
      {isLoggedIn &&
        <div className="App">
          <header>
            <h1>Chat Express</h1>
            <NavMenu />
          </header>
          <main>
            <Chat />
            <div id='side-panel'>
              <Suspense fallback={spinner}>
                <Routes>
                  <Route path="/" element={<Contacts />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>}
      {isLoggedIn === false && <Auth />}
      {isLoggedIn === null && <div id='main-spinner'>{spinner}</div>}
    </>
  );
}
