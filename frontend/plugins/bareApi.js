export default function ({ $axios, store }, inject) {
    const bareApi = $axios.create({})
    bareApi.setBaseURL(process.env.baseUrl);
    inject('bareApi', bareApi)
}