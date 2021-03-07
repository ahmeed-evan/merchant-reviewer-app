import axios from "axios";

const state = {
    merchantList: [
    ]
};

const getters = {
    getMerchantsList: (state) => state.merchantList,
    getMerchantByMerchantId: (state) => (id) => {
        return state.merchantList.find(merchant => merchant.merchantId === id);
    }
};

const actions = {
    async fetchAllMerchants({ commit }) {
        const response = await axios.get('http://localhost:8080/merchant/get-merchants');

        if (response != null) {
            console.log(response.data);
            commit("setMerchants", response.data);
        } else {
            alert.message("Something went wrong! Please check your internet connection..");
        }
    }

};

const mutations = {
    setMerchants: (state, merchants) => state.merchantList = merchants
};

export default {
    state, getters, actions, mutations
};