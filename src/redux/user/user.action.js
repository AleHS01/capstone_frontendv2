import axios from "axios";
import userActionTypes from "./user.type";

export const fetchUser = (payload) => ({
  type: userActionTypes.FETCH_USER,
  payload: payload,
});

export const logoutUser = () => ({
  type: userActionTypes.LOGOUT_USER,
});

export const loginSuccess = (user) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user,
});

// export const fetchUserThunk = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/user", {
//         withCredentials: true,
//       });
//       dispatch(fetchUser(response.data));
//       console.log("Response: ", response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
export const fetchUserThunk = () => {
  console.log("got to the thunk");
  return async (dispatch, getState) => {
    // Check if the user is logged in
    const isLoggedIn = getState().user.user !== null;
    if (!isLoggedIn) {
      console.log("not logged :(");
      return; // Do not fetch user data if not logged in
    }

    try {
      const response = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      dispatch(fetchUser(response.data));
      console.log("Response: ", response);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUserThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8080/api/logout");
      dispatch(logoutUser());
      console.log(response.data); // Assuming the backend sends a "Logout successful" message
      // Add any additional logic after successful logout if needed
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUserThunk = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        credentials,
        {
          withCredentials: true,
        }
      );
      const user = response.data; // Assuming the login API response contains the user data
      dispatch(loginSuccess(user));
      // Additional logic after successful login
    } catch (error) {
      console.log(error);
    }
  };
};
