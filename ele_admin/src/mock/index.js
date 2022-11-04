/*
 * @Author: Plum
 * @Date: 2022-10-30 22:51:31
 * @LastEditors: Plum
 * @LastEditTime: 2022-10-30 22:58:06
 * @Description:
 */
const Mock = require('mockjs')
const { param2Obj } = require('./utils')

const user = require('./user')

const mocks = [...user]

function mockXHR() {
  Mock.mockXHR
}
