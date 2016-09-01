FROM mhart/alpine-node:base-6

MAINTAINER Duc Dao <duc@ego-pulse.com>

RUN apk -U upgrade && \
    apk add --no-cache --update \
    curl \
    unzip \
    tar \
    gzip \
    ca-certificates && \
    update-ca-certificates --fresh && \
    rm -rf /var/cache/apk/* && \
    rm -rf /tmp/* && \
    curl -L \
    https://github.com/rancher/rancher-compose/releases/download/v0.8.6/rancher-compose-linux-amd64-v0.8.6.tar.gz \
    -o rancher-compose.tar.gz && \
    tar zxvf rancher-compose.tar.gz --strip-components 2 && \
    rm -rf rancher-compose.tar.gz && \
    mv rancher-compose /usr/bin/rancher-compose && \
    chmod +x /usr/bin/rancher-compose

ADD . /app

EXPOSE 9999

CMD node /app/server.js