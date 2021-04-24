import firebase from 'firebase/app'

const {
  SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  SNOWPACK_PUBLIC_FIREBASE_DATABASE_URL,
  SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  SNOWPACK_PUBLIC_FIREBASE_APP_ID
} = import.meta.env

const firebaseeConfig = {
  apiKey: SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: SNOWPACK_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: SNOWPACK_PUBLIC_FIREBASE_APP_ID
};

console.log(firebaseeConfig)

try {
  firebase.initializeApp(firebaseeConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;
export default fire;