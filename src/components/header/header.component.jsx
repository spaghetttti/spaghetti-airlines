import React from 'react';

import './header.styles.scss';

import { ReactComponent as Logo} from '../../assets/takeoff.svg'

const HeaderComponent = () => (
    <div className="header-bar">
        <div className="logo-container">
            <Logo className="logo-icon"/>
        </div>
        <div className="sign-in-log-in-container">
            Sign in
        </div>
  
    </div>
    
)

export default HeaderComponent;