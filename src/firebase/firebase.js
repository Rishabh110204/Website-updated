import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrZMl0GMqUEJQiwO0vGEMkpZKqrfb4PAU",
  authDomain: "websiteritesh-9289e.firebaseapp.com",
  projectId: "websiteritesh-9289e",
  storageBucket: "websiteritesh-9289e.firebasestorage.app",
  messagingSenderId: "128638155579",
  appId: "1:128638155579:web:49d479a4f1194d8ae1d51e",
  measurementId: "G-6KYENHCTD3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
