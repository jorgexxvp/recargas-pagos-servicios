import { createProxyMiddleware } from "http-proxy-middleware";


export default createProxyMiddleware({
  target: 'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com',
  changeOrigin: true,
  pathRewrite: {
    '^/getActualBalance': '/getActualBalance',
    '^/getProviders': '/getProviders',
  },
});
