#!/bin/bash

# Install dependencies
npm ci

# Build the application
npm run build

# Create a _redirects file for SPA routing
echo "/*    /index.html   200" > out/_redirects 