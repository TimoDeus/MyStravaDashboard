import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootState} from "app/reducers";
import {Action} from "redux";
import {RouterAction} from "react-router-redux";

export type AsyncThunkAction<T extends Action> = ThunkAction<Promise<any>, RootState, null, T | RouterAction>;
export type VoidThunkAction<T extends Action> = ThunkAction<void, RootState, null, T | RouterAction>;
export type DispatchThunk<T extends Action> = ThunkDispatch<RootState, null, T | RouterAction>;
export type GetState = () => RootState;
