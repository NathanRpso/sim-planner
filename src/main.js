import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n } from 'vue-i18n'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import store from './store'
import './styles/main.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#1976d2',
          secondary: '#37474f',
          background: '#1a1a2e',
          surface: '#16213e',
        }
      }
    }
  }
})

const i18n = createI18n({
  locale: 'en',
  messages: { en: {} }
})

createApp(App).use(store).use(vuetify).use(i18n).mount('#app')
