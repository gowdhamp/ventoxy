import React from 'react';
import './App.css';
import './assets/css/grid.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
