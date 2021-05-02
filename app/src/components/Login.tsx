import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import React, { useContext } from 'react';
import { UserContext } from '../auth/UserContext';
import type { IUser } from '../../types/user';
import styles from '../styles/login.module.scss';

import specsSvg from '../img/undraw_Specs_djh3.svg';

import 'firebase/auth';

interface Props {}

export const Login: React.FC<Props> = () => {
  const { setUser } = useContext(UserContext);
  const { loginContainer, container } = styles;

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
      signInSuccessWithAuthResult: (user: IUser): boolean => {
        setUser(user);
        return false;
      },
    },
  };

  return (
    <div className={container} style={{ backgroundImage: `url(${specsSvg})` }}>
      <div className={loginContainer}>
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
};
