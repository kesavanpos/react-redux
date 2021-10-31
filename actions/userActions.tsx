import ActionTypes from './userTypes';
import { getUsers } from '../services/userServices';

export const FetchUsers = async (dispatch) => {
  const data = await getUsers();

  dispatch({
    type: ActionTypes.GET_USERS,
    payload: data,
  });
};
