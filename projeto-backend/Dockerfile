FROM node:alpine

WORKDIR /backend

COPY package*.json ./
COPY tsconfig*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3333

CMD [ "yarn", "dev" ]