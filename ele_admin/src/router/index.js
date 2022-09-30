const Login = () => import("@/views/login/index");
const Main = () => import("@/views/Main");

const routes = [{
    path: "/",
    redirect: "/login"
}, {
    path: "/login",
    component: Login,
}, {
    path: "/main",
    component: Main
}];

export default routes;