export default {
    get2fa: state => {
        return state.isValidLogin
    },
    getToken: state => {
        return state.accessToken;
    }
}