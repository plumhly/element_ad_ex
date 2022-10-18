import request from "./api";

export function userLogin(data) {
  return request({
    url: "/vue-element-admin/user/login",
    method: "post",
    data,
  });
}
