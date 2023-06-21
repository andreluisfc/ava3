/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import { initDb } from './firebase'
import pinia from '../store'
import router from '../router'

export function registerPlugins (app) {
  initDb()
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)

}
