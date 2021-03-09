FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm ci --only=production
RUN npm install -g sequelize-cli

# Bundle app source
COPY . .

# Start app
EXPOSE 3000
CMD ["node", "./bin/www"]