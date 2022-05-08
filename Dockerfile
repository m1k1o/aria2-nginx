#
# STAGE 1: build executable binary
#
FROM golang:1.18-buster as builder
WORKDIR /app

COPY api/ ./
RUN go get -v -t -d .; \
    export CGO_ENABLED=0; \
    go build -o bin/api main.go;

#
# STAGE 2: build a small image
#
FROM alpine:latest

ENV PUID 1000
ENV PGID 1000

# Default settings
ENV MAX_OVERALL_DOWNLOAD_LIMIT 0
ENV MAX_OVERALL_UPLOAD_LIMIT 32K
ENV MAX_CONCURRENT_DOWNLOADS 10
ENV MAX_CONNECTION_PER_SERVER 16
ENV MIN_SPLIT_SIZE 10M
ENV SPLIT 10

RUN apk add --no-cache aria2 supervisor nginx s6

COPY --from=builder /app/bin/api /conf/api

ADD webui /webui
ADD aria2.conf /conf/aria2.conf.tmpl
ADD supervisord.conf /conf/supervisord.conf
ADD nginx.conf /etc/nginx/http.d/default.conf
ADD start.sh /conf/start.sh

VOLUME ["/downloads"]

EXPOSE 8080

CMD ["/conf/start.sh"]
