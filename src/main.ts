import { createApp } from "vue";
// @ts-ignore
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import MessagesPage from "./components/MessagesPage.vue";
import NewMessage from "./components/NewMessage.vue";
import MessagePage from "./components/MessagePage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import LoginPage from "./components/LoginPage.vue";
import store from "./store";

const routes = [
  { path: "/", component: MessagesPage },
  { path: "/new-message", component: NewMessage },
  { path: "/message/:id", component: MessagePage },
  { path: "/register", component: RegisterPage },
  { path: "/login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).use(store).mount("#app");
