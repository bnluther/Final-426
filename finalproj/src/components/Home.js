import React from 'react';
import Navbar from './Navbar';
import Quote from './Quote';

function Home(){
    return (
        <div>
            <Navbar />
            <div className="home-head">Welcome to my site!</div>
            <div className="home-subhead">
                Navigate around my site to learn more about my top
                artists and my favorite tracks. Under each tab there is information listed for each artist or track
                that I put on my lists. If you would rather just play a game or want a break from viewing, there is a 
                place for you to play a game of Tic Tac Toe. Thanks for visiting!
            </div>
            <Quote />
        </div>
    );
}

export default Home;