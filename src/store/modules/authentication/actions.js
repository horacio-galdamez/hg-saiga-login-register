import * as types from './mutation-types';

export const getUser = ({ commit }, payload) => {
    localStorage.setItem('userId', payload.username);
    let user = payload;
    commit(types.SET_USER, user);
    return user;
};

export const registerUser = ({ commit, dispatch }, payload) => {
    localStorage.setItem('token', payload.token);
    commit(types.SET_TOKEN, payload);    
    dispatch('getUser', payload);
    return 200;
};


export const logout = (() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
});

export const setCurrentUser = ({ commit }, value) => {
	commit(types.SET_USER, value);
};