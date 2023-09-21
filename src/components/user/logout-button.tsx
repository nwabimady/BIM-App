import { FC } from "react";
import Button from "@mui/material/Button";
import { useAppContext } from "../../middleware/context-provider";
import { Action } from "../../middleware/actions";

export const LogOutButton: FC = () => {
  const dispatch = useAppContext()[1];
  const onLogoutClick = () => {
    dispatch({ type: "LOGOUT" } as Action);
  };

  return (
    <>
      <Button onClick={onLogoutClick} variant="contained">
        Log out
      </Button>
    </>
  );
};
