export type ActionType = "LOGIN" | "UPDATE_USER";

export interface Action {
    action: ActionType;
    type: ActionType;
    payload: any;
}