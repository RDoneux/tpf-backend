FROM public.ecr.aws/lambda/nodejs:16

# Set the working directory
WORKDIR /var/task

# Copy package.json and package-lock.json for dependency installation
COPY ../package.json ../package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . ./

# Build the project using esbuild
RUN npm run build:dev

# Set the handler
CMD ["dist/index.handler"]