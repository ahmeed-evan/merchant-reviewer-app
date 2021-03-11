
import firebase from 'firebase';
const state = {

    userProfile: {
        userName: "",
        userPictureUrl: "",
        userEmail: "",
        token: ""
    },
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
                localStorage.setItem('token',user.refreshToken)
                commit("setUser", user);
                this.$router.push('/')
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
            userName: user.displayName,
            userPictureUrl: user.photoURL,
            userEmail: user.email,
            token: user.refreshToken,
        };
    },
    userLogout(state) {
        state.isLoggedIn = false;
        state.userProfile = {
            userName: "",
            userPictureUrl: "",
            userEmail: "",
            token: ""
        };
    }
};

export default {
    state, getters, actions, mutations
};

