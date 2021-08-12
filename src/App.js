import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import SignInOutPage from './pages/sign-in-out/sign-in-out.component';

import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utlls';

import './App.css';

class App extends React.Component{
  
  constructor() {
    super();

    this.state = {
      currentUser : null 
    }
  }

unsubscribeFromAuth = null; 

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(this.state.currentUser.displayName);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }  

  
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/sign-in' component={SignInOutPage}/>
      </Switch>
      </div>
    )
  }
};

export default App;
