# Brainhub Website

## Project Overview

Brainhub is a cutting-edge technology startup building the next generation of decentralized applications powered by AI and smart contracts.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development Setup

Follow these steps to set up the development environment:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd brainhub-web

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Project Structure

- `/src/components/` - React components
- `/src/pages/` - Page components
- `/src/assets/` - Static assets
- `/public/` - Public assets

## Features

- Modern, responsive design
- Professional color scheme
- Smooth animations and transitions
- Mobile-first approach
- SEO optimized

## Quick Deployment

### Option 1: Simple Build & Deploy

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The 'dist' folder contains your deployable website
```

### Option 2: Automated Deployment

```bash
# Run the deployment script
./deploy.sh
```

### Option 3: Docker Deployment

```bash
# Build Docker image
docker build -t brainhub-website .

# Run container
docker run -p 80:80 brainhub-website
```

## Deployment Options

- **Static Hosting**: Upload `dist` folder to Netlify, Vercel, GitHub Pages
- **Traditional Hosting**: Upload `dist` contents to any web server
- **Docker**: Use the included Dockerfile for containerized deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.
