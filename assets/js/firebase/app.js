
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAUQhUCuWvVrWZ2PF0xyGvb_8EsCfxlMPU",
    authDomain: "serie-netflix.firebaseapp.com",
    projectId: "serie-netflix",
    storageBucket: "serie-netflix.appspot.com",
    messagingSenderId: "1022480036196",
    appId: "1:1022480036196:web:43b253cc89316b1465ca71"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default app