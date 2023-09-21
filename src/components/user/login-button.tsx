import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FC } from "react";

export const LogInButton: FC = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const onLoginClick = () => {
    signInWithPopup(auth, provider);
  };
  return <button onClick={onLoginClick}>Log in</button>;
};
