import React from "react";
import { Link } from 'react-router-dom'


export function NavBar() {

    return (
        <nav>
            <div className="nav-bar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Citations'>Citations & Sources</Link></li>
                <li><Link to='/Documentation'>Citations & Sources</Link></li>
            </ul>
            </div>
        </nav>
    );

}


export default NavBar;