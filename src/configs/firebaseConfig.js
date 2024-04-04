import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHMpA8ltauooDYFbxL1BrYaIP0JhzpyAg",
  authDomain: "device-control-app.firebaseapp.com",
  databaseURL:
    "https://device-control-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "device-control-app",
  storageBucket: "device-control-app.appspot.com",
  messagingSenderId: "819199364113",
  appId: "1:819199364113:web:5b58def6636b62aeb875b0",
  measurementId: "G-FVLKEE83YZ",
};

const db = initializeApp(firebaseConfig);

export default db;
