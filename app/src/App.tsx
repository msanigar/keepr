import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './auth/UserContext';
import { Notes } from './components/Notes';
import { AddNote } from './components/AddNote';
import { Login } from './components/Login';

import './reset.global.css';
import './firebaseui-styling.global.css';

import styles from './styles/app.module.scss';

interface Props {}

const App: React.FC<Props> = () => {
  const { user, logout } = useContext(UserContext);
  const knownUser = user.email || user.displayName;
  const { container } = styles;

  return (
    <div className={container} data-test="keepr-container">
      <Router>
        {user && knownUser ? (
          <>
            <button onClick={logout}>Sign out</button>
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
