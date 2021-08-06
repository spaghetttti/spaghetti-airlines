import React from "react";

import "./header.styles.scss";

import "./menu.scss";

import { ReactComponent as Logo } from "../../assets/takeoff.svg";

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {addClass: false}
    }
    
    toggle() {
        this.setState({addClass: !this.state.addClass})
    }
    
    render() {
        let boxClass = ["hamburger-menu"];
        let overLayBoxClass = [""];
        if (this.state.addClass) {
            boxClass.push('animate');
            overLayBoxClass.push('overlay');
            overLayBoxClass.push('fade-in');
        }
        else {
          overLayBoxClass.push('fade-out');
        }

        return (
            <div className="header">
              <div className={overLayBoxClass.join(' ')}></div>
              <nav className="flex flex-jc-sb flex-ai-c change-on-mob">
                <div className="header-logo flex flex-jc-sb">
                  <a href="/">
                    <Logo className="header-logo-icon" />
                    <span className="">Spaghetti AirLines</span>
                    {
                      //Edit Class to place <span> in center either hide in mob view
                    }
                  </a>
                </div>
          
                <div className="header-links hide-for-mobile">
                  <a href="/">Home</a>
                  <a href="/">Flight</a>
                  <a href="/">Car</a>
                  <a href="/">Hotel</a>
                  <a href="/">Contact Us</a>
                </div>
          
                <a className="button button-sign-in" href="/">
                  Sign in
                </a>
                
                <div className="header-menu hide-for-desktop menu-wrapper">
                    <div
                      onClick={this.toggle.bind(this)}
                      className={boxClass.join(' ')} 
                    ></div>
                  </div>
              </nav>
            </div>
          )

    }
};

export default HeaderComponent;
