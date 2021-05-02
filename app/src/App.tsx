import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './auth/UserContext';
import { Notes } from './components/Notes/Notes';
import { AddNote } from './components/AddNote/AddNote';
import { Login } from './components/Login/Login';

import './firebaseui-styling.global.css';

interface Props {}

const App: React.FC<Props> = () => {
  const { user } = useContext(UserContext);
  const knownUser = user.email || user.displayName;

  return (
    <div data-test="keepr-container">
      <Router>
        {user && knownUser ? (
          <>
            <Switch>
              <Route path="/add-note">
                <AddNote />
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
