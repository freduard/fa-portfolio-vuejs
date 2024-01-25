import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import Unicon from 'vue-unicons'
import { uniEstate, uniFilesLandscapes, uniAward, uniPhoneVolume, uniInstagram, uniLinkedinAlt, uniGithubAlt, uniAngleDown } from 'vue-unicons/dist/icons'
Unicon.add([uniEstate, uniFilesLandscapes, uniAward, uniPhoneVolume, uniInstagram, uniLinkedinAlt, uniGithubAlt, uniAngleDown])

createApp(App).use(Unicon).mount('#app')
