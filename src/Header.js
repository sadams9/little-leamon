import React from "react";

/* Little Lemon Name and location */

function Header() {
    return (
        <div className="header">
            <h1 className="mainText">Little Lemon</h1>
            <h2 className="location">Chicago</h2>
        </div>
    );
}

function Picture() {
    return (
        <img src="./Assets/icons_assets/restaurant chef B.jpg" className="chef" alt="chef sprinkling spices on a dish"/>
    );
 }

export default Header;