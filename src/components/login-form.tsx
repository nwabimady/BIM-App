import { FC } from "react";
<<<<<<< HEAD
import { useAppContext } from "../middleware/context-provider";

export const LoginForm: FC = () => {
  const [state] = useAppContext();

  const onClick = () => {};

  return state.user ? (
    <> {state.user.displayName} </>
  ) : (
    <button onClick={onClick}>Login</button>
  );
=======
import { getApp } from "firebase/app";

export const LoginForm: FC = () => {
  return <h1>{JSON.stringify(getApp)}</h1>;
>>>>>>> master
};
