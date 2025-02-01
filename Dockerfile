FROM node:20 as build

WORKDIR /app

COPY package.json package-lock.json webpack.config.js ./
COPY src/ ./src/

RUN npm install
RUN npm run build

FROM nginx:1.27.3

COPY --from=build /app/src /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]