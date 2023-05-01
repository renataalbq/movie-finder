// @ts-ignore
import { FIREBASE_API_KEY, AUTH_DOMAIN,PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID,APP_ID } from 'react-native-dotenv';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
