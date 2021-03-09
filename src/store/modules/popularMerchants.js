import axios from "axios";

const state = {
    popularMerchants: [
    ]
};

const getters = {
    getPopularMerchants: (state) => state.popularMerchants,
    
};

const actions = {
    async fetchAllPopularMerchants({ commit }) {
        const response = await axios.get('http://localhost:8080/merchant/get-popular-merchants');

        if (response != null) {
            console.log(response.data);
            commit("setPopularMerchants", response.data);
        } else {
            alert.message("Something went wrong! Please check your internet connection..");
        }
    }

};

const mutations = {
    setPopularMerchants: (state, popularMerchants) => state.popularMerchants = popularMerchants
};

export default {
    state, getters, actions, mutations
};