import React from "react";
import facebook from "../image/facebook.png";
import instagram from "../image/instagram.png";
import linkedln from "../image/linkedin.png";



function Footer() {
    return (
        <div className="footer-sec">
            <a href="facebook.com"><img src={facebook} alt="logo Facebook" /></a>
            <a href="instagram.com"><img src={instagram} alt="logo Instagram" /></a>
            <a href="linkedin.com"><img src={linkedln} alt="logo Linkedln" /></a>
        </div>
    )
}

export default Footer;