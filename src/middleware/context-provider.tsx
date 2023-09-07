import { executeCore } from "./core-handler";
import { initialState, State } from "./state";
import { FC, PropsWithChildren, useReducer, createContext } from "react";
import { reducer } from "./reducer";
import { Action } from "./actions";

const appContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = (value: Action) => {
    setState(state, value);
    executeCore(value);
  };

  return (
    <appContext.Provider value={[state, dispatch]}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useAppContext(appContext);
};
