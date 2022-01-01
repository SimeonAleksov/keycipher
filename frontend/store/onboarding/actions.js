export default {
  getToken(context, { username, password }) {
    const params = {
      username: username,
      password: password,
    }
    return new Promise((resolve, reject) => {
      this.$bareApi.post('/auth/jwt/create/', params)
          .then(response => {
              const {data} = response
              context.commit('setToken', data)
              resolve(response)
          })
          .catch(error => {
              this._vm.$vToastify.error({statusText: error.response.data.detail, status: "Error"})
              reject(error)
          })
      })
  },
  async register(context, data) {
      return new Promise((resolve, reject) => {
          this.$bareApi.post('/auth/users/', data)
              .then(response => {
                  const { regData } = response
                  context.commit('registerUser', regData)
                  let params = {
                      username: data.username,
                      password: data.password,
                  }
                  this.$bareApi.post('/auth/jwt/create/', params)
                      .then(response => {
                          let config = {
                              headers: {
                                  Authorization: `Bearer ${response.data.access}`
                              }
                          }
                          this.$api.get('/users/totp/create/', config)
                              .then(response => {
                                  context.commit('setOtp', response.data)
                                  resolve(response)
                              })
                              .catch(error => {
                                  reject(error)
                              })
                      })
                      .catch(error => {
                          console.log(error)
                      })
              })
              .catch(error => {
                  //TODO Create a wrapper around error response
                  this._vm.$vToastify.error({
                      statusText: error.response.data.detail,
                      status: "Error"
                  })
              })
      })
  },
  async login2fa(context, { data }) {
    const { response } = await this.$bareApi.post('/auth/totp/create/', data);
    context.commit('setOtp', response)
  },
  verify2fa(context, data) {
    let params = {
      token: data
    }
    return new Promise((resolve, reject) => {
        this.$api.post('/users/totp/login/', params)
            .then(response => {
                this._vm.$vToastify.success("Successfully logged in!");
                context.commit('validateOtp', response)
                resolve(response)
            })
            .catch(error => {
                this._vm.$vToastify.error(error.response.data)
                reject(error)
            })
    })
  },
  async cancelLogin(context) {
    context.commit('setValidLogin');
  }
}
