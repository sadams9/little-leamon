import React from "react";

/* footer logo image */
function FooterImage() {
    return (
        <div className="footerImage">
           <img src= "./Assets/logo.jpg" alt="Little Lemon logo" />;
        </div>
    )
}


/* Footer navigation*/

function FooterNav() {
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


/*Contact Info*/
function ContactInfo() {
    <div className="contactInfo">
    <h2>Contact</h2>
    <p>123 Green Street</p>
    <p>222-333-5555</p>
    <p>info@emailaddress.com</p>
    </div>
}

/* Social Media */
function SocialMedia() {
    <div className="socialMedia">
        <h2>Social Media</h2>
        <a href="facebook.com" alt="facebook">Facebook</a>
        <a href="twitter.com">X</a>
        <a href="instagram.com">Instagram</a>
    </div>

}

function Footer() {
    return (
        <div className="footer">
           <FooterImage />
            <FooterNav />
            <ContactInfo />
            <SocialMedia />
        </div>
    );
}

export default Footer;