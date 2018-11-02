import {replace} from "react-router-redux";
import {DispatchThunk} from "app/actions/types";

class ErrorHandler {
  handleError = (dispatch: DispatchThunk<any>, actionType: string) => ({response}: any) => {
    dispatch({type: actionType});
    if (response.status === 401) {
      dispatch(replace('/login'));
    }
  };
}

export default new ErrorHandler().handleError;
