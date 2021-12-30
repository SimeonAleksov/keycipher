import { bareApiInstance } from "../../api/onboarding";

export default {
  async getToken(context, { username, password }) {
    const params = {
      username: username,
      password: password,
    }
    const { data } = await bareApiInstance.post('/auth/jwt/create/', params);
    context.commit('setToken', data)
  },
  async register(context, { data }) {
    const { response } = await bareApiInstance.post('/users/', data);
    context.commit('registerUser', response)
  },
  async login2fa(context, { data }) {
    const { response } = await bareApiInstance.post('/auth/totp/create/', data);
    context.commit('setOtp', response)
  },
  async verify2fa(context, { data }) {
    const { response } = await bareApiInstance.post('/auth/totp/login/', data);
    context.commit('validateOtp', response)
  },
}
