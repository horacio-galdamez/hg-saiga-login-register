import * as types from './mutation-types';
import * as actions from './actions';

let token = localStorage.getItem('token');

const state = {
	token: token || null,
	isAuthenticated: false,
	currentUser: {}
}

const getters = {
	isAuthenticated: (state) => state.isAuthenticated,
	token: (state) => state.token,
	currentUser: (state) => state.currentUser
}

const mutations = {
	[types.SET_TOKEN] (state, params) {
		state.token = params.id;
		state.authErrorMsg = null;
	},
	[types.SET_USER] (state, params) {
		state.currentUser = params;
		state.isAuthenticated = true;
	}
}

export default{
	state,
	actions,
	getters,
	mutations
}
