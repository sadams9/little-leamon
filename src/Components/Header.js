import React from "react";

/* Little Lemon Name and location */

function mainHeader() {
    return (
        <div className="header">
            <h1 className="mainText">Little Lemon</h1>
            <h2 className="location">Chicago</h2>
        </div>
    );
}

function pictureHome() {
    return (
        <img src="./Assets/icons_assets/restaurant chef B.jpg" className="chef" alt="chef sprinkling spices on a dish"/>
    );
 }

function Header() {
    <div className="hero">
        <mainHeader />
        <pictureHome />
    </div>
}
 
export default Header;
