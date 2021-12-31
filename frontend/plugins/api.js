export default function ({ $axios, store }, inject) {
    const api = $axios.create({})
    api.setBaseURL(process.env.baseUrl);
    api.setToken(store.state.onboarding.accessToken);
    inject('api', api)
}
