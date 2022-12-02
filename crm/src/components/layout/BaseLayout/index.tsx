// libraries
import React from 'react';
import { Outlet } from 'react-router-dom';
// components
import NavPanel from 'components/layout/NavPanel';

const App = () => (
  <div className="app">
    <NavPanel />
    <Outlet />
  </div>

);

export default App;
