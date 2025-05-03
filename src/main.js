import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "./assets/style.css"
import { validationMixin } from 'vuelidate';
import store from './store/store'

loadFonts()
const app = createApp(App);

app.use(router)
   .use(store)
   .use(vuetify) 
   .use(validationMixin)
   .mount('#app')
