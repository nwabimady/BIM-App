import { FC } from "react";
import { useAppContext } from "../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { LogOutButton } from "./user/logout-button";

export const MapViewer: FC = () => {
  const [state] = useAppContext();

  if (!state.user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Hello map viewer!</h1>
      <LogOutButton />
    </>
  );
};
