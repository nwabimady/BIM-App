import { FC } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Action } from "../../middleware/actions";
import Button from "@mui/material/Button";

export const LogInButton: FC = () => {
  const dispatch = useAppContext()[1];

  const onLoginClick = () => {
    dispatch({ type: "LOGIN" } as Action);
  };
  return (
    <>
      <Button onClick={onLoginClick} variant="contained">
        Log in
      </Button>
    </>
  );
};
