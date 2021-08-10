import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import SignInOutPage from './pages/sign-in-out/sign-in-out.component';

import HeaderComponent from './components/header/header.component';


import './App.css';

class App extends React.Component{
  
  
  render() {
    return (
      <div>
      
       <HomePage/>
      <SignInOutPage/>
      </div>
    )
  }
};

export default App;
