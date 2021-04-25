import React, { useContext } from 'react';
import { FirebaseAuth } from './components/FirebaseAuth';
import { UserContext } from './auth/UserContext';

const App = () => {
  const { user, logout } = useContext(UserContext);
  const knownUser = user.email || user.displayName;

  return (
    <div className="App">
      Hello world
      {user && knownUser ? (
        <div>
          {JSON.stringify(user)}
          <button onClick={logout} style={{ paddingLeft: '20px' }}>
            Sign out
          </button>
        </div>
      ) : (
        <FirebaseAuth />
      )}
    </div>
  );
};

export default App;
