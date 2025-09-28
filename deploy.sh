#!/bin/bash

# Brainhub Website Deployment Script

echo "🚀 Starting Brainhub website deployment..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run linting
echo "🔍 Running linting..."
npm run lint

# Type checking
echo "🔧 Type checking..."
npm run type-check

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Production files are in the 'dist' folder"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Upload 'dist' folder contents to your web server"
    echo "2. Use Docker: docker build -t brainhub-website . && docker run -p 80:80 brainhub-website"
    echo "3. Deploy to Netlify/Vercel/GitHub Pages"
    echo ""
    echo "📖 See DEPLOYMENT.md for detailed instructions"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
