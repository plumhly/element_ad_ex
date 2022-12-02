/*
 * @Author: Plum
 * @Date: 2022-09-29 12:56:31
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 11:33:22
 * @Description:
 */
/*
 * @Author: Plum
 * @Date: 2022-09-29 12:56:31
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 11:30:59
 * @Description:
 */
const Login = () => import('@/views/login/index')
const Main = () => import('@/views/Main')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main
  }
]

export default routes
