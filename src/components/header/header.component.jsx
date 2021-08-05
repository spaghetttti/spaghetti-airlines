import React from 'react';

import './header.styles.scss';

import { ReactComponent as Logo} from '../../assets/takeoff.svg'

const HeaderComponent = () => (
    <div className="header">
        <nav className="flex flex-jc-sb flex-ai-c change-on-mob">
            <div className="header-logo flex flex-jc-sb">
                <a href="/">    
                    <Logo className="header-logo-icon"/>
                    <span className="">Spaghetti AirLines</span>
                    {
                        //Edit Class to place <span> in center either hide in mob view 
                    }
                </a>
            </div>

            <div className="header-links hide-for-mobile">
                <a href="/">Home</a><a href="/">Flight</a>
                <a href="/">Car</a>
                <a href="/">Hotel</a>
                <a href="/">Contact Us</a>
            </div>

            <a className="button button-sign-in" href='/'>Sign in</a>
            
            <a href='/' className="header-menu hide-for-desktop">
                <span></span>
                <span></span>
                <span></span>

            </a>
        </nav>
    </div>
    
)

export default HeaderComponent;