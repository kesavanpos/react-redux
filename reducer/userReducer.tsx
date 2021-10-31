import * as actions from "./userActions"

interface IUsers {
  name: String;
  email: String;
}

const initialState = [
  users: IUsers[]
]

const userReducer= (state = initialState, action) => {

  switch(action.type){
    case actions.GET_USERS:
      return {...state}

    default:
      return{...state}      
  }

};

export default userReducer;
