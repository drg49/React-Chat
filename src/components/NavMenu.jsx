import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const chatIcon = <FontAwesomeIcon icon={faCommentAlt} size="2x"/>
const accountIcon = <FontAwesomeIcon icon={faUser} size="2x"/>
const settingsIcon = <FontAwesomeIcon icon={faGear} size="2x"/>

export default function NavMenu() {    
    return (
        <nav>
            <Link to="/" title="Chat">{chatIcon}</Link>
            <Link to="/account" title="Profile">{accountIcon}</Link>
            <Link to="/settings" title="Settings">{settingsIcon}</Link>
        </nav>
    )
}