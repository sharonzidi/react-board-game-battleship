import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {

    return (<div className="WelcomePage">
        <h1>Welcome to Battleship!</h1>
        <ul>
            <li><Link to={"/App"}>Normal Game Mode</Link></li>
            <li><Link to={"/Appfree"}>Free Game Mode</Link></li>
            <li><Link to={"/Rules"}>Rules</Link></li>
        </ul>
    </div>)

}