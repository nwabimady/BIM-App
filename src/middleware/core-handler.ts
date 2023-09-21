import { Action } from "./actions";
import { userAuth } from "./../core/user-auth";
import { mapHandler } from "../core/map/map-handler";

export const executeCore = (action: Action) => {
    if (action.type === "LOGIN") {
      return userAuth.login();
    }
    if (action.type === "LOGOUT") {
      return userAuth.logout();
    }
    if (action.type === "START_MAP") {
        return mapHandler.start(action.payload);
      }
      if (action.type === "REMOVE_MAP") {
        return mapHandler.remove();
      }
  };
  