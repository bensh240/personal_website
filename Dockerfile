FROM nginx:1.13-alpine

WORKDIR /usr/share/nginx/html/img
COPY ./img/* ./

WORKDIR /usr/share/nginx/html/js
COPY ./js/*.js ./

WORKDIR /usr/share/nginx/html
COPY my_site_js.js .

