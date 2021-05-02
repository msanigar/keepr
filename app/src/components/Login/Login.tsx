import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import React, { useContext } from 'react';
import { UserContext } from '../../auth/UserContext';
import type { IUser } from '../../../types/user';

import specsSvg from '../../img/undraw_Specs_djh3.svg';

import 'firebase/auth';

interface Props {}

export const Login: React.FC<Props> = () => {
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
      signInSuccessWithAuthResult: (user: IUser): boolean => {
        setUser(user);
        return false;
      },
    },
  };

  const heroStyles = {
    backgroundColor: `#102542`,
    backgroundImage: `url(${specsSvg})`,
    backgroundRepeat: `no repeat`,
    backgroundSize: `cover`,
  };

  const boxStyles = {
    backgroundColor: `rgb(0,0,0,0.25)`,
  };

  return (
    <div>
      <section className="hero is-primary is-fullheight" style={heroStyles}>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <div className="box" style={boxStyles}>
                  <StyledFirebaseAuth
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
