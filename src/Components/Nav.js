import React from "react";

/* main navigation links */
function NavBar() {
    return (
        <nav>
            <menu>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#orderonline">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </menu>
        </nav>
    );
}

/* restaurant logo */
/* Potential issue: Check logo file path */
function Logo() {
    return (
    <img src="./Assets/logo.jpg" alt="Little Lemon logo" className="logo"/>
    );
}


function Nav() {
    return (
        <div className="header">
            <Logo />
            <NavBar />
        </div>

    );
}


export default Nav;