export default function ({ $axios, store }, inject) {
    const api = $axios.create({})
    api.setBaseURL(process.env.baseUrl);
    inject('api', api)
}