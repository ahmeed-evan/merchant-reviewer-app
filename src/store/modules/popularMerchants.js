const state = {
    popularMerchantList: [
        {
            id: 1,
            merchantName: "p_Evan",
            merchantLogo: "deliman-logo.svg",
            merchantRatingValue: 1.0,
            reviewCount: 50,
        },
        {
            id: 2,
            merchantName: "p_Tanveer",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 2.0,
            reviewCount: 100,
        },
        {
            id: 3,
            merchantName: "p_Asif",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 4.4,
            reviewCount: 200,
        },
        {
            id: 4,
            merchantName: "p_Rois",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 5.0,
            reviewCount: 530,
        },
        {
            id: 5,
            merchantName: "p_Mou",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 4.5,
            reviewCount: 520,
        },
        {
            id: 6,
            merchantName: "p_Nowshad",
            merchantLogo: "../assets/deliman-logo.svg",
            merchantRatingValue: 3.1,
            reviewCount: 22,
        },
    ]
};

const getters = {
    getPopularMerchantList: (state) => state.popularMerchantList
};

const actions = {};

const mutations = {};

export default {
    state, getters, actions, mutations
};