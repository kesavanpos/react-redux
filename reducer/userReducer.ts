import ActionTypes from '../actions/userActions';

interface IUser {
  name: String;
  email: String;
}

const initialState = {
  users: Array<IUser>(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return { ...state, users: [action.payload] };

    default:
      return { ...state };
  }
};

export default userReducer;
