// @ts-ignore
// TODO: why "vuex" is not found?
import { createStore } from "vuex";
import axios from "axios";

interface State {
  messages: Message[];
  token: string;
}

interface Message {
  user: string;
  text: string;
}

interface AuthData {
  userName: string;
  password: string;
}

const store = createStore({
  state: {
    messages: [],
    token: localStorage.getItem("token") || "",
  },
  mutations: {
    updateMessages(state: State, messages: Message[]) {
      state.messages = messages;
    },
    postNewMessage(state: State, newMessage: Message) {
      state.messages.push(newMessage);
    },
    auth(state: State, token: string) {
      state.token = token;
    },
    logout(state: State) {
      state.token = "";
      localStorage.clear();
    },
  },
  actions: {
    // @ts-ignore
    // TODO: add a proper type for the commit function
    async getMessages({ commit }) {
      const messages = (await axios.get("http://localhost:3000/messages")).data;
      commit("updateMessages", messages);
    },
    // @ts-ignore
    async postNewMessage({ commit }, newMessage: Message) {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common.Authorization = token;
      const msg: Message = (
        await axios.post("http://localhost:3000/messages", {
          message: newMessage,
        })
      ).data;
      commit("postNewMessage", msg);
    },
    async getMessage(_: any, id: string) {
      return axios.get(`http://localhost:3000/messages/${id}`);
    },
    // @ts-ignore
    async register({ commit }, authData: AuthData) {
      const token = (
        await axios.post("http://localhost:3000/register", authData)
      ).data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common.Authorization = token;
      commit("auth", token);
    },
    // @ts-ignore
    async login({ commit }, authData: AuthData) {
      const token = (await axios.post("http://localhost:3000/login", authData))
        .data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common.Authorization = token;
      commit("auth", token);
    },
  },
});

export default store;
