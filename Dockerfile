FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN yarn dev
ADD . .
ENV NODE_ENV production
RUN yarn build
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000
