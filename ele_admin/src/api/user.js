import request from './api';

export function userLogin(name, pwd) {
    return request.post("user/login", {
        username: name,
        password: pwd,
    })
}