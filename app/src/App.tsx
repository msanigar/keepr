import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './auth/UserContext';
import { Notes } from './components/Notes/Notes';
import { Login } from './components/Login/Login';
import { Account } from './components/Account/Account';

import './firebaseui-styling.global.css';
import './masonry.css';

interface Props {}

const App: React.FC<Props> = () => {
  const { user } = useContext(UserContext);

  const knownUser = user.email || user.displayName;

  useEffect(() => {
    console.log(process.env)
  }, [])
  

  return (
    <div data-test="keepr-container">
      <Router>
        {user && knownUser ? (
          <>
            <Switch>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/">
                <Notes />
              </Route>
            </Switch>
          </>
        ) : (
          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
