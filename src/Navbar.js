import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <div className="nav-bar">
                <h1>Memory Game</h1>
                <li id="play-again">Play Again</li>
            </div>
        );
    }
}

export default Navbar;