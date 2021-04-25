import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import React, { useContext } from 'react';
import { UserContext } from '../auth/UserContext';

import 'firebase/auth';

export const FirebaseAuth = () => {
  const { setUser } = useContext(UserContext);

  const firebaseAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
    ],
    signInSuccessUrl: '/',
    callbacks: {
      signInSuccessWithAuthResult: ({ user }: any): boolean => {
        console.log('success!');
        setUser(user);
        return false;
      },
    },
  };

  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};
