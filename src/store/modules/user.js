import firebase from 'firebase';
const state = {

    userProfile: {},
    isLoggedIn: false
};


const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    getUserProfile: (state) => state.userProfile
};


const actions = {
    async loginWithGoogle({ commit }) {
        const provider = new firebase.auth.GoogleAuthProvider();

        await firebase.auth().signInWithPopup(provider);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                commit("setUser", user);
            }
        });
    },

    async logout({ commit }) {
        await firebase.auth().signOut()
            .then(() => {
                commit("userLogout");
            }).catch((err) => {
                alert(err.message);
            });
    }

};


const mutations = {
    setUser(state, user) {
        state.isLoggedIn = true;
        state.userProfile = {
            name: user.displayName,
            picture: user.photoURL
        };
    },
    userLogout(state) {
        state.isLoggedIn = false;
        state.userProfile = {};
    }
};

export default {
    state, getters, actions, mutations
};

