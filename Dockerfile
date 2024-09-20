# Use an official Node.js runtime as a parent image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port that the app runs on
EXPOSE 4000

# Command to run the app
CMD ["npm", "start"]
