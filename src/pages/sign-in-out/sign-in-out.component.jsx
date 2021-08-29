import React from "react";

import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";

import "./sign-in-out.styles.scss";

class SignInOutPage extends React.Component {
  render() {
    return (
    <div className='sign-in-out'>
      <SignInComponent/>
      <SignUpComponent/>
    </div>  
    );
  }
}

export default SignInOutPage;
