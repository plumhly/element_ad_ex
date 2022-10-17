import Vue from "vue";
import Vuex from "vuex";

const fileLoader = require.conntext("./moudle", true, /.js$/);

[].reduce(callbackfn);

const modules = fileLoader.keys().reduce((preContainer, current) => {
  let value = fileLoader(current).default;
  let key = /.\/modules\/(.*).js$/.exec(current)[1];
  preContainer[key] = value;

  return preContainer;
}, {});

Vue.use(Vuex);

const store = Vuex.Store(modules);

export default store;
