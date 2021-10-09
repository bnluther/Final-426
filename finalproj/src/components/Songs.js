import React from 'react';
import Navbar from './Navbar';

class Songs extends React.Component {
    render() { 
        return (
            <div>
                <Navbar />
                <div className="home-head">My top 5 all-time favorite songs</div>
                <div className="home-head">
                    <ul class="artist-list">
                        <li>1. The Beatles - "Here Comes the Sun"</li>
                        <div className="descriptions">
                            <li>Album: Abbey Road (1969)</li>
                        </div>
                        <li>2. Red Hot Chili Peppers - "Under the Bridge"</li>
                        <div className="descriptions">
                            <li>Album: Blood Sugar Sex Magik (1991)</li>
                        </div>
                        <li>3. Dr. Dog - "Nellie"</li>
                        <div className="descriptions">
                            <li>Album: B-Room (2013)</li>
                        </div>
                        <li>4. Glass Animals - "Life Itself"</li>
                        <div className="descriptions">
                            <li>Album: How To Be A Human Being (2016)</li>
                        </div>
                        <li>5. Sublime - "Wrong Way"</li>
                        <div className="descriptions">
                            <li>Album: Sublime (1996)</li>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Songs;