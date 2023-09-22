import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6SyoX34iNqfwurLLL7dVgKqHeUSxchHA",
    authDomain: "shadowghost-74c53.firebaseapp.com",
    databaseURL: "https://shadowghost-74c53-default-rtdb.firebaseio.com",
    projectId: "shadowghost-74c53",
    storageBucket: "shadowghost-74c53.appspot.com",
    messagingSenderId: "139366804600",
    appId: "1:139366804600:web:12d624695b1178444fd18d",
    measurementId: "G-W1BKY1K3YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);