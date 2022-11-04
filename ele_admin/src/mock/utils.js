/*
 * @Author: Plum
 * @Date: 2022-10-30 22:24:42
 * @LastEditors: Plum
 * @LastEditTime: 2022-10-30 22:57:22
 * @Description:
 */

function param2Obj(url) {
  // urlencode 会把 空格 变成+
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }

  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index != -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })

  return obj
}

module.exports = {
  param2Obj,
}
