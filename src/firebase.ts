import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl1bVXp0UFUuoRKrkfQeAeR2-0WKnnBcc",
  authDomain: "portfolio-ec91b.firebaseapp.com",
  projectId: "portfolio-ec91b",
  storageBucket: "portfolio-ec91b.firebasestorage.app",
  messagingSenderId: "957180077380",
  appId: "1:957180077380:web:6e46cac35fd919e6dae311",
  measurementId: "G-W2KM02MH2J",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)

export default app
