FROM node:14.15.1

WORKDIR /app

ENV NODE_ENV=production

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --production=false

COPY . /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
