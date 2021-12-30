import axios from "axios";


export const bareApiInstance = axios.create({
  baseURL: process.env.baseUrl,
})
