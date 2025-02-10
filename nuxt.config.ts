// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/', // Changed to default Nuxt assets directory
    cdnURL: process.env.NODE_ENV === 'production' 
      ? 'https://groot-pwa-app-1.vercel.app' 
      : ''
  },

  // Add nitro configuration
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // Router configuration
  router: {
    options: {
      strict: true
    }
  },
  // Add vite configuration
  vite: {
    build: {
      assetsDir: '_nuxt'
    }
  },
  // PWA module configuration
  pwa: {
    registerType: 'autoUpdate',

    manifest: {
      name: 'Nuxt PWA App',
      short_name: 'NuxtPWA',
      description: 'A simple Nuxt PWA example',
      theme_color: '#4DBA87',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        { src: '/pwa-assets/pwa-64x64.png', sizes: '64x64', type: 'image/png' },
        {
          src: '/pwa-assets/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-assets/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa-assets/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      // related_applications: [
      //   {
      //     platform: 'webapp', // The platform on which the application can be found
      //     url: 'https://nuxt-pwa-2-woad.vercel.app/manifest.json',
      //   },
      // ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: 'module',
    },
  },

});
