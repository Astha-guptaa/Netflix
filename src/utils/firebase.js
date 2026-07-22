// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAguGfsHu-33FR_kF_7fWsHbNO-9qVqGIQ',
  authDomain: 'netflixgpt-993a2.firebaseapp.com',
  projectId: 'netflixgpt-993a2',
  storageBucket: 'netflixgpt-993a2.firebasestorage.app',
  messagingSenderId: '674189431619',
  appId: '1:674189431619:web:de9cfc9061a1284fb6d5f6',
  measurementId: 'G-MJVH0QCX1J',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
