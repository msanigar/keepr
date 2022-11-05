
FROM node:alpine AS keepr

WORKDIR /usr/src/keepr

COPY app/ ./app/
RUN cd app && npm install && npm run build

COPY server/ ./server/
RUN cd server && npm install

WORKDIR /usr/src/keepr/app

EXPOSE 8080
EXPOSE $PORT

CMD ["npm", "run" ,"start"]