# aria2-nginx

Aria2 with Webui in Docker behind Nginx.

* Aria2: https://aria2.github.io/
* Webui: https://github.com/ziahamza/webui-aria2
* Nginx

At the time of creating this repository, Webui does not seem to be in active development (latest change 2 years ago) so I included build here.

# Usage

```yml
  aria2:
    build: .
    container_name: aria2
    restart: unless-stopped
    environment:
      TZ: Europe/Vienna
      RPC_SECRET: something_random
    volumes:
      - ./downloads:/downloads
    ports:
      - 80:80
```
## User settings

Set user and group, that will own downloaded files.

* PUID: 1000
* PGID: 1000

## rpc settings

Websocket secret can be adjusted. Create something random, using e.g. `openssl rand -base64 32`.

* RPC_SECRET: something_random

Keep in mind, that this **secret** will be shared with client. Additional layer of security would be needed

## aria2 settings

These environment variables, with their default values, are supported:

* MAX_OVERALL_DOWNLOAD_LIMIT: 0
* MAX_OVERALL_UPLOAD_LIMIT: 32K
* MAX_CONCURRENT_DOWNLOADS: 10
* MAX_CONNECTION_PER_SERVER: 16
* SPLIT: 10

More information [here](https://aria2.github.io/manual/en/html/aria2c.html).

## More aria2 settings

If you need to add more settings, you can add custom `aria2.conf` template.

```diff
    volumes:
      - ./downloads:/downloads
+      - ./conf/aria2.conf:/conf/aria2.conf.tmpl
```
