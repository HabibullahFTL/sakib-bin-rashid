import React from 'react';
import './Header.css';
import profile from '../../../img/profile_sbr.jpg';
import Typed from 'react-typed';


const Header = () => {
    return (
        <section className="header text-center">
            <div className="header-wrapper d-flex justify-content-center align-items-center flex-column">
                <img src={profile} alt="Abdullah Al Shihab" className="header-img" />
                <div className="header-intro text-white m-3">
                    <h1>Sakib Bin Rashid</h1>
                    <div className="typing-intro">
                        <Typed
                            strings={[
                                'Digital Marketer',
                                'Content Creator',
                                'Educator'
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop >
                        </Typed>
                    </div>
                </div>
                <ul className="header-social-media">
                    <li>
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fab fa-instagram-square"></i></a>
                    </li>
                </ul>
                <button className="btn btn-md fw-bold btn-warning px-5 ">Contact Me</button>
            </div>
        </section>
    );
};

export default Header;