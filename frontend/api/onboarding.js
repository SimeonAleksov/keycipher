import axios from "axios";


export const bareApiInstance = axios.create({
  baseURL: process.env.baseUrl,
})

export const publicApiInstance = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    'Authorization': `Bearer `
  }
})