import ActionTypes from './userTypes';
import { getUsers } from '../services/userServices';

export default FetchUsers = async (dispatch) => {
  debugger;
  const res = await getUsers();

  dispatch({
    type: ActionTypes.GET_USERS,
    payload: res,
  });
  console.log(res);
  return Promise.resolve(res);
};
