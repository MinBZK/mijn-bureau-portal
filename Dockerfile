FROM node:20 AS build

WORKDIR /app

COPY package.json package-lock.json webpack.config.js ./
COPY src/ ./src/

RUN npm install

ENV NODE_ENV=production

RUN npm run build

FROM nginx:1.27.3

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]