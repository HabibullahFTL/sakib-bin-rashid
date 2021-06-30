import React from 'react';
import Header from '../Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import Course from '../Course/Course';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Course/>
            <Footer/>
        </div>
    );
};

export default Home;