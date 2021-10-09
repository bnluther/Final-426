import React from 'react';
import Navbar from './Navbar';
import Kanye from './Kanye';

class Artists extends React.Component {
    render() { 
        return (
            <div>
                <Navbar />
                <div className="home-head">My top 3 favorite artists</div>
                <div className="home-head">
                    <ul class="artist-list">
                        <li>1. Kanye West</li>
                        <div className="descriptions">
                            <li><strong>Debut album: </strong>The College Dropout (2004)</li>
                        </div>
                        <li>2. Glass Animals</li>
                        <div className="descriptions">
                            <li><strong>Debut album: </strong>Zaba (2014)</li>
                        </div>
                        <li>3. The Beatles</li>
                        <div className="descriptions">
                            <li><strong>Debut album: </strong>Please Please Me (1964)</li>
                        </div>
                    </ul>
                </div>
                <Kanye />
            </div>
        );
    }
}

export default Artists;