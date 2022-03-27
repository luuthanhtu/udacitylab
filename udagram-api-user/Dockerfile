FROM node:12-alpine
ARG MAX_OLD_SPACE_SIZE=4096
ARG NPM_TOKEN
ENV NODE_OPTIONS=--max-old-space-size=${MAX_OLD_SPACE_SIZE}
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./
RUN npm ci 
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "prod" ]