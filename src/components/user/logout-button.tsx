import { signOut, getAuth } from "firebase/auth";
import { FC } from "react";

export const LogOutButton: FC = () => {
  const auth = getAuth();
  const onLogoutClick = () => {
    signOut(auth);
  };
  return <button onClick={onLogoutClick}>Logout</button>;
};
