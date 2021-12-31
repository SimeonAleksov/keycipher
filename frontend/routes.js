import Vue from 'vue';
import Router from 'vue-router';
import Index from 'pages/index';
import LoginView from "./pages/onboarding/login";
import Layout from "./layouts/default";
import Register from "./pages/onboarding/register";
import Password from "./pages/onboarding/reset-password";
import OTPPage from './pages/onboarding/2fa'
import OTPActivation from './pages/onboarding/otp'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: Index,
    },
    {
      path: 'onboarding',
      name: 'onboarding',
      component: Layout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView,
        },
        {
          path: '/register',
          name: 'login',
          component: Register,
        },
        {
          path: '/reset-password',
          name: 'reset-password',
          component: Password,
        },
        {
          path: '/2fa',
          name: '2fa',
          component: OTPPage,
        },
        {
          path: '/otp',
          name: 'otp',
          component: OTPActivation,
        },
      ]
    }
  ]
})
