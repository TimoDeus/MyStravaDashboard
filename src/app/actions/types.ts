import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootState} from "app/reducers";
import {Action} from "redux";

export type AsyncAction<T extends Action> = ThunkAction<Promise<any>, RootState, null, T>;
export type DispatchThunk<T extends Action> = ThunkDispatch<RootState, null, T>;
export type GetState = () => RootState;
