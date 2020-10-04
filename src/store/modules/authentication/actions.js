import * as types from './mutation-types';

export const getToken = async ({ commit, dispatch }, payload) => {
    localStorage.setItem('token', payload.apiToken);
    commit(types.SET_TOKEN, payload);
    await dispatch('getUser', payload);
};

export const getUser = ({ commit }, payload) => {
    localStorage.setItem('userId', payload.id);
    let user = payload.id;
    commit(types.SET_USER, user);
    return user;
};

export const registerUser = ({ commit, dispatch }, payload) => {
    localStorage.setItem('token', payload.apiToken);
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