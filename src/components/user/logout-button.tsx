import { signOut, getAuth } from "firebase/auth";
import { FC } from "react";
import Button from "@mui/material/Button";

export const LogOutButton: FC = () => {
  const auth = getAuth();
  const onLogoutClick = () => {
    signOut(auth);
  };

  return (
    <>
      <Button onClick={onLogoutClick} variant="contained">
        Log out
      </Button>
    </>
  );
};
