FROM node:18
WORKDIR /app
COPY package*.json ./
COPY ./src ./src
# Copy local directories to the current local directory of our docker image (/app)
RUN npm install
EXPOSE 8080
CMD [ "node", "index.js" ]


