/*
 * @Author: Plum
 * @Date: 2022-10-12 12:51:32
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 17:17:49
 * @Description:
 */
import request from './api'

export function userLogin(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}
