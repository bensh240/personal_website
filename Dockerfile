FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html/css
COPY ./css/*.css .

WORKDIR /usr/share/nginx/html/img
COPY ./img/* .


WORKDIR /usr/share/nginx/html/js
COPY ./js/*.js .
COPY *.js .

WORKDIR /usr/share/nginx/html/
COPY ./index.html .
