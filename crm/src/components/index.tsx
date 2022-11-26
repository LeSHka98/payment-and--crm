// libraries
import React from 'react';
// components
import NavPanel from 'components/layout/NavPanel';
import ClientArea from 'components/ClientArea';
// styles
import 'styles/index.scss';

const App = () => (
  <div className="app">
    <NavPanel />
    <ClientArea />
  </div>

);

export default App;
