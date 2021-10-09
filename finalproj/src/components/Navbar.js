import React from 'react';

function Navbar() {
    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href='/home'>Home</a>
                    </li>
                    <li>
                        <a href='/artists'>Top Artists</a>
                    </li>
                    <li>
                        <a href='/songs'>Top Songs</a>
                    </li>
                    <li>
                        <a href="/game">Tic Tac Toe</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;