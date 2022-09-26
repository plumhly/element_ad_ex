const Login = () => import("@/views/login/index");

const routes = [{
    path: "/",
    redirect: "/login"
}, {
    path: "/login",
    component: Login,
}];

export default routes;