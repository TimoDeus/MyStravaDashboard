import {GetState} from "app/actions/types";


export const prepareDefaultParams = (getState: GetState, params = {}) => {
  const token = getState().authorization.accessToken;
  return {...params, token};
};
