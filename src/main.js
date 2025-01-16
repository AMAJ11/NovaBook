import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "./assets/style.css"
import { validationMixin } from 'vuelidate';


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(validationMixin)
  .mount('#app')
