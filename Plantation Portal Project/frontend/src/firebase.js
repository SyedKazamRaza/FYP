import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAqDcrMv2AaPiAN1jAHfBto6XFkLpwVMUY",
    authDomain: "plantationportal-6f32f.firebaseapp.com",
    projectId: "plantationportal-6f32f",
    storageBucket: "plantationportal-6f32f.appspot.com",
    messagingSenderId: "491286289205",
    appId: "1:491286289205:web:b5fc938ce2f85710b10a7c"
  };
  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);