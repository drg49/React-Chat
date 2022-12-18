import React from 'react';
import { Routes, Route } from 'react-router';
import Chat from './components/Chat';
import Contacts from './components/Contacts';
import NavMenu from './components/NavMenu';
import './App.scss';

// React router version 6 uses the keyword Routes instead of Switch
// It also uses this new element prop

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Chat Express</h1>
        <NavMenu />
      </header>
      <main>
        <Chat />
        <div id='side-panel'>
          <Routes>
            <Route path="/" element={<Contacts />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
