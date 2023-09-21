import { FC, useRef, useEffect } from "react";
import { LogOutButton } from "../user/logout-button";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../middleware/context-provider";
import { Action } from "../../middleware/actions";

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && state.user) {
      dispatch({ type: "START_MAP", payload: canvas } as Action);
    }

    return () => {
      dispatch({ type: "REMOVE_MAP" } as Action);
    };
  }, []);

  if (!state.user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Hello map viewer!</h1>
      <LogOutButton />
      <div className="full-screen" ref={canvasRef} />
    </>
  );
};
