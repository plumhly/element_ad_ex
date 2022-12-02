/*
 * @Author: Plum
 * @Date: 2022-09-29 12:56:31
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 17:00:02
 * @Description:
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
