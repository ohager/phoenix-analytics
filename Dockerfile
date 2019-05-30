ARG gh_token
FROM node:alpine
WORKDIR /srv/app
COPY . .
RUN yarn install
EXPOSE 443
ENV NODE_ENV=production, GH_TOKEN=${gh_token}
RUN yarn build
CMD [ "node", "./scripts/create_now.js" ]
CMD [ "node", "server.js" ]
