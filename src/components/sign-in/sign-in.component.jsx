import React from "react";

import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utlls";
import { auth } from "../../firebase/firebase.utlls";

import "./sign-in.styles.scss";

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password)
      alert(`Welcome back`)
      this.setState({email: "", password: "",})

    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in container">
        <h2 className='title'>Already have an account</h2>
        <span className='sub-title'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <div className="btn-flex">
            <button className="button" type="submit">Sign in</button>
            <button className="button button-google" onClick={signInWithGoogle}>Sign in with Google</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
