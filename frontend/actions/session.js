import * as SessionUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = ({
    type: LOGOUT_CURRENT_USER
});

export const login = user => dispatch => {
    return SessionUtil.postSession(user).then(user=>dispatch(receiveCurrentUser(user)));
};

export const createNewUser = user => dispatch => {
    return SessionUtil.postUser(user).then(user=> dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
    return SessionUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));
};

