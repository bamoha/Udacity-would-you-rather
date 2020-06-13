import { GET_USERS_SUCCESS, GET_USERS_FAILED, AUTHENTICATE_USER, LOGOUT } from "../types/index";
import { _getUsers } from "../../api/index";

export const getUsersAction = () => {
    return async dispatch => {
        try {
            const users = await _getUsers();
            dispatch({ type: GET_USERS_SUCCESS, payload: users });
        }
        catch(error) {
            dispatch({type: GET_USERS_FAILED, error });
        }
    }
};

export const authenticateUser = (payload) => ({
    type: AUTHENTICATE_USER,
    payload
});

export const logoutUser = () => ({
    type: LOGOUT
});