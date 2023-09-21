import { FC } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Action } from "../../middleware/actions";

export const LogInButton: FC = () => {
  const dispatch = useAppContext()[1];

  const onLoginClick = () => {
    dispatch({ type: "LOGIN" } as Action);
  };
  return <button onClick={onLoginClick}>Log in</button>;
};
