const admin = require('firebase-admin');
require('dotenv').config();

admin.initializeApp({credential: admin.credential.cert({
  "type": "service_account",
  "project_id": "keepr-4cc8f",
  "private_key_id": process.env.FIREBASE_ID,
  "private_key": process.env.FIREBASE_KEY.replace(/\\n/g, '\n'),
  "client_email": "firebase-adminsdk-2c8m1@keepr-4cc8f.iam.gserviceaccount.com",
  "client_id": "100975846486169039626",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2c8m1%40keepr-4cc8f.iam.gserviceaccount.com"
}
),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
});

async function decodeIDToken(req, res, next) {
  console.log('decodeIDToken');
  const header = req.headers?.authorization;
  if (
    header !== 'Bearer null' &&
    req.headers?.authorization?.startsWith('Bearer ')
  ) {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }
  next();
}
module.exports = decodeIDToken;
