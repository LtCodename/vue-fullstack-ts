import { createApp } from "vue";
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

const routes = [
  { path: "/", component: MessagesPage },
  { path: "/NewMessage", component: NewMessage },
  { path: "/Message/:id", component: MessagePage },
  { path: "/Register", component: RegisterPage },
  { path: "/LoginPage", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use history mode for clean URLs
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).mount("#app");
