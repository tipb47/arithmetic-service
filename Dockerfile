# Use a specific version of node on Alpine for smaller image size
FROM node:20.11.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Optionally add necessary system dependencies
# RUN apk add --no-cache make gcc g++ python3

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of your application source code
COPY . .

# Start the application
CMD ["npm", "start"]
