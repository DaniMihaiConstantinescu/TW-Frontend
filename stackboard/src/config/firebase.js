import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCp7TW9Ff85IOzgW-kGcvhn5fpgLFaxcEM",
    authDomain: "tactical-unison-363709.firebaseapp.com",
    projectId: "tactical-unison-363709",
    storageBucket: "tactical-unison-363709.appspot.com",
    messagingSenderId: "96593883473",
    appId: "1:96593883473:web:535ca940c36486cb68e370"
};
  
const app = initializeApp(firebaseConfig);

// export default app
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
export {auth, googleProvider, githubProvider}
export const fileDB = getStorage(app);