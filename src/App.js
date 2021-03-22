import React from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import SidebarEmpty from './Components/SidebarEmpty/SidebarEmpty';

import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <SidebarEmpty />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
