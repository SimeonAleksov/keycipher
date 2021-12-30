export default {
  setToken(state, data) {
    state.token = data;
    state.isValidLogin = true;
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
