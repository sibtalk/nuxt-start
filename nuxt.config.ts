// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", 'nuxt-easy-lightbox'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
        prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Базовое тело шаблона IP-55:dev' },
        { property: 'og:image', content: '/files/img/ip55_ogg.jpg' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes:'180x180', href: '/fav/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/fav/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/fav/favicon-16x16.png' },
        { rel: 'manifest', href: '/fav/site.webmanifest' },
        ],
      style: [
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // { children: 'JavaScript is required' }
      ]
    }
  },
  compatibilityDate: "2024-08-30"
})