import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {Action} from "../middleware/actions";

export const userAuth = {
    login: (action: Action) => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        },
    };