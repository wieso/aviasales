FROM node:10.14 as build

COPY . .
RUN yarn install && yarn build

FROM nginx:1.15 as finnaly

COPY --from=build ./public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g daemon off;"]