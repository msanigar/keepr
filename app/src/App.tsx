import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './auth/UserContext';
import { Notes } from './components/Notes';
import { AddNote } from './components/AddNote';
import { Login } from './components/Login';

const App: React.FC = () => {
  const { user, logout } = useContext(UserContext);
  const knownUser = user.email || user.displayName;

  return (
    <div className="App" data-test="keepr-container">
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
