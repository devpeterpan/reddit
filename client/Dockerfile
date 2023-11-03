FROM node:16-alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./ ./

ENV NODE_ENV development

RUN npm run build:dev

CMD ["npm", "run", "dev"]
