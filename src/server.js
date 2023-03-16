/*const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Proxy API requests to our backend
  server.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});*/
const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const app = express()

// Proxy requests to the Next.js app running on port 3001
app.use('/next', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }))

// Proxy requests to the React app running on port 3000
app.use('/', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }))

nextApp.prepare().then(() => {
  app.all('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(3002, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3002')
  })
})


