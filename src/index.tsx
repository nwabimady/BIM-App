import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyCgANRcHLsE4nFzHxhPU5Tu5qn55evdmnA",
  authDomain: "my-bim-app-aaa98.firebaseapp.com",
  projectId: "my-bim-app-aaa98",
  storageBucket: "my-bim-app-aaa98.appspot.com",
  messagingSenderId: "875409646332",
  appId: "1:875409646332:web:4b24ac0a9b3de169026d79",
};

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
