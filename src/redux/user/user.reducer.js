import userActionTypes from "./user.type";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case userActionTypes.FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case userActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
