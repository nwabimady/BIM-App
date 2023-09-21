import { State } from "./state";
import { Action } from "./actions";

export const reducer = (state: State, action: Action) => {
    if(action.type === "UPDATE_USER") {
        return {...state, user: action.payload};
    } else {
        throw new Error(`Action ${action} not available`);
    }
};
export {};