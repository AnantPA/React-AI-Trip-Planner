import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDwyxUUucg_9w64-Yw-YCDHAcZhAzVJbPk",
    authDomain: "ai-travel-planner-d9c42.firebaseapp.com",
    projectId: "ai-travel-planner-d9c42",
    storageBucket: "ai-travel-planner-d9c42.firebasestorage.app",
    messagingSenderId: "500698998798",
    appId: "1:500698998798:web:d7ab445e1cd7c124ab745f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)