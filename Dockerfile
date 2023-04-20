##### Ambiente de Build
FROM node:latest as react-build

ARG BACKEND_URL=url

WORKDIR /app
COPY . ./

RUN apt-get update && apt-get -y --no-install-recommends install gettext-base && rm -rf /var/lib/apt/lists/*

RUN envsubst < src/App.js > src/App.js.tmp && mv src/App.js.tmp src/App.js

RUN yarn

RUN yarn build

##### Imagem do Frontend
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
