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
FROM alpine:3

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

COPY webui /webui
COPY aria2.conf /conf/aria2.conf.tmpl
COPY supervisord.conf /conf/supervisord.conf
COPY nginx.conf /etc/nginx/http.d/default.conf
COPY start.sh /conf/start.sh
COPY --from=builder /app/bin/api /conf/api

VOLUME ["/downloads"]

EXPOSE 8080

CMD ["/conf/start.sh"]
