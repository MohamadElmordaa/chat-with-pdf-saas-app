import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBum3JozpLDd_6IQu82S0skrnhrTlRtMYo",
  authDomain: "chat-with-pdf-saas-app-c2f0e.firebaseapp.com",
  projectId: "chat-with-pdf-saas-app-c2f0e",
  storageBucket: "chat-with-pdf-saas-app-c2f0e.appspot.com",
  messagingSenderId: "271051313950",
  appId: "1:271051313950:web:fc8f7c3bfd6fe94a682f0f",
  measurementId: "G-Z0KFP4KXH2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
