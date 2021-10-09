import React from 'react';


function Login(){
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;
    
    /*0auth login using spotify API*/
    const handle_login = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    return (
        <div className="login-page">
            <h1 className="home-head">Login to view site and play Tic Tac Toe!</h1>
            <button className="login-button" type="submit" onClick={handle_login}>Spotify Login</button> 
        </div>
    );
};

export default Login;