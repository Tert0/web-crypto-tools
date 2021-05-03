import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import AES_Encrypt from '../views/AES-Encrypt.vue'
import AES_Decrypt from '../views/AES-Decrypt.vue'
import Base64_Encode from '../views/Base64-Encode.vue'
import Base64_Decode from '../views/Base64-Decode.vue'
import Dec_Hex from '../views/Dec-Hex.vue'
import Hex_Dec from '../views/Hex-Dec.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aes-encrypt',
    name: 'AES Encrypt',
    component: AES_Encrypt
  },
  {
    path: '/aes-decrypt',
    name: 'AES Decrypt',
    component: AES_Decrypt
  },
  {
    path: '/base64-encode',
    name: 'Base64 Encode',
    component: Base64_Encode
  },
  {
    path: '/base64-decode',
    name: 'Base64 Decode',
    component: Base64_Decode
  },
  {
    path: '/dec-hex',
    name: 'Dec to Hex',
    component: Dec_Hex
  },
  {
    path: '/hex-dec',
    name: 'Hex to Dec',
    component: Hex_Dec
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
