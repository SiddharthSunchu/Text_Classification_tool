FROM node:8-alpine

# Create app directory
WORKDIR /src

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
