# Use an official Node.js image as the base
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app with Vite
RUN npm run build

# Use an Nginx image to serve the built React app
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy build output from previous stage
COPY --from=build /app/dist ./

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
