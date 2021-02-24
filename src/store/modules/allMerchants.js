const state = {
    merchantList: [
        {
            id: 1,
            merchantName: "Evan",
            merchantLogo: "deliman-logo.svg",
            merchantRatingValue: 1.0,
            reviewCount: 50,
        },
        {
            id: 2,
            merchantName: "Tanveer",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 2.0,
            reviewCount: 100,
        },
        {
            id: 3,
            merchantName: "Asif",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 4.4,
            reviewCount: 200,
        },
        {
            id: 4,
            merchantName: "Rois",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 5.0,
            reviewCount: 530,
        },
        {
            id: 5,
            merchantName: "Mou",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 4.5,
            reviewCount: 520,
        },
        {
            id: 6,
            merchantName: "Nowshad",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 3.1,
            reviewCount: 22,
        },
    ]
};

const getters = {
    getMerchantsList: (state) => state.merchantList
};

const actions = {};

const mutations = {};

export default {
    state, getters, actions, mutations
};