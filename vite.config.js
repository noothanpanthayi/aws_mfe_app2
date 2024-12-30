import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"remote_app",
      filename:"remoteEntry.js",
      exposes:{
        "./App":"./src/App"
      },
      shared:["react", "react-dom"]
    }),
  ],
  base:'/page2/',
  build:{
    modulePreload:false,
    target:"esnext",
    minify:false,
    cssCodeSplit:false
  },
  server: { 
    proxy: {
      '/page1/assets': { // Adjust the path if necessary
        target: 'http://localhost:6002', 
        changeOrigin: true 
      }
    },
    cors: { 
    origin: 'http://3.83.250.40',  
    methods: ['GET', 'POST', 'OPTIONS'], 
    allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'] 
    },
    middlewareMode: 'html',
    configureServer: (server) => { 
      server.middlewares.use((req, res, next) => { 
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization'); next(); 
      });
    }
  }
})
