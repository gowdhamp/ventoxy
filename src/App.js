import React from 'react';
import Carousel from './components/Carousel'
import './App.css';
import './assets/css/grid.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Dashboard />
    </div>
  );
};

export default App;
