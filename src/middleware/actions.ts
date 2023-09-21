export type ActionType = "LOGIN" | "LOGOUT" | "UPDATE_USER";

export interface Action {
    action: ActionType;
    type: ActionType;
    payload?: any;
}