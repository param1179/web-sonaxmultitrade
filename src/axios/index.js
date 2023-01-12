import Axios from 'axios'
import { QueryClient } from 'react-query'
//config
import { BASE_URL } from '../config'
//helpers
import { TokenLS } from '../helpers'

const axios = Axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})

const exit = () => {
  TokenLS.removeToken()
  window.location.pathname = '/'
}

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

axios.interceptors.request.use(
  (config) => {
    const token = TokenLS.getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    const originalRequest = error.config

    if (error.response.status === 400) {
      return Promise.reject(error.response.data)
    } else if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers.Authorization = 'Bearer ' + token
            return axios(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true

      return new Promise(function (resolve, reject) {
        Axios.get(`${BASE_URL}auth/refresh`)
          .then(({ data }) => {
            const token = data.data.accessToken
            TokenLS.setToken(token)
            axios.defaults.headers.common.Authorization = 'Bearer ' + token
            originalRequest.headers.Authorization = 'Bearer ' + token
            processQueue(null, token)
            resolve(axios(originalRequest))
          })
          .catch((err) => {
            processQueue(err, null)
            reject(err)
            exit()
          })
          .finally(() => {
            isRefreshing = false
          })
      })
    } else if (error.response.status === 403) {
      exit()
    } else if (error.response.status === 500) {
      alert('Sorry the server is not available right now please try later')
    }

    return Promise.reject(error)
  },
)

export default axios

export const queryClient = new QueryClient()
