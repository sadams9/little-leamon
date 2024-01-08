import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* banner text */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <BrowserRouter>
                        <Link to="/booking"><button aria-Label='On Click'>Reserve Table</button></Link>
                    </BrowserRouter>
                </div>

                {/* banner img */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>

        </header>
    );
};

export default Header;