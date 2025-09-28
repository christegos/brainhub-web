# Brainhub Website Deployment Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:8090`

### 3. Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### 4. Preview Production Build

```bash
npm run preview
```

## Deployment Options

### Option 1: Static Hosting (Recommended)

Deploy the `dist` folder to any static hosting service:

**Netlify:**

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

**Vercel:**

1. Connect your repository to Vercel
2. Framework preset: Vite
3. Deploy

**GitHub Pages:**

1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Option 2: Traditional Web Hosting

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

### Option 3: Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Environment Configuration

### Production Build Optimization

- Minified JavaScript and CSS
- Optimized images
- Code splitting for better performance
- No source maps in production

### SEO Configuration

- Meta tags optimized for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap ready (add sitemap.xml to public folder)

## Performance Features

- Lazy loading for better initial load times
- Optimized bundle splitting
- Modern browser support
- Responsive design for all devices

## Security

- No sensitive data in client-side code
- HTTPS recommended for production
- Content Security Policy headers recommended

## Monitoring

Consider adding:

- Google Analytics
- Error tracking (Sentry)
- Performance monitoring
- Uptime monitoring

## Support

For deployment issues, check:

1. Build logs for errors
2. Browser console for runtime errors
3. Network tab for failed requests
4. Ensure all routes work (SPA routing)
