/*
 * @Author: Plum
 * @Date: 2022-10-12 12:51:41
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 17:17:19
 * @Description:
 */
import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
