import { bareApiInstance, publicApiInstance } from "../../api/onboarding";
import Vue from 'vue'

export default {
  async getToken(context, { username, password }) {
    const params = {
      username: username,
      password: password,
    }
    await this.$bareApi.post('/auth/jwt/create/', params)
        .then(response => {
            const { data } = response
            context.commit('setToken', data)
        })
        .catch(error => {
          console.log(error)
        })
  },
  async register(context, data) {
    await this.$bareApi.post('/auth/users/', data)
        .then(response => {
            const { regData } = response
            context.commit('registerUser', regData)
            let params = {
                username: data.username,
                password: data.password,
            }
            this.$bareApi.post('/auth/jwt/create/', params)
        })
        .catch(error => {})
  },
  async login2fa(context, { data }) {
    const { response } = await bareApiInstance.post('/auth/totp/create/', data);
    context.commit('setOtp', response)
  },
  async verify2fa(context, data) {
    let params = {
      token: data
    }
    await this.$api.post('/users/totp/login/', params)
        .then(response => {
            this._vm.$vToastify.success("Successfully logged in!");
            context.commit('validateOtp', response)
        })
        .catch(error => {
            this._vm.$vToastify.error(error.response.data)
        })
  },
  async cancelLogin(context) {
    context.commit('setValidLogin');
  }
}
