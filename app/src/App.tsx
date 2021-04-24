import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from './fire';
import Login from './Login'
import 'firebase/auth'
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <div className="App">
      <header className="App-header">
      <Router>
        
        {!isLoggedIn
          ? (
            <>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </>
          ) 
          : (
            <>
              <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>You are logged in!</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
            </>
          )}
      </Router>
      </header>
    </div>
  );
}

export default App;
