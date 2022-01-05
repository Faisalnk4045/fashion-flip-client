import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import OurProducts from '../OurProducts/OurProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <OurProducts page='home'></OurProducts>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;