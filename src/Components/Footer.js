import React from "react";
import logo from "../images/small_logo.png";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="small logo" />
                </div>
                <div>
                    <ul><a href="/">Home</a></ul>
                    <ul><a href="/">About</a></ul>
                    <ul><a href="/">Menu</a></ul>
                    <ul><a href="/">Reservations</a></ul>
                    <ul><a href="/">Order Online</a></ul>
                    <ul><a href="/">Login</a></ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><strong>Address:</strong> <br/> 555 E Any Street <br/> Chicago, IL 99999</li>
                        <li><strong>Phone:</strong> <br/> 999-999-9999</li>
                        <li><strong>Email:</strong> <br/> fakecontact@littlelemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul><a href="facebook.com" alt="facebook page">Facebook</a></ul>
                    <ul><a href="twitter.com" alt="twitter page">Twitter</a></ul>
                    <ul><a href="instagram.com" alt="instagram page">Instagram</a></ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;