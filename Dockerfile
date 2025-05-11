# Use a Node.js base image
FROM node:22

# Set the working directory
WORKDIR /var/task

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . ./

# Build the project
RUN npm run build:dev

# Expose the port used by serverless-offline
EXPOSE 3000

# Set the default command to run serverless-offline
CMD ["npx", "serverless", "offline", "--host", "0.0.0.0"]