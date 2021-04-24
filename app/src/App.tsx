import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from './fire';
import Login from './Login';
import Notes from './components/Notes';

import 'firebase/auth';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const logOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.group(error);
      });
  };

  return (
    <div className="App">
      {isLoggedIn && <button onClick={logOut}>Sign Out</button>}
      <Router>
        {!isLoggedIn ? (
          <>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <Route path="/">
                <Notes />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
