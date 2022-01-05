import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import OurProducts from '../OurProducts/OurProducts';

const Explore = () => {
    return (
        <div>
            <NavBar></NavBar>
            <OurProducts page='explore'></OurProducts>
            <Footer></Footer>
        </div>
    );
};

export default Explore;