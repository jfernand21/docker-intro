FROM debian:stable

LABEL maintainer="JJF"

RUN apt-get update &&\
    apt-get -y upgrade &&\
    apt-get -y install nodejs npm

COPY . /app

EXPOSE 3000

WORKDIR /app
RUN npm install
ENTRYPOINT npm start 
