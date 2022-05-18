FROM nginx:1.13-alpine

WORKDIR /usr/share/nginx/html/js
COPY ./js/ ./

WORKDIR /usr/share/nginx/html/css
COPY ./css/ ./

WORKDIR /usr/share/nginx/html
COPY ./index.html .

WORKDIR /usr/share/nginx/html/img
COPY ./img/ ./


