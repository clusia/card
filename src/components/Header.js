import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div>
            <h1>Jane Doe</h1>
            <h2 className="frontend-h2">Frontend Developer</h2>
            <h3 className="jane-h3">jane-doe.com</h3>
            <div className="mail-sec">
                <button className="bt-email"><FontAwesomeIcon icon={faEnvelope} className="icon-mail" /> Email</button>
            </div>
            
        </div>
    )
}

export default Header;