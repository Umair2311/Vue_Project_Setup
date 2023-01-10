import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiFacebook,
  BiGithub,
  BiLinkedin,
  FaTwitterSquare,
} from "oh-vue-icons/icons";

addIcons(BiFacebook, BiGithub, BiLinkedin, FaTwitterSquare);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
