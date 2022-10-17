import userLogin from "@/api/user";

module.exports = {
  actions: {
    async login({ commit }, payload) {
      let data = await userLogin(payload.name, payload.pwd);
      commit("login");
    },
  },
};
