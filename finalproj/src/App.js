import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Redirect from './components/Redirect';
import Game from './components/Game';
import Artists from './components/Artists';
import Songs from './components/Songs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/redirect" component={Redirect} />
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/artists" component={Artists} />
        <Route path="/songs" component={Songs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
