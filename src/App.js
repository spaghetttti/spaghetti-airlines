import React from 'react';

import HomePage from './pages/homepage/homepage.component';

import HeaderComponent from './components/header/header.component';

import './App.css';

class App extends React.Component{
  
  
  render() {
    return (
      <div>
      <HeaderComponent/>
      <HomePage/>
      </div>
    )
  }
};

export default App;
