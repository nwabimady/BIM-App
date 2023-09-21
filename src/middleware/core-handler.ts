import { Action } from "./actions";
import { userAuth } from "./../core/user-auth";

export const executeCore = (action: Action) => {
    if (action.type === "LOGIN") {
      return userAuth.login();
    }
    if (action.type === "LOGOUT") {
      return userAuth.logout();
    }
  };
  