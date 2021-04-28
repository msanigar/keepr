import firebase from 'firebase/app';
import React, { createContext } from 'react';

export interface IFirebaseContext {
  firebase: firebase.app.App;
}

export const FirebaseContext = createContext({} as IFirebaseContext);

const {
  SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  SNOWPACK_PUBLIC_FIREBASE_DATABASE_URL,
  SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  SNOWPACK_PUBLIC_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseeConfig = {
  apiKey: SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: SNOWPACK_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: SNOWPACK_PUBLIC_FIREBASE_APP_ID,
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    console.log(`0. Firebase initialized`);
    firebase.initializeApp(firebaseeConfig);
  }
};

export const FirebaseProvider: React.FC = ({ children }: any) => {
  initFirebase();
  return (
    <div>
      <FirebaseContext.Provider
        value={{ firebase: firebase.app() } as IFirebaseContext}
      >
        {children}
      </FirebaseContext.Provider>
    </div>
  );
};
