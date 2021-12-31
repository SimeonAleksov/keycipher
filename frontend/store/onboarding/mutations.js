export default {
  setToken(state, data) {
    state.accessToken = data.access;
    state.isValidLogin = true;
    this.$api.setToken(data.access, 'Bearer');
  },
  setValidLogin(state) {
    state.isValidLogin = false;
    state.accessToken = null;
  },
  registerUser(state, data) {
    state.userInfo = data;
  },
  setOtp(state, data) {
    state.otp = data;
  },
  validateOtp(state, data) {
    state.isOtpValid = data;
  },
}
