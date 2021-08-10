import React from 'react';

import HeaderComponent from '../../components/header/header.component';
import MainGrid from '../../components/main-grid/main-grid.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <HeaderComponent/>
        <MainGrid/>
    </div>
);

export default HomePage;