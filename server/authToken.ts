import admin from "firebase-admin";
import serviceAccount from "./serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

async function decodeIDToken(
  req: {
    headers: { authorization: string };
    currentUser: admin.auth.DecodedIdToken;
  },
  res: {},
  next: () => void
) {
  const header = req.headers?.authorization;
  if (
    header !== "Bearer null" &&
    req.headers?.authorization?.startsWith("Bearer ")
  ) {
    const idToken = req.headers.authorization.split("Bearer ")[1];
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.currentUser = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }
  next();
}

module.exports = decodeIDToken;
