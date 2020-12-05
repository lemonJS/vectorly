FROM node:14.15.1-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --production=false

COPY public src next-env.d.ts tsconfig.json /app/

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
