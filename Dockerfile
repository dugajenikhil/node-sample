FROM node:10.15-alpine

ENV APP_ROOT /node-sample

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
# RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "npm", "run", "start" ]
