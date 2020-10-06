FROM node:alpine

WORKDIR /frontend

COPY package*.json ./
COPY tsconfig*.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn add global react-scripts@3.4.1 -g

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
