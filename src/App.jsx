import React from 'react'
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <>
    <NavTabs />
    <Outlet />
  </>
);
}

export default App
