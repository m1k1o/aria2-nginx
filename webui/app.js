!(function(e) {
  function t(t) {
    for (var a, r, s = t[0], l = t[1], c = t[2], u = 0, p = []; u < s.length; u++)
      (r = s[u]), o[r] && p.push(o[r][0]), (o[r] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    for (d && d(t); p.length; ) p.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], a = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== o[l] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var a = {},
    o = { 0: 0 },
    i = [];
  function r(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = a),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var d = l;
  i.push([29, 1]), n();
})([
  ,
  ,
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.services.alerts", ["webui.services.deps"]).factory("$alerts", [
      "$_",
      function(e) {
        var t = [];
        return {
          addAlert: function() {
            var n = Array.prototype.slice.call(arguments, 0);
            setTimeout(function() {
              e.each(t, function(e) {
                e.apply({}, n);
              });
            }, 0);
          },
          addAlerter: function(e) {
            t.push(e);
          },
          log: function(e) {
            this.addAlert(e, "info");
          }
        };
      }
    ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.services.base64", []).factory("$base64", [
      function() {
        var e = {},
          t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = {
            indexOf: function(e) {
              return e.charCodeAt(0);
            },
            charAt: String.fromCharCode
          };
        function a(e, t, n, a, o, i) {
          var r,
            s,
            l,
            c = 0,
            d = "",
            u = 1,
            p = 1,
            h = (e = String(e)).length;
          for (r = 0; r < h || (!t && p > 1); r += 1) {
            if (((c *= o), (u *= o), r < h)) {
              if ((s = n.indexOf(e.charAt(r))) <= -1 || s >= o) throw new RangeError();
              (p *= o), (c += s);
            }
            for (; u >= i; )
              (u /= i), p > 1 && ((l = c), (c %= u), (d += a.charAt((l - c) / u)), (p /= i));
          }
          return d;
        }
        return (
          (e.btoa = function(e) {
            return (e = a(e, !1, n, t, 256, 64)) + "====".slice(e.length % 4 || 4);
          }),
          (e.atob = function(e) {
            var o;
            for (o = (e = String(e).split("=")).length - 1; o >= 0; o -= 1) {
              if (e[o].length % 4 == 1) throw new RangeError();
              e[o] = a(e[o], !0, t, n, 64, 256);
            }
            return e.join("");
          }),
          e
        );
      }
    ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.configuration", [])
      .constant("$name", "Aria2 WebUI")
      .constant(
        "$titlePattern",
        "active: {active} - waiting: {waiting} - stopped: {stopped} ??? {name}"
      )
      .constant("$pageSize", 11)
      .constant("$authconf", {
        host: location.protocol.startsWith("http") ? location.hostname : "localhost",
        path: "/jsonrpc",
        port: 6800,
        encrypt: !1,
        auth: {},
        directURL: ""
      })
      .constant("$enable", {
        torrent: !0,
        metalink: !0,
        sidebar: { show: !0, stats: !0, filters: !0, starredProps: !0 }
      })
      .constant("$starredProps", [
        "dir",
        "conf-path",
        "auto-file-renaming",
        "max-connection-per-server"
      ])
      .constant("$downloadProps", [
        "header",
        "http-user",
        "http-passwd",
        "pause",
        "dir",
        "max-connection-per-server"
      ])
      .constant("$globalTimeout", 1e3).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a),
      i = n(1),
      r = n.n(i),
      s = n(6),
      l = n.n(s);
    t.a = o.a
      .module("webui.services.deps", [])
      .value("$", r.a)
      .value("$_", l.a)
      .value("$json", JSON).name;
  },
  ,
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.services.errors", []).value("$getErrorStatus", function(e) {
      switch ((e -= 1)) {
        case 0:
          return "download was unsuccessful";
        case 1:
          return "unknown error occurred";
        case 2:
          return "time out occurred";
        case 3:
          return "resource was not found";
        case 4:
          return 'aria2 saw the specified number of "resource not found" error. See --max-file-not-found option';
        case 5:
          return "download aborted because download speed was too slow. See --lowest-speed-limit option";
        case 6:
          return "there were unfinished downloads";
        case 7:
          return "remote server did not support resume when resume was required to complete download";
        case 8:
          return "not enough disk space available";
        case 9:
          return "piece length was different from one in .aria2 control";
        case 10:
          return "downloading same file at that moment";
        case 11:
          return "downloading same info hash torrent at that moment";
        case 12:
          return "file already existed";
        case 13:
          return "renaming file failed";
        case 14:
          return "could not open existing file";
        case 15:
          return "could not create new file or truncate existing file";
        case 16:
          return "file I/O error occurred";
        case 17:
          return "could not create directory";
        case 18:
          return "name resolution failed";
        case 19:
          return "could not parse Metalink document";
        case 20:
          return "FTP command failed";
        case 21:
          return "HTTP response header was bad or unexpected";
        case 22:
          return "too many redirects occurred";
        case 23:
          return "HTTP authorization failed";
        case 24:
          return "could not parse bencoded file";
        case 25:
          return ' ".torrent" file was corrupted or missing information ';
        case 26:
          return "Magnet URI was bad";
        case 27:
          return "bad/unrecognized option was given or unexpected option argument was given";
        case 28:
          return "remote server was unable to handle the request due to a temporary overloading or maintenance";
        case 29:
          return "could not parse JSON-RPC request";
      }
    }).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.rpc", [
        "webui.services.rpc.syscall",
        "webui.services.configuration",
        "webui.services.alerts",
        "webui.services.utils"
      ])
      .factory("$rpc", [
        "$syscall",
        "$globalTimeout",
        "$alerts",
        "$utils",
        "$rootScope",
        "$location",
        "$authconf",
        "$filter",
        function(e, t, n, a, i, r, s, l) {
          var c,
            d = [],
            u = [s],
            p = {},
            h = null,
            f = !1,
            m = a.getCookie("aria2conf");
          m && u.unshift(m),
            r.search().host &&
              (u.unshift(r.search()),
              (u[0].auth = { token: u[0].token, user: u[0].username, pass: u[0].password })),
            -1 != ["http", "https"].indexOf(r.protocol()) &&
              "localhost" != r.host() &&
              u.push(
                { host: r.host(), path: "/jsonrpc", port: 6800, encrypt: !1 },
                {
                  host: r.host(),
                  port: r.port(),
                  path: "/jsonrpc",
                  encrypt: "https" == r.protocol()
                },
                { host: r.host(), port: r.port(), path: s.path, encrypt: "https" == r.protocol() }
              );
          var g = !0,
            v = function() {
              clearTimeout(h), (h = null);
              var o = (d = _.filter(d, function(e) {
                return !!e && 2 !== e.once;
              })).slice();
              if (o.length) {
                if ("initializing" == e.state)
                  return (
                    console.log("Syscall is initializing, waiting"), void (h = setTimeout(v, t))
                  );
                if (g && u.length)
                  return (
                    (g = !1),
                    (p = u[0]),
                    (c = p && p.auth && p.auth.token ? p.auth.token : null),
                    e.init(p),
                    void (h = setTimeout(v, t))
                  );
                var r = _.map(o, function(e) {
                  var t = e.params;
                  return (
                    c && (t = ["token:" + c].concat(t || [])),
                    { methodName: e.name, params: t && t.length ? t : void 0 }
                  );
                });
                e.invoke({
                  name: "system.multicall",
                  params: [r],
                  success: function(e) {
                    if (
                      _.some(e.result, function(e) {
                        return e.code && "Unauthorized" === e.message;
                      })
                    )
                      return (
                        (g = !0),
                        n.addAlert(
                          "<strong>" +
                            l("translate")("Oh Snap!") +
                            "</strong> " +
                            l("translate")(
                              "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings",
                              "error"
                            )
                        ),
                        void (h = setTimeout(v, t))
                      );
                    u.length &&
                      (c
                        ? n.addAlert(
                            l("translate")(
                              "Successfully connected to Aria2 through its remote RPC ???"
                            ),
                            "success"
                          )
                        : n.addAlert(
                            l("translate")(
                              "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)"
                            )
                          ),
                      (u = [])),
                      a.setCookie("aria2conf", p);
                    var r = [];
                    _.each(e.result, function(e, t) {
                      var a = o[t];
                      a &&
                        (e.code && (console.error(a, e), n.addAlert(e.message, "error")),
                        r.push({ cb: a.cb, data: e }),
                        a.once && (a.once = 2));
                    }),
                      _.each(r, function(e) {
                        e.cb(e.data);
                      }),
                      i.$digest(),
                      f ? ((f = !1), (h = setTimeout(v, 0))) : (h = setTimeout(v, t));
                  },
                  error: function() {
                    g = !0;
                    var e = u.indexOf(p);
                    -1 != e && u.splice(e, 1),
                      u.length
                        ? (n.log(
                            l("translate")(
                              "The last connection attempt was unsuccessful. Trying another configuration"
                            )
                          ),
                          (h = setTimeout(v, 0)))
                        : (n.addAlert(
                            "<strong>" +
                              l("translate")("Oh Snap!") +
                              "</strong> " +
                              l("translate")(
                                "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings"
                              ),
                            "error"
                          ),
                          (h = setTimeout(v, t)));
                  }
                });
              } else h = setTimeout(v, t);
            };
          return (
            (h = setTimeout(v, t)),
            {
              configure: function(e) {
                n.addAlert(
                  l("translate")(
                    "Trying to connect to aria2 using the new connection configuration"
                  ),
                  "info"
                ),
                  (u = e instanceof Array ? e : [e]),
                  h && (clearTimeout(h), (h = setTimeout(v, 0)));
              },
              getConfiguration: function() {
                return p;
              },
              getDirectURL: function() {
                return p.directURL;
              },
              once: function(e, t, n, a) {
                (n = n || o.a.noop),
                  (t = t || []),
                  d.push({ once: !0, name: "aria2." + e, params: t, cb: n }),
                  a || this.forceUpdate();
              },
              subscribe: function(e, t, n, a) {
                n = n || o.a.noop;
                var i = { once: !1, name: "aria2." + e, params: (t = t || []), cb: n };
                return d.push(i), a || this.forceUpdate(), i;
              },
              unsubscribe: function(e) {
                var t = d.indexOf(e);
                d[t] = null;
              },
              forceUpdate: function() {
                h ? (clearTimeout(h), (h = setTimeout(v, 0))) : (f = !0);
              }
            }
          );
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.rpc.helpers", [
        "webui.services.deps",
        "webui.services.rpc",
        "webui.services.alerts"
      ])
      .factory("$rpchelpers", [
        "$_",
        "$rpc",
        "$alerts",
        function(e, t, n) {
          var a = { version: "", enabledFeatures: [] };
          return (
            t.once("getVersion", [], function(e) {
              a = e[0];
            }),
            {
              isFeatureEnabled: function(e) {
                return -1 != a.enabledFeatures.indexOf(e);
              },
              getAria2Version: function() {
                return a.version;
              },
              addUris: function(n, a, o) {
                e.each(n, function(n) {
                  var i = [],
                    r = e.cloneDeep(a);
                  e.each(n, function(e) {
                    if (e.startsWith("--")) {
                      var t = e.split(/--|=(.*)/);
                      t.length > 2 && (r[t[2]] = t[3] || "true");
                    } else i.push(e);
                  }),
                    t.once("addUri", [i, r], o, !0);
                }),
                  t.forceUpdate();
              },
              addTorrents: function(n, a, o) {
                e.each(n, function(e) {
                  t.once("addTorrent", [e, [], a], o, !0);
                }),
                  t.forceUpdate();
              },
              addMetalinks: function(n, a, o) {
                e.each(n, function(e) {
                  t.once("addMetalink", [e, a], o, !0);
                }),
                  t.forceUpdate();
              }
            }
          );
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.rpc.jsoncall", ["webui.services.deps", "webui.services.base64"])
      .factory("$jsoncall", [
        "$",
        "$json",
        "$base64",
        function(e, t, n) {
          return {
            init: function(e) {
              (this.avgTimeout = 2e3), (this.serverConf = e);
            },
            ariaRequest: function(n, a, o, i, r) {
              var s = new Date(),
                l = this;
              e.post({
                url: n,
                timeout: this.avgTimeout,
                contentType: "application/json",
                data: t.stringify({ jsonrpc: 2, id: "webui", method: a, params: o }),
                success: function(e) {
                  return (l.avgTimeout = 2e3 + 3 * (new Date() - s)), i(e);
                },
                error: r
              });
            },
            invoke: function(t) {
              var n = this,
                a = n.serverConf.encrypt ? "https" : "http";
              n.ariaRequest(
                a +
                  "://" +
                  n.serverConf.host +
                  ":" +
                  n.serverConf.port +
                  (n.serverConf.path || "/jsonrpc"),
                t.name,
                t.params,
                t.success,
                function() {
                  if (!n.serverConf.auth || !n.serverConf.auth.user)
                    return console.log("jsonrpc disconnect!!!"), t.error();
                  var o =
                      a +
                      "://" +
                      n.serverConf.auth.user +
                      ":" +
                      n.serverConf.auth.pass +
                      "@" +
                      n.serverConf.host +
                      ":" +
                      n.serverConf.port +
                      (n.serverConf.path || "/jsonrpc"),
                    i = e("<img/>").attr("src", o);
                  e("body").append(i),
                    i.remove(),
                    setTimeout(function() {
                      n.ariaRequest(o, t.name, t.params, t.success, function() {
                        return console.log("jsonrpc disconnect!!!"), t.error();
                      });
                    }, n.avgTimeout);
                }
              );
            }
          };
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.rpc.sockcall", [
        "webui.services.deps",
        "webui.services.utils",
        "webui.services.base64",
        "webui.services.alerts"
      ])
      .factory("$sockcall", [
        "$_",
        "$json",
        "$name",
        "$utils",
        "$alerts",
        function(e, t, n, a, i) {
          var r = {
            initialized: !1,
            handles: [],
            sock: null,
            conf: null,
            scheme: "ws",
            onerror: function(t) {
              e.each(r.handles, function(e) {
                e.error();
              }),
                (r.handles = []),
                (r.initialized = !1),
                r.onready && (r.onready(), (r.onready = null));
            },
            onclose: function(e) {
              r.handles && r.handles.length && r.onerror("Connection reset while calling aria2"),
                (r.initialized = !1),
                r.onready && (r.onready(), (r.onready = null));
            },
            onopen: function() {
              console.log("websocket initialized!!!"),
                (r.initialized = !0),
                r.onready && (r.onready(), (r.onready = null));
            },
            onmessage: function(e) {
              for (var n = t.parse(e.data), a = r.handles.length - 1; a >= 0; a--)
                if (r.handles[a].id === n.id)
                  return r.handles[a].success(n), void r.handles.splice(a, 1);
            },
            invoke: function(e) {
              var n = {
                jsonrpc: 2,
                id: a.uuid(),
                method: e.name,
                params: e.params && e.params.length ? e.params : void 0
              };
              n.params && !n.params.length && (n.params = void 0),
                r.handles.push({
                  success: e.success || o.a.noop,
                  error: e.error || o.a.noop,
                  id: n.id
                }),
                r.sock.send(t.stringify(n));
            },
            init: function(e, t) {
              if (
                ((r.initialized = !1),
                r.onready && (r.onready(), (r.onready = null)),
                "undefined" == typeof WebSocket)
              )
                return (
                  i.addAlert("Web sockets are not supported! Falling back to JSONP.", "info"),
                  void t()
                );
              (r.conf = e || r.conf),
                (r.scheme = r.conf.encrypt ? "wss" : "ws"),
                r.sock &&
                  ((r.sock.onopen = r.sock.onmessage = r.sock.onerror = r.sock.onclose = null),
                  r.onerror({ message: "Changing the websocket aria2 server details" }));
              try {
                var n = r.scheme + "://" + e.host + ":" + e.port + (e.path || "/jsonrpc");
                r.conf.auth &&
                  r.conf.auth.user &&
                  r.conf.auth.pass &&
                  (n =
                    r.scheme +
                    "://" +
                    r.conf.auth.user +
                    ":" +
                    r.conf.auth.pass +
                    "@" +
                    r.conf.host +
                    ":" +
                    r.conf.port +
                    (e.path || "/jsonrpc")),
                  (r.sock = new WebSocket(n)),
                  (r.sock.onopen = r.onopen),
                  (r.sock.onclose = r.onclose),
                  (r.sock.onerror = r.onerror),
                  (r.sock.onmessage = r.onmessage),
                  (r.onready = t);
              } catch (e) {
                console.log("not using websocket for aria2 rpc due to: ", e),
                  i.addAlert("Web sockets not working due to " + e.message, "info"),
                  t();
              }
            }
          };
          return r;
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.rpc.syscall", [
        "webui.services.rpc.jsoncall",
        "webui.services.rpc.sockcall",
        "webui.services.utils",
        "webui.services.alerts"
      ])
      .factory("$syscall", [
        "$log",
        "$jsoncall",
        "$sockcall",
        "$alerts",
        function(e, t, n, a) {
          return {
            state: "none",
            init: function(e) {
              console.log("Syscall is initializing to", e),
                (this.state = "initializing"),
                t.init(e);
              var a = this;
              n.init(e, function() {
                console.log("Syscall is ready"), (a.state = "ready");
              });
            },
            invoke: function(e) {
              return (
                (e.success = e.success || o.a.noop),
                (e.error = e.error || o.a.noop),
                n.initialized ? n.invoke(e) : t.invoke(e)
              );
            }
          };
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.settings", [])
      .value("$fileSettings", {
        "all-proxy": {
          val: "",
          desc:
            'Use this proxy server for all   protocols. To erase previously defined proxy, use "". You can override this setting and specify a proxy server for a particular protocol using http-proxy, https-proxy and ftp-proxy options. This affects all URIs. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].'
        },
        "all-proxy-passwd": { val: "", desc: "Set password for all-proxy option." },
        "all-proxy-user": { val: "", desc: "Set user for all-proxy option." },
        "allow-overwrite": {
          val: !1,
          options: ["true", "false"],
          desc:
            "Restart download from scratch if the corresponding control file doesn't exist. See also auto-file-renaming option. Default: false"
        },
        "allow-piece-length-change": {
          val: !1,
          options: ["true", "false"],
          desc:
            "If false is given, aria2 aborts download when a piece length is different from one in a control file. If true is given, you can proceed but some download progress will be lost. Default: false"
        },
        "always-resume": {
          val: !0,
          options: ["true", "false"],
          desc:
            "Always resume download. If true is given, aria2 always tries to resume download and if resume is not possible, aborts download. If false is given, when all given URIs do not support resume or aria2 encounters N URIs which does not support resume (N is the value specified using --max-resume-failure-tries option), aria2 downloads file from scratch. See --max-resume-failure-tries option. Default: true"
        },
        "async-dns": {
          val: !0,
          options: ["true", "false"],
          desc: "Enable asynchronous DNS. Default: true"
        },
        "auto-file-renaming": {
          val: !0,
          options: ["true", "false"],
          desc:
            "Rename file name if the same file already exists. This option works only in HTTP(S)/FTP download. The new file name has a dot and a number(1..9999) appended. Default: true"
        },
        "bt-detach-seed-only": {
          desc:
            "Exclude seed only downloads when counting concurrent active downloads (See -j option). This means that if -j3 is given and this option is turned on and 3 downloads are active and one of those enters seed mode, then it is excluded from active download count (thus it becomes 2), and the next download waiting in queue gets started. But be aware that seeding item is still recognized as active download in RPC method. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "bt-enable-hook-after-hash-check": {
          desc:
            "Allow hook command invocation after hash check (see -V option) in BitTorrent download. By default, when hash check succeeds, the command given by --on-bt-download-complete is executed. To disable this action, give false to this option. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "bt-enable-lpd": {
          desc:
            "Enable Local Peer Discovery. If a private flag is set in a torrent, aria2 doesn't use this feature for that download even if true is given. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "bt-exclude-tracker": {
          val: "",
          desc:
            "Comma separated list of BitTorrent tracker's announce URI to remove. You can use special value * which matches all URIs, thus removes all announce URIs. When specifying * in shell command-line, don't forget to escape or quote it. See also --bt-tracker option."
        },
        "bt-external-ip": {
          val: "",
          desc:
            "Specify the external IP address to report to a BitTorrent tracker. Although this function is named external, it can accept any kind of IP addresses. IPADDRESS must be a numeric IP address."
        },
        "bt-force-encryption": {
          desc:
            "Requires BitTorrent message payload encryption with arc4. This is a shorthand of --bt-require-crypto --bt-min-crypto-level=arc4. This option does not change the option value of those options. If true is given, deny legacy BitTorrent handshake and only use Obfuscation handshake and always encrypt message payload. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "bt-hash-check-seed": {
          desc:
            "If true is given, after hash check using --check-integrity option and file is complete, continue to seed file. If you want to check file and download it only when it is damaged or incomplete, set this option to false. This option has effect only on BitTorrent download. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "bt-max-open-files": {
          val: 100,
          desc: "Specify maximum number of files to open in each BitTorrent download. Default: 100"
        },
        "bt-max-peers": {
          val: 55,
          desc:
            "Specify the maximum number of peers per torrent. 0 means unlimited. See also bt-request-peer-speed-limit option. Default: 55"
        },
        "bt-metadata-only": {
          desc:
            "Download metadata only. The file(s) described in metadata will not be downloaded. This option has effect only when BitTorrent Magnet URI is used. See also --bt-save-metadata option. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "bt-min-crypto-level": {
          desc:
            "Set minimum level of encryption method. If several encryption methods are provided by a peer, aria2 chooses the lowest one which satisfies the given level. Default: plain",
          val: "plain",
          options: ["plain", "arc4"]
        },
        "bt-prioritize-piece": {
          val: "",
          desc:
            "Try to download first and last pieces of each file first. This is useful for previewing files. The argument can contain 2 keywords: head and tail. To include both keywords, they must be separated by comma. These keywords can take one parameter, SIZE. For example, if head=<SIZE> is specified, pieces in the range of first SIZE bytes of each file get higher priority. tail=<SIZE> means the range of last SIZE bytes of each file. SIZE can include K or M (1K = 1024, 1M = 1024K). If SIZE is omitted, SIZE=1M is used."
        },
        "bt-request-peer-speed-limit": {
          val: "50K",
          desc:
            "If the whole download speed of every torrent is lower than SPEED, aria2 temporarily increases the number of peers to try for more download speed. Configuring this option with your preferred download speed can increase your download speed in some cases. You can append K or M (1K = 1024, 1M = 1024K). Default: 50K"
        },
        "bt-require-crypto": {
          desc:
            "If true is given, aria2 doesn't accept and establish connection with legacy BitTorrent handshake(19BitTorrent protocol). Thus aria2 always uses Obfuscation handshake. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "bt-save-metadata": {
          desc:
            "Save metadata as .torrent file. This option has effect only when BitTorrent Magnet URI is used. The filename is hex encoded info hash with suffix .torrent. The directory to be saved is the same directory where download file is saved. If the same file already exists, metadata is not saved. See also --bt-metadata-only option. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "bt-seed-unverified": {
          desc: "Seed previously downloaded files without verifying piece hashes. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "bt-stop-timeout": {
          val: 0,
          desc:
            "Stop BitTorrent download if download speed is 0 in consecutive SEC seconds. If 0 is given, this feature is disabled. Default: 0"
        },
        "bt-tracker": {
          val: "",
          desc:
            "Comma separated list of additional BitTorrent tracker's announce URI. These URIs are not affected by --bt-exclude-tracker option because they are added after URIs in --bt-exclude-tracker option are removed."
        },
        "bt-tracker-connect-timeout": {
          val: 60,
          desc:
            "Set the connect timeout in seconds to establish connection to tracker. After the connection is established, this option makes no effect and --bt-tracker-timeout option is used instead. Default: 60"
        },
        "bt-tracker-interval": {
          val: 0,
          desc:
            "Set the interval in seconds between tracker requests. This completely overrides interval value and aria2 just uses this value and ignores the min interval and interval value in the response of tracker. If 0 is set, aria2 determines interval based on the response of tracker and the download progress. Default: 0"
        },
        "bt-tracker-timeout": { val: 60, desc: "Set timeout in seconds. Default: 60" },
        "bt-remove-unselected-file": {
          desc:
            "Removes the unselected files when download is completed in BitTorrent. To select files, use --select-file option. If it is not used, all files are assumed to be selected. Please use this option with care because it will actually remove files from your disk. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "check-certificate": {
          desc:
            "Verify the peer using certificates specified in --ca-certificate option. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "check-integrity": {
          desc:
            "Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option. If piece hashes are provided, this option can detect damaged portions of a file and re-download them. If a hash of entire file is provided, hash check is only done when file has been already download. This is determined by file length. If hash check fails, file is re-downloaded from scratch. If both piece hashes and a hash of entire file are provided, only piece hashes are used. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "conditional-get": {
          desc:
            "Download file only when the local file is older than remote file. This function only works with HTTP(S) downloads only. It does not work if file size is specified in Metalink. It also ignores Content-Disposition header. If a control file exists, this option will be ignored. This function uses If-Modified-Since header to get only newer file conditionally. When getting modification time of local file, it uses user supplied filename(see --out option) or filename part in URI if --out is not specified. To overwrite existing file, --allow-overwrite is required. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "connect-timeout": {
          val: 60,
          desc:
            "Set the connect timeout in seconds to establish connection to HTTP/FTP/proxy server. After the connection is established, this option makes no effect and --timeout option is used instead. Default: 60"
        },
        continue: {
          desc:
            "Continue downloading a partially downloaded file. Use this option to resume a download started by a web browser or another program which downloads files sequentially from the beginning. Currently this option is only applicable to HTTP(S)/FTP downloads.",
          val: !0,
          options: ["true", "false"]
        },
        daemon: {
          desc:
            "Run as daemon. The current working directory will be changed to / and standard input, standard output and standard error will be redirected to /dev/null. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "deferred-input": {
          desc:
            "If true is given, aria2 does not read all URIs and options from file specified by --input-file option at startup, but it reads one by one when it needs later. This may reduce memory usage if input file contains a lot of URIs to download. If false is given, aria2 reads all URIs and options at startup. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        dir: { val: "", desc: "The directory to store the downloaded file." },
        "disable-ipv6": {
          desc:
            "Disable IPv6. This is useful if you have to use broken DNS and want to avoid terribly slow AAAA record lookup. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "dry-run": {
          desc:
            "If true is given, aria2 just checks whether the remote file is available and doesn't download data. This option has effect on HTTP/FTP download. BitTorrent downloads are canceled if true is specified. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "enable-async-dns6": {
          desc:
            "Enable IPv6 name resolution in asynchronous DNS resolver. This option will be ignored when --async-dns=false. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "enable-color": {
          desc: "Enable color output for a terminal. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "enable-dht": {
          desc:
            "Enable IPv4 DHT functionality. It also enables UDP tracker support. If a private flag is set in a torrent, aria2 doesn???t use DHT for that download even if true is given. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "enable-dht6": {
          desc:
            "Enable IPv6 DHT functionality. If a private flag is set in a torrent, aria2 doesn???t use DHT for that download even if true is given. Use --dht-listen-port option to specify port number to listen on. See also --dht-listen-addr6 option.",
          val: !1,
          options: ["true", "false"]
        },
        "enable-http-keep-alive": {
          desc: "Enable HTTP/1.1 persistent connection. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "enable-http-pipelining": {
          desc: "Enable HTTP/1.1 pipelining. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "enable-peer-exchange": {
          desc:
            "Enable Peer Exchange extension. If a private flag is set in a torrent, this feature is disabled for that download even if true is given. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "enable-mmap": {
          desc:
            "Map files into memory. This option may not work if the file space is not pre-allocated. See --file-allocation. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "enable-rpc": {
          desc:
            "Enable JSON-RPC/XML-RPC server. It is strongly recommended to set secret authorization token using --rpc-secret option. See also --rpc-listen-port option. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "file-allocation": {
          desc:
            "Specify file allocation method. none doesn't pre-allocate file space. prealloc pre-allocates file space before download begins. This may take some time depending on the size of the file. If you are using newer file systems such as ext4 (with extents support), btrfs, xfs or NTFS(MinGW build only), falloc is your best choice. It allocates large(few GiB) files almost instantly. Don't use falloc with legacy file systems such as ext3 and FAT32 because it takes almost same time as prealloc and it blocks aria2 entirely until allocation finishes. falloc may not be available if your system doesn't have posix_fallocate(3) function. Possible Values: none, prealloc, falloc Default: prealloc",
          val: void 0,
          options: ["none", "prealloc", "falloc", "trunc"]
        },
        "follow-metalink": {
          desc:
            "If true or mem is specified, when a file whose suffix is .meta4 or .metalink or content type of application/metalink4+xml or application/metalink+xml is downloaded, aria2 parses it as a metalink file and downloads files mentioned in it. If mem is specified, a metalink file is not written to the disk, but is just kept in memory. If false is specified, the action mentioned above is not taken. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "follow-torrent": {
          desc:
            "If true or mem is specified, when a file whose suffix is .torrent or content type is application/x-bittorrent is downloaded, aria2 parses it as a torrent file and downloads files mentioned in it. If mem is specified, a torrent file is not written to the disk, but is just kept in memory. If false is specified, the action mentioned above is not taken. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "force-save": {
          desc:
            "Save download with --save-session option even if the download is completed or removed. This option also saves control file in that situations. This may be useful to save BitTorrent seeding which is recognized as completed state. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "ftp-passwd": {
          val: "ARIA2USER@",
          desc:
            "Set FTP password. This affects all URIs. If user name is embedded but password is missing in URI, aria2 tries to resolve password using .netrc. If password is found in .netrc, then use it as password. If not, use the password specified in this option. Default: ARIA2USER@"
        },
        "ftp-pasv": {
          desc:
            "Use the passive mode in FTP. If false is given, the active mode will be used. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "ftp-proxy": {
          val: "",
          desc:
            'Use this proxy server for FTP. To erase previously defined proxy, use "". See also --all-proxy option. This affects all URIs. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].'
        },
        "ftp-proxy-passwd": { val: "", desc: "Set password for --ftp-proxy option." },
        "ftp-proxy-user": { val: "", desc: "Set user for --ftp-proxy option." },
        "ftp-reuse-connection": {
          desc: "Reuse connection in FTP. Default: true.",
          val: !0,
          options: ["true", "false"]
        },
        "ftp-type": {
          desc: "Set FTP transfer type. TYPE is either binary or ascii. Default: binary",
          val: "binary",
          options: ["binary", "ascii"]
        },
        "ftp-user": {
          val: "anonymous",
          desc: "Set FTP user. This affects all URIs. Default: anonymous"
        },
        header: { val: "", desc: "Append HEADER to HTTP request header.", multiline: !0 },
        "http-accept-gzip": {
          desc:
            "Send Accept: deflate, gzip request header and inflate response if remote server responds with Content-Encoding: gzip or Content-Encoding: deflate. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "http-auth-challenge": {
          desc:
            "Send HTTP authorization header only when it is requested by the server. If false is set, then authorization header is always sent to the server. There is an exception: if username and password are embedded in URI, authorization header is always sent to the server regardless of this option. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "http-no-cache": {
          desc:
            "Send Cache-Control: no-cache and Pragma: no-cache header to avoid cached content. If false is given, these headers are not sent and you can add Cache-Control header with a directive you like using --header option. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "http-user": { val: "", desc: "Set HTTP username." },
        "http-passwd": { val: "", desc: "Set HTTP password." },
        "http-proxy": {
          val: "",
          desc:
            'Use this proxy server for HTTP. To erase previously defined proxy, use "". See also --all-proxy option. This affects all URIs. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].'
        },
        "http-proxy-passwd": { val: "", desc: "Set password for --http-proxy option." },
        "http-proxy-user": { val: "", desc: "Set user for --http-proxy option." },
        "human-readable": {
          desc:
            "Print sizes and speed in human readable format (e.g., 1.2Ki, 3.4Mi) in the console readout. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "index-out": {
          val: void 0,
          desc:
            "Set file path for file with index=INDEX. You can find the file index using the --show-files option. PATH is a relative path to the path specified in --dir option. You can use this option multiple times. Using this option, you can specify the output filenames of BitTorrent downloads."
        },
        "lowest-speed-limit": {
          val: "0",
          desc:
            "Close connection if download speed is lower than or equal to this value(bytes per sec). 0 means aria2 does not have a lowest speed limit. You can append K or M (1K = 1024, 1M = 1024K). This option does not affect BitTorrent downloads. Default: 0"
        },
        "max-connection-per-server": {
          val: 1,
          desc: "The maximum number of connections to one server for each download. Default: 1"
        },
        "max-download-limit": {
          val: "0",
          desc:
            "Set max download speed per each download in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the overall download speed, use --max-overall-download-limit option. Default: 0"
        },
        "max-file-not-found": {
          val: 0,
          desc:
            'If aria2 receives "file not found" status from the remote HTTP/FTP servers NUM times without getting a single byte, then force the download to fail. Specify 0 to disable this option. This options is effective only when using HTTP/FTP servers. Default: 0'
        },
        "max-resume-failure-tries": {
          val: 0,
          desc:
            "When used with --always-resume=false, aria2 downloads file from scratch when aria2 detects N number of URIs that does not support resume. If N is 0, aria2 downloads file from scratch when all given URIs do not support resume. See --always-resume option. Default: 0"
        },
        "max-tries": {
          val: 0,
          desc: "Set number of tries. 0 means unlimited. See also --retry-wait. Default: 5"
        },
        "max-upload-limit": {
          val: "0",
          desc:
            "Set max upload speed per each torrent in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the overall upload speed, use --max-overall-upload-limit option. Default: 0"
        },
        "metalink-enable-unique-protocol": {
          desc:
            "If true is given and several protocols are available for a mirror in a metalink file, aria2 uses one of them. Use --metalink-preferred-protocol option to specify the preference of protocol. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "metalink-language": { val: "", desc: "The language of the file to download." },
        "metalink-location": {
          val: "",
          desc:
            "The location of the preferred server. A comma-delimited list of locations is acceptable, for example, jp,us."
        },
        "metalink-os": { val: "", desc: "The operating system of the file to download." },
        "metalink-version": { val: "", desc: "The version of the file to download." },
        "min-split-size": {
          val: "20M",
          desc:
            "aria2 does not split less than 2*SIZE byte range. For example, let's consider downloading 20MiB file. If SIZE is 10M, aria2 can split file into 2 range [0-10MiB) and [10MiB-20MiB) and download it using 2 sources(if --split >= 2, of course). If SIZE is 15M, since 2*15M > 20MiB, aria2 does not split file and download it using 1 source. You can append K or M (1K = 1024, 1M = 1024K). Possible Values: 1M -1024M Default: 20M"
        },
        "no-conf": {
          desc: "Disable loading aria2.conf file.",
          val: !1,
          options: ["true", "false"]
        },
        "no-file-allocation-limit": {
          val: "5M",
          desc:
            "No file allocation is made for files whose size is smaller than SIZE. You can append K or M (1K = 1024, 1M = 1024K). Default: 5M"
        },
        "no-netrc": {
          desc:
            "Disables netrc support. netrc support is enabled by default.Note netrc file is only read at the startup if --no-netrc is false. So if --no-netrc is true at the startup, no netrc is available throughout the session. You cannot get netrc enabled even if you change this setting.",
          val: !0,
          options: ["true", "false"]
        },
        "no-proxy": {
          val: "",
          desc:
            "Specify comma separated hostnames, domains and network address with or without CIDR block where proxy should not be used."
        },
        out: {
          val: "",
          desc:
            "The file name of the downloaded file. When --force-sequential option is used, this option is ignored."
        },
        "parameterized-uri": {
          desc:
            "Enable parameterized URI support. You can specify set of parts: http://{sv1,sv2,sv3}/foo.iso. Also you can specify numeric sequences with step counter: http://host/image[000-100:2].img. A step counter can be omitted. If all URIs do not point to the same file, such as the second example above, -Z option is required. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "pause-metadata": {
          desc:
            "Pause downloads created as a result of metadata download. There are 3 types of metadata downloads in aria2: (1) downloading .torrent file. (2) downloading torrent metadata using magnet link. (3) downloading metalink file. These metadata downloads will generate downloads using their metadata. This option pauses these subsequent downloads. This option is effective only when --enable-rpc=true is given. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "proxy-method": {
          desc:
            "Set the method to use in proxy request. METHOD is either get or tunnel. HTTPS downloads always use tunnel regardless of this option. Default: get",
          val: "get",
          options: ["get", "tunnel"]
        },
        quiet: {
          desc: "Make aria2 quiet (no console output). Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "realtime-chunk-checksum": {
          desc:
            "Validate chunk of data by calculating checksum while downloading a file if chunk checksums are provided. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        referer: { val: "", desc: "Set Referer. This affects all URIs." },
        "remote-time": {
          desc:
            "Retrieve timestamp of the remote file from the remote HTTP/FTP server and if it is available, apply it to the local file. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "remove-control-file": {
          desc:
            "Remove control file before download. Using with --allow-overwrite=true, download always starts from scratch. This will be useful for users behind proxy server which disables resume.",
          val: !1,
          options: ["true", "false"]
        },
        "reuse-uri": {
          desc: "Reuse already used URIs if no unused URIs are left. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "seed-ratio": {
          val: 0,
          desc:
            "Specify share ratio. Seed completed torrents until share ratio reaches RATIO. You are strongly encouraged to specify equals or more than 1.0 here. Specify 0.0 if you intend to do seeding regardless of share ratio. If --seed-time option is specified along with this option, seeding ends when at least one of the conditions is satisfied. Default: 1.0"
        },
        "seed-time": {
          val: 0,
          desc:
            "Specify seeding time in minutes. Also see the --seed-ratio option. Note Specifying --seed-time=0 disables seeding after download completed."
        },
        "select-file": {
          val: "",
          desc:
            "Set file to download by specifying its index. You can find the file index using the --show-files option. Multiple indexes can be specified by using ,, for example: 3,6. You can also use - to specify a range: 1-5. , and - can be used together: 1-5,8,9. When used with the -M option, index may vary depending on the query ."
        },
        split: {
          val: 5,
          desc:
            "Download a file using N connections. If more than N URIs are given, first N URIs are used and remaining URIs are used for backup. If less than N URIs are given, those URIs are used more than once so that N connections total are made simultaneously. The number of connections to the same host is restricted by --max-connection-per-server option. See also --min-split-size option. Default: 5"
        },
        timeout: { val: 60, desc: "Set timeout in seconds. Default: 60" },
        "use-head": {
          desc: "Use HEAD method for the first request to the HTTP server. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "user-agent": {
          val: "aria2/$VERSION",
          desc:
            "Set user agent for HTTP(S) downloads. Default: aria2/$VERSION, $VERSION is replaced by package version."
        },
        "retry-wait": {
          val: 0,
          desc:
            "Set the seconds to wait between retries. With SEC > 0, aria2 will retry download when the HTTP server returns 503 response. Default: 0."
        },
        "metalink-base-uri": {
          val: "",
          desc:
            "Specify base URI to resolve relative URI in metalink:url and metalink:metaurl element in a metalink file stored in local disk. If URI points to a directory, URI must end with /."
        },
        pause: {
          desc:
            "Pause download after added. This option is effective only when --enable-rpc=true is given. Default: false",
          val: "false",
          options: ["true", "false"]
        },
        "rpc-allow-origin-all": {
          desc:
            "Add Access-Control-Allow-Origin header field with value * to the RPC response. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "rpc-listen-all": {
          desc:
            "Listen incoming JSON-RPC/XML-RPC requests on all network interfaces. If false is given, listen only on local loopback interface. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        "rpc-secure": {
          desc:
            "RPC transport will be encrypted by SSL/TLS. The RPC clients must use https scheme to access the server. For WebSocket client, use wss scheme. Use --rpc-certificate and --rpc-private-key options to specify the server certificate and private key.",
          val: !1,
          options: ["true", "false"]
        },
        "stream-piece-selector": {
          desc:
            "Specify piece selection algorithm used in HTTP/FTP download. Piece means fixed length segment which is downloaded in parallel in segmented download. If default is given, aria2 selects piece so that it reduces the number of establishing connection. This is reasonable default behaviour because establishing connection is an expensive operation. If inorder is given, aria2 selects piece which has minimum index. Index=0 means first of the file. This will be useful to view movie while downloading it. --enable-http-pipelining option may be useful to reduce reconnection overhead. Please note that aria2 honors --min-split-size option, so it will be necessary to specify a reasonable value to --min-split-size option. If geom is given, at the beginning aria2 selects piece which has minimum index like inorder, but it exponentially increasingly keeps space from previously selected piece. This will reduce the number of establishing connection and at the same time it will download the beginning part of the file first. This will be useful to view movie while downloading it. Default: default",
          val: "default",
          options: ["default", "inorder", "geom"]
        },
        "show-console-readout": {
          desc: "Show console readout. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "show-files": {
          desc:
            "Print file listing of ???.torrent???, ???.meta4??? and ???.metalink??? file and exit. In case of ???.torrent??? file, additional information (infohash, piece length, etc) is also printed.",
          val: !1,
          options: ["true", "false"]
        },
        "truncate-console-readout": {
          desc: "Truncate console readout to fit in a single line. Default: true",
          val: !0,
          options: ["true", "false"]
        },
        "hash-check-only": {
          desc:
            "If true is given, after hash check using --check-integrity option, abort download whether or not download is complete. Default: false",
          val: !1,
          options: ["true", "false"]
        },
        checksum: {
          val: void 0,
          desc:
            "Set checksum. TYPE is hash type. The supported hash type is listed in Hash Algorithms in aria2c -v. DIGEST is hex digest. For example, setting sha-1 digest looks like this: sha-1=0192ba11326fe2298c8cb4de616f4d4140213838 This option applies only to HTTP(S)/FTP downloads."
        },
        "piece-length": {
          val: "1M",
          desc:
            "Set a piece length for HTTP/FTP downloads. This is the boundary when aria2 splits a file. All splits occur at multiple of this length. This option will be ignored in BitTorrent downloads. It will be also ignored if Metalink file contains piece hashes. Default: 1M"
        },
        "uri-selector": {
          desc:
            "Specify URI selection algorithm. The possible values are inorder, feedback and adaptive. If inorder is given, URI is tried in the order appeared in the URI list. If feedback is given, aria2 uses download speed observed in the previous downloads and choose fastest server in the URI list. This also effectively skips dead mirrors. The observed download speed is a part of performance profile of servers mentioned in --server-stat-of and --server-stat-if options. If adaptive is given, selects one of the best mirrors for the first and reserved connections. For supplementary ones, it returns mirrors which has not been tested yet, and if each of them has already been tested, returns mirrors which has to be tested again. Otherwise, it doesn't select anymore mirrors. Like feedback, it uses a performance profile of servers. Default: feedback",
          val: "feedback",
          options: ["inorder", "feedback", "adaptive"]
        }
      })
      .value("$globalSettings", {
        "download-result": {
          desc:
            "This option changes the way Download Results is formatted. If OPT is default, print GID, status, average download speed and path/URI. If multiple files are involved, path/URI of first requested file is printed and remaining ones are omitted. If OPT is full, print GID, status, average download speed, percentage of progress and path/URI. The percentage of progress and path/URI are printed for each requested file in each row. Default: default",
          val: "default",
          options: ["default", "full"]
        },
        log: {
          val: "",
          desc:
            'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, log is not written to file.'
        },
        "log-level": {
          desc:
            "Set log level to output. LEVEL is either debug, info, notice, warn or error. Default: debug.",
          val: "debug",
          options: ["debug", "info", "notice", "warn", "error"]
        },
        "max-concurrent-downloads": {
          val: 5,
          desc:
            "Set maximum number of parallel downloads for every static (HTTP/FTP) URI, torrent and metalink. See also --split option. Default: 5"
        },
        "max-download-result": {
          val: 1e3,
          desc:
            "Set maximum number of download result kept in memory. The download results are completed/error/removed downloads. The download results are stored in FIFO queue and it can store at most NUM download results. When queue is full and new download result is created, oldest download result is removed from the front of the queue and new one is pushed to the back. Setting big number in this option may result high memory consumption after thousands of downloads. Specifying 0 means no download result is kept. Default: 1000"
        },
        "max-overall-download-limit": {
          val: "0",
          desc:
            "Set max overall download speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the download speed per download, use --max-download-limit option. Default: 0."
        },
        "max-overall-upload-limit": {
          val: "0",
          desc:
            "Set max overall upload speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the upload speed per torrent, use --max-upload-limit option. Default: 0."
        },
        "save-cookies": {
          val: "",
          desc:
            "Save Cookies to FILE in Mozilla/Firefox(1.x/2.x)/ Netscape format. If FILE already exists, it is overwritten. Session Cookies are also saved and their expiry values are treated as 0. Possible Values: /path/to/file."
        },
        "save-session": {
          val: "",
          desc:
            "Save error/unfinished downloads to FILE on exit. You can pass this output file to aria2c with --input-file option on restart."
        },
        "server-stat-of": {
          val: "",
          desc:
            "Specify the filename to which performance profile of the servers is saved. You can load saved data using --server-stat-if option. See Server Performance Profile subsection below for file format."
        }
      })
      .value("$globalExclude", ["checksum", "index-out", "out", "pause", "select-file"])
      .value("$waitingExclude", [
        "dry-run",
        "metalink-base-uri",
        "parameterized-uri",
        "pause",
        "piece-length"
      ])
      .value("$activeInclude", [
        "bt-max-peers",
        "bt-request-peer-speed-limit",
        "bt-remove-unselected-file",
        "max-download-limit",
        "max-upload-limit"
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.services.settings.filters", [])
      .value("$globalsettingsexclude", ["checksum", "index-out", "out", "pause", "select-file"])
      .value("$waitingsettingsexclude", [
        "dry-run",
        "metalink-base-uri",
        "parameterized-uri",
        "pause",
        "piece-length"
      ])
      .value("$activesettingsfilter", [
        "bt-max-peers",
        "bt-request-peer-speed-limit",
        "bt-remove-unselected-file",
        "max-download-limit",
        "max-upload-limit"
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.services.modals", []).factory("$modals", function() {
      var e = {};
      return {
        register: function(t, n) {
          e[t] = n;
        },
        invoke: function(t, n) {
          if (!e[t]) return !1;
          var a = Array.prototype.slice.call(arguments, 1);
          return e[t].apply({}, a);
        }
      };
    }).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.services.utils", ["webui.services.configuration"]).factory("$utils", [
      "$filter",
      "$name",
      "$titlePattern",
      function(e, t, n) {
        var a = (function() {
            var e = new Uint8Array(16),
              t = function() {
                for (var t, n = 0; n < 16; n++)
                  n % 3 || (t = (4294967296 * Math.random()) | 0),
                    (e[n] = (t >>> ((3 & n) << 3)) & 255);
                return e;
              };
            return window.crypto && crypto.getRandomValues
              ? function() {
                  try {
                    return crypto.getRandomValues(e), e;
                  } catch (e) {
                    return t();
                  }
                }
              : t;
          })(),
          o = {
            fmtsize: function(e) {
              return (e = +e) <= 1024
                ? e.toFixed(0) + " B"
                : (e /= 1024) <= 1024
                  ? e.toFixed(1) + " KB"
                  : (e /= 1024) <= 1024
                    ? e.toFixed(2) + " MB"
                    : (e /= 1024).toFixed(3) + " GB";
            },
            fmtspeed: function(e) {
              return o.fmtsize(e) + "/s";
            },
            setCookie: function(e, t) {
              var n = new Date();
              n.setDate(n.getDate() + 360);
              var a = escape(JSON.stringify(t)) + "; expires=" + n.toUTCString();
              document.cookie = e + "=" + a;
            },
            getCookie: function(e) {
              for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                var a = t[n].substr(0, t[n].indexOf("=")).replace(/^\s+|\s+$/g, ""),
                  o = t[n].substr(t[n].indexOf("=") + 1);
                if (e == a) return JSON.parse(unescape(o));
              }
              return null;
            },
            getFileName: function(e) {
              var t = e.split(/[/\\]/);
              return t[t.length - 1];
            },
            uuid: (function() {
              for (var e = [], t = 0; t < 256; ++t) e.push((t + 256).toString(16).substr(1));
              return (
                Object.freeze(e),
                function() {
                  var t = a();
                  return (
                    (t[6] = (15 & t[6]) | 64),
                    (t[8] = (63 & t[8]) | 128),
                    e[t[0]] +
                      e[t[1]] +
                      e[t[2]] +
                      e[t[3]] +
                      "-" +
                      e[t[4]] +
                      e[t[5]] +
                      "-" +
                      e[t[6]] +
                      e[t[7]] +
                      "-" +
                      e[t[8]] +
                      e[t[9]] +
                      "-" +
                      e[t[10]] +
                      e[t[11]] +
                      e[t[12]] +
                      e[t[13]] +
                      e[t[14]] +
                      e[t[15]]
                  );
                }
              );
            })(),
            randStr: function() {
              return o.uuid();
            },
            mergeMap: function(e, t, n) {
              t || (t = []);
              for (var a = 0, o = Math.min(e.length, t.length); a < o; ++a) n(e[a], t[a]);
              for (; a < e.length; ) t.push(n(e[a++]));
              return (t.length = e.length), t;
            },
            getTitle: function(e) {
              return (
                e || (e = {}),
                n
                  .replace("{active}", e.numActive || "???")
                  .replace("{waiting}", e.numWaiting || "???")
                  .replace("{download_speed}", o.fmtspeed(e.downloadSpeed) || "???")
                  .replace("{upload_speed}", o.fmtspeed(e.uploadSpeed) || "???")
                  .replace("{stopped}", e.numStopped || "???")
                  .replace("{name}", t)
              );
            },
            getChunksFromHex: function(e, t) {
              var n = [],
                a = 0,
                o = parseInt(t);
              if (!e) return [];
              if (o > 1)
                for (var i = 1 / o, r = 0, s = 0; s < e.length; s++)
                  for (var l = parseInt(e[s], 16), c = 1; c <= 4; c++) {
                    var d = l & (1 << (4 - c));
                    d && 0;
                    var u = !!d;
                    if (
                      (a >= 1 && n[a - 1].show == u
                        ? (n[a - 1].ratio += i)
                        : (n.push({ ratio: i, show: u }), a++),
                      ++r == o)
                    )
                      return n;
                  }
              return n;
            }
          };
        return o;
      }
    ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.filters.bytes", ["webui.services.utils"])
      .filter("blength", [
        "$filter",
        "$utils",
        function(e, t) {
          return t.fmtsize;
        }
      ])
      .filter("bspeed", [
        "$filter",
        "$utils",
        function(e, t) {
          return t.fmtspeed;
        }
      ])
      .filter("time", function() {
        function e(e) {
          return ("0" + e).substr(-2);
        }
        return function(t) {
          if (!(t = parseInt(t, 10)) || !isFinite(t)) return "???";
          var n = t % 60;
          if (t < 60) return n + "s";
          var a = Math.floor((t % 3600) / 60);
          if (t < 3600) return e(a) + ":" + e(n);
          var o = Math.floor((t % 86400) / 3600);
          return t < 86400
            ? e(o) + ":" + e(a) + ":" + e(n)
            : Math.floor(t / 86400) + "::" + e(o) + ":" + e(a) + ":" + e(n);
        };
      }).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.filters.url", ["webui.services.utils"]).filter("encodeURI", function() {
      return window.encodeURI;
    }).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.directives.chunkbar", ["webui.services.utils"]).directive("chunkbar", [
      "$utils",
      function(e) {
        return function(t, n, a) {
          var o = "",
            i = 0,
            r = !0,
            s = function() {
              r &&
                (function(e, t, n) {
                  if (((t = t || []), e.getContext)) {
                    var a = e.getContext("2d");
                    (a.fillStyle = n || "#149BDF"), a.clearRect(0, 0, e.width, e.height);
                    var o = 0,
                      i = e.width,
                      r = e.height;
                    t.forEach(function(e) {
                      var t = e.ratio * i;
                      e.show && a.fillRect(o, 0, t, r), (o += t);
                    });
                  } else console.log("use chunk bar on an canvas implementation!");
                })(n[0], e.getChunksFromHex(o, i), a.fillStyle);
            };
          t.$watch(a.bitfield, function(e) {
            (o = e), s();
          }),
            t.$watch(a.pieces, function(e) {
              (i = e), s();
            }),
            a.draw &&
              t.$watch(a.draw, function(e) {
                r = e;
              }),
            s();
        };
      }
    ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.directives.dgraph", ["webui.filters.bytes", "webui.services.deps"])
      .directive("dgraph", [
        "$",
        "$filter",
        "$parse",
        function(e, t, n) {
          var a = "%H:%M:%S";
          try {
            /16/.test(new Date(2e3, 0, 1, 16, 7, 9).toLocaleTimeString()) || (a = "%I:%M:%S %P");
          } catch (e) {}
          return function(n, i, r) {
            var s = !1,
              l = 180,
              c = 0,
              d = 0,
              u = !1,
              p = { label: "DOWN", data: [], color: "#00ff00", lines: { show: !0 } },
              h = { label: "UP", data: [], color: "#0000ff", lines: { show: !0 } };
            i.height(0.6 * i.width());
            var f = e.plot(i, [p, h], {
                legend: {
                  show: void 0 == r.nolabel,
                  backgroundOpacity: 0,
                  margin: [10, 20],
                  labelFormatter: function(e, n) {
                    return n.data.length
                      ? e + " (" + t("bspeed")(n.data[n.data.length - 1][1]) + ")"
                      : e;
                  },
                  position: "sw"
                },
                xaxis: {
                  show: !0,
                  mode: "time",
                  timeformat: a,
                  ticks: +r.xticks || 10,
                  minTickSize: [30, "second"]
                },
                yaxis: {
                  position: "right",
                  ticks: function(e) {
                    for (
                      var t = [0],
                        n = +r.yticks || yticks,
                        a = 10240 * Math.max(1, Math.ceil(e.max / (10240 * n))),
                        o = 0;
                      o < n;
                      o++
                    ) {
                      if (a * o > e.max) break;
                      t.push(a * o);
                    }
                    return t;
                  },
                  tickFormatter: function(e, n) {
                    return t("bspeed")(e);
                  },
                  min: 0
                }
              }),
              m = function() {
                var e = i.width();
                0 != e &&
                  (i.height(0.6 * e), f.setData([p, h]), f.resize(), f.setupGrid(), f.draw());
              };
            n.$watch(r.dspeed, function(e) {
              void 0 !== e && ((u = !0), (c = parseFloat(e) || 0));
            }),
              n.$watch(r.uspeed, function(e) {
                void 0 !== e && ((u = !0), (d = parseFloat(e) || 0));
              }),
              n.$watch(r.draw, function(e) {
                s = e;
              });
            var g = setInterval(function() {
              if (u) {
                var e = new Date();
                (e = Date.UTC(
                  e.getFullYear(),
                  e.getMonth(),
                  e.getDate(),
                  e.getHours(),
                  e.getMinutes(),
                  e.getSeconds()
                )),
                  p.data.length === l && p.data.shift(),
                  p.data.push([e, c]),
                  h.data.length === l && h.data.shift(),
                  h.data.push([e, d]),
                  s && m();
              }
            }, 1e3);
            o.a.element(window).bind("resize", m),
              i.bind("$destroy", function() {
                clearInterval(g);
              });
          };
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.directives.fselect", ["webui.services.deps"]).directive("fselect", [
      "$parse",
      function(e) {
        return function(t, n, a) {
          var o = e(a.fselect || a.files).assign;
          n.bind("change", function() {
            o(t, n[0].files);
          }).filestyle({ placeholder: "No file selected" });
        };
      }
    ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.directives.fileselect", ["webui.services.deps"])
      .directive("indeterminate", [
        "$parse",
        function(e) {
          return {
            require: "ngModel",
            restrict: "A",
            link: function(t, n, a, o) {
              var i = e(a.ngModel),
                r = [],
                s = 0,
                l = 0,
                c = function() {
                  return i(t);
                },
                d = function(e) {
                  n.prop("indeterminate", e);
                },
                u = function(e) {
                  o.$setViewValue(e), o.$render();
                },
                p = function(e) {
                  return function() {
                    r.length > 0 && e.apply(this, arguments);
                  };
                },
                h = function(e) {
                  return function() {
                    0 === r.length && e.apply(this, arguments);
                  };
                },
                f = function(e) {
                  return function(t) {
                    if (t.targetScope !== t.currentScope) return e.apply(this, arguments);
                  };
                };
              if (
                (a.indeterminate && e(a.indeterminate).constant && d(t.$eval(a.indeterminate)),
                a.indeterminate && e(a.indeterminate).constant && !t.$eval(a.indeterminate))
              )
                o.$viewChangeListeners.push(
                  h(function() {
                    t.$emit("childSelectedChange", c());
                  })
                ),
                  t.$on(
                    "ParentSelectedChange",
                    f(
                      h(function(e, t) {
                        u(t);
                      })
                    )
                  ),
                  t.$emit("i'm child input", c),
                  t.$emit("childSelectedChange", c());
              else {
                t.$on(
                  "i'm child input",
                  f(function(e, t) {
                    r.push(t);
                  })
                );
                o.$viewChangeListeners.push(
                  p(
                    (function(e) {
                      return function() {
                        if (!n.prop("indeterminate")) return e.apply(this, arguments);
                      };
                    })(function() {
                      t.$broadcast("ParentSelectedChange", c());
                    })
                  )
                ),
                  t.$on(
                    "childSelectedChange",
                    f(
                      p(function(e, t) {
                        if (s + l !== r.length) {
                          (s = 0), (l = 0);
                          for (var n = 0; n < r.length; n++) r[n]() ? (s += 1) : (l += 1);
                        } else t ? (s++, l--) : (s--, l++);
                        var a = 0 === l;
                        d(a !== s > 0), u(a);
                      })
                    )
                  );
              }
            }
          };
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    t.a = function() {
      return {
        restrict: "E",
        link: function(e, t) {
          t.attr("placeholder", function(e, t) {
            return void 0 !== t ? t.replace(/\\n/g, "\n") : t;
          }).bind("keydown keypress", function(t) {
            t.ctrlKey && 13 === t.which && (t.preventDefault(), e.$close());
          });
        }
      };
    };
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a.module("webui.ctrls.alert", ["webui.services.alerts"]).controller("AlertCtrl", [
      "$scope",
      "$alerts",
      "$sce",
      function(e, t, n) {
        (e.pendingAlerts = []),
          (e.removeAlert = function(e) {
            this.pendingAlerts.splice(e, 1);
          }),
          t.addAlerter(function(t, a) {
            a = a || "warning";
            var o = { msg: n.trustAsHtml(t), type: a };
            (e.pendingAlerts = _.filter(e.pendingAlerts, function(e) {
              return !e.expired;
            })),
              e.pendingAlerts.push(o),
              setTimeout(function() {
                var t = e.pendingAlerts.indexOf(o);
                -1 != t &&
                  ((e.pendingAlerts[t].expired = !0),
                  e.pendingAlerts.length > 0 && e.removeAlert(t));
              }, "error" == a ? 15e3 : 5e3),
              e.$digest();
          });
      }
    ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.ctrls.download", [
        "ui.bootstrap",
        "webui.services.utils",
        "webui.services.rpc",
        "webui.services.rpc.helpers",
        "webui.services.alerts",
        "webui.services.settings",
        "webui.services.modals",
        "webui.services.configuration",
        "webui.services.errors"
      ])
      .controller("MainCtrl", [
        "$scope",
        "$name",
        "$enable",
        "$rpc",
        "$rpchelpers",
        "$utils",
        "$alerts",
        "$modals",
        "$fileSettings",
        "$activeInclude",
        "$waitingExclude",
        "$pageSize",
        "$getErrorStatus",
        "$rootScope",
        "$filter",
        function(e, t, n, a, o, i, r, s, l, c, d, u, p, h, f) {
          (e.name = t), (e.enable = n);
          var m = /\\/g,
            g = [];
          (e.active = []),
            (e.waiting = []),
            (e.stopped = []),
            (e.gstats = {}),
            (e.hideLinkedMetadata = !0),
            (e.propFilter = ""),
            (e.pause = function(e) {
              a.once("forcePause", [e.gid]);
            }),
            (e.resume = function(e) {
              a.once("unpause", [e.gid]);
            }),
            (e.restart = function(t) {
              a.once("getOption", [t.gid], function(n) {
                var i = n[0];
                a.once("getFiles", [t.gid], function(n) {
                  var a = n[0],
                    r = _.chain(a)
                      .map(function(e) {
                        return e.uris;
                      })
                      .filter(function(e) {
                        return e && e.length;
                      })
                      .map(function(e) {
                        return _.chain(e)
                          .map(function(e) {
                            return e.uri;
                          })
                          .uniq()
                          .value();
                      })
                      .value();
                  r.length > 0 &&
                    (console.log("adding uris:", r, i),
                    e.remove(
                      t,
                      function() {
                        o.addUris(r, i);
                      },
                      !0
                    ));
                });
              });
            }),
            (e.canRestart = function(e) {
              return -1 == ["active", "paused"].indexOf(e.status) && !e.bittorrent;
            }),
            (e.remove = function(t, n, o) {
              setTimeout(function() {
                if (
                  o ||
                  confirm(
                    f("translate")("Remove {{name}} and associated meta-data?", { name: t.name })
                  )
                ) {
                  var i = "remove";
                  "stopped" == e.getType(t) && (i = "removeDownloadResult"),
                    t.followedFrom &&
                      (e.remove(t.followedFrom, function() {}, !0), (t.followedFrom = null)),
                    a.once(i, [t.gid], n);
                  for (var r = [e.active, e.waiting, e.stopped], s = 0; s < r.length; ++s) {
                    var l = r[s],
                      c = l.indexOf(t);
                    if (!(c < 0)) return void l.splice(c, 1);
                  }
                }
              }, 0);
            }),
            a.subscribe("tellActive", [], function(t) {
              e.$apply(function() {
                i.mergeMap(t[0], e.active, e.getCtx);
              });
            }),
            a.subscribe("tellWaiting", [0, 1e3], function(t) {
              e.$apply(function() {
                i.mergeMap(t[0], e.waiting, e.getCtx);
              });
            }),
            a.subscribe("tellStopped", [0, 1e3], function(t) {
              e.$apply(function() {
                if (e.hideLinkedMetadata) {
                  i.mergeMap(t[0], g, e.getCtx);
                  var n = {};
                  _.forEach(g, function(e) {
                    n[e.gid] = e;
                  }),
                    _.forEach(e.active, function(e) {
                      n[e.gid] = e;
                    }),
                    _.forEach(e.waiting, function(e) {
                      n[e.gid] = e;
                    }),
                    (e.stopped = _.filter(g, function(e) {
                      return (
                        !(e.metadata && e.followedBy && e.followedBy in n) ||
                        ((n[e.followedBy].followedFrom = e), !1)
                      );
                    }));
                } else i.mergeMap(t[0], e.stopped, e.getCtx);
              });
            }),
            (h.pageTitle = i.getTitle()),
            a.subscribe("getGlobalStat", [], function(t) {
              e.$apply(function() {
                (e.gstats = t[0]), (h.pageTitle = i.getTitle(e.gstats));
              });
            }),
            a.once("getVersion", [], function(t) {
              e.$apply(function() {
                e.miscellaneous = t[0];
              });
            }),
            (e.totalDownloads = 0),
            (e.downloadFilter = ""),
            (e.downloadFilterCommitted = ""),
            (e.onDownloadFilter = function() {
              e.downloadFilterTimer && clearTimeout(e.downloadFilterTimer),
                (e.downloadFilterTimer = setTimeout(function() {
                  delete e.downloadFilterTimer,
                    e.downloadFilterCommitted !== e.downloadFilter &&
                      ((e.downloadFilterCommitted = e.downloadFilter), e.$digest());
                }, 500));
            }),
            (e.filterDownloads = function(t) {
              if (!e.downloadFilterCommitted) return t;
              var n = e.downloadFilterCommitted
                .replace(/[{}()\[\]\\^$.?]/g, "\\$&")
                .replace(/\*/g, ".*")
                .replace(/\./g, ".");
              return (
                (n = new RegExp(n, "i")),
                _.filter(t, function(e) {
                  return (
                    !!n.test(e.name) ||
                    _.filter(e.files, function(e) {
                      return n.test(e.relpath);
                    }).length
                  );
                })
              );
            }),
            (e.clearFilter = function() {
              e.downloadFilter = e.downloadFilterCommitted = "";
            }),
            (e.toggleStateFilters = function() {
              (e.filterSpeed = !e.filterSpeed),
                (e.filterActive = !e.filterActive),
                (e.filterWaiting = !e.filterWaiting),
                (e.filterComplete = !e.filterComplete),
                (e.filterError = !e.filterError),
                (e.filterPaused = !e.filterPaused),
                (e.filterRemoved = !e.filterRemoved),
                e.persistFilters();
            }),
            (e.resetFilters = function() {
              (e.filterSpeed = e.filterActive = e.filterWaiting = e.filterComplete = e.filterError = e.filterPaused = e.filterRemoved = !0),
                e.clearFilter(),
                e.persistFilters();
            }),
            (e.persistFilters = function() {
              var t = JSON.stringify({
                s: e.filterSpeed,
                a: e.filterActive,
                w: e.filterWaiting,
                c: e.filterComplete,
                e: e.filterError,
                p: e.filterPaused,
                r: e.filterRemoved
              });
              i.setCookie("aria2filters", t);
            }),
            (e.loadFilters = function() {
              var t = JSON.parse(i.getCookie("aria2filters"));
              t
                ? ((e.filterSpeed = !!t.s),
                  (e.filterActive = !!t.a),
                  (e.filterWaiting = !!t.w),
                  (e.filterComplete = !!t.c),
                  (e.filterError = !!t.e),
                  (e.filterPaused = !!t.p),
                  (e.filterRemoved = !!t.r))
                : e.resetFilters();
            }),
            e.loadFilters(),
            (e.toggleCollapsed = function(t) {
              if (!t.collapsed)
                return (
                  (t.animCollapsed = !0),
                  void setTimeout(function() {
                    e.$apply(function() {
                      t.collapsed = !0;
                    });
                  }, 500)
                );
              (t.collapsed = !1),
                setTimeout(function() {
                  e.$apply(function() {
                    t.animCollapsed = !1;
                  });
                }, 0);
            }),
            (e.pageSize = u),
            (e.currentPage = 1),
            (e.totalAria2Downloads = function() {
              return e.active.length + e.waiting.length + e.stopped.length;
            }),
            (e.getErrorStatus = function(e) {
              return p(+e);
            }),
            (e.getDownloads = function() {
              var t = [];
              e.filterActive
                ? e.filterSpeed
                  ? t.push(e.active)
                  : t.push(
                      _.filter(e.active, function(e) {
                        return !+e.uploadSpeed && !+e.downloadSpeed;
                      })
                    )
                : e.filterSpeed &&
                  t.push(
                    _.filter(e.active, function(e) {
                      return +e.uploadSpeed || +e.downloadSpeed;
                    })
                  ),
                e.filterWaiting &&
                  t.push(
                    _.filter(e.waiting, function(e) {
                      return "waiting" == e.status;
                    })
                  ),
                e.filterPaused &&
                  t.push(
                    _.filter(e.waiting, function(e) {
                      return "paused" == e.status;
                    })
                  ),
                e.filterError &&
                  t.push(
                    _.filter(e.stopped, function(e) {
                      return "error" == e.status;
                    })
                  ),
                e.filterComplete &&
                  t.push(
                    _.filter(e.stopped, function(e) {
                      return "complete" == e.status;
                    })
                  ),
                e.filterRemoved &&
                  t.push(
                    _.filter(e.stopped, function(e) {
                      return "removed" == e.status;
                    })
                  );
              var n = t
                .map(function(e) {
                  return _.sortBy(e, function(e) {
                    return -e.completedLength / e.totalLength;
                  });
                })
                .reduce(function(e, t) {
                  return e.concat(t);
                }, []);
              return (
                (n = e.filterDownloads(n)),
                (e.totalDownloads = n.length),
                (n = n.slice((e.currentPage - 1) * e.pageSize)).splice(e.pageSize),
                n
              );
            }),
            (e.hasDirectURL = function() {
              return "" != a.getDirectURL();
            }),
            (e.getDirectURL = function() {
              return a.getDirectURL();
            }),
            (e.getCtx = function(e, t) {
              var n;
              t
                ? (t.gid !== e.gid && (t.files = []),
                  (t.dir = e.dir),
                  (t.status = e.status),
                  e.verifiedLength && (t.status = "verifing"),
                  e.verifyIntegrityPending && (t.status = "verifyPending"),
                  (t.errorCode = e.errorCode),
                  (t.gid = e.gid),
                  (t.followedBy =
                    e.followedBy && 1 == e.followedBy.length ? e.followedBy[0] : null),
                  (t.followedFrom = null),
                  (t.numPieces = e.numPieces),
                  (t.connections = e.connections),
                  void 0 === e.numSeeders
                    ? (t.numSeeders = "")
                    : ((t.connectionsTitle = "Connections (Seeders)"),
                      (t.numSeeders = " (" + e.numSeeders + ")")),
                  (t.bitfield = e.bitfield),
                  t.totalLength !== e.totalLength &&
                    ((t.totalLength = e.totalLength),
                    (t.fmtTotalLength = i.fmtsize(e.totalLength))),
                  t.completedLength !== e.completedLength &&
                    ((t.completedLength = e.completedLength),
                    (t.fmtCompletedLength = i.fmtsize(e.completedLength))),
                  e.verifiedLength
                    ? t.verifiedLength !== e.verifiedLength && (t.verifiedLength = e.verifiedLength)
                    : delete t.verifiedLength,
                  e.verifyIntegrityPending
                    ? t.verifyIntegrityPending !== e.verifyIntegrityPending &&
                      (t.verifyIntegrityPending = e.verifyIntegrityPending)
                    : delete t.verifyIntegrityPending,
                  t.uploadLength !== e.uploadLength &&
                    ((t.uploadLength = e.uploadLength),
                    (t.fmtUploadLength = i.fmtsize(e.uploadLength))),
                  t.pieceLength !== e.pieceLength &&
                    ((t.pieceLength = e.pieceLength),
                    (t.fmtPieceLength = i.fmtsize(e.pieceLength))),
                  t.downloadSpeed !== e.downloadSpeed &&
                    ((t.downloadSpeed = e.downloadSpeed),
                    (t.fmtDownloadSpeed = i.fmtspeed(e.downloadSpeed))),
                  t.uploadSpeed !== e.uploadSpeed &&
                    ((t.uploadSpeed = e.uploadSpeed),
                    (t.fmtUploadSpeed = i.fmtspeed(e.uploadSpeed))))
                : ((t = {
                    dir: e.dir,
                    status: e.status,
                    gid: e.gid,
                    followedBy: e.followedBy && 1 == e.followedBy.length ? e.followedBy[0] : null,
                    followedFrom: null,
                    numPieces: e.numPieces,
                    connections: e.connections,
                    connectionsTitle: "Connections",
                    numSeeders: e.numSeeders,
                    bitfield: e.bitfield,
                    errorCode: e.errorCode,
                    totalLength: e.totalLength,
                    fmtTotalLength: i.fmtsize(e.totalLength),
                    completedLength: e.completedLength,
                    fmtCompletedLength: i.fmtsize(e.completedLength),
                    uploadLength: e.uploadLength,
                    fmtUploadLength: i.fmtsize(e.uploadLength),
                    pieceLength: e.pieceLength,
                    fmtPieceLength: i.fmtsize(e.pieceLength),
                    downloadSpeed: e.downloadSpeed,
                    fmtDownloadSpeed: i.fmtspeed(e.downloadSpeed),
                    uploadSpeed: e.uploadSpeed,
                    fmtUploadSpeed: i.fmtspeed(e.uploadSpeed),
                    collapsed: !0,
                    animCollapsed: !0,
                    files: []
                  }),
                  e.verifiedLength &&
                    ((t.verifiedLength = e.verifiedLength), (t.status = "verifing")),
                  e.verifyIntegrityPending &&
                    ((t.verifyIntegrityPending = e.verifyIntegrityPending),
                    (t.status = "verifyPending")));
              var a,
                o = e.files;
              if (o) {
                for (var r = t.files, s = 0; s < o.length; ++s) {
                  var l = r[s] || (r[s] = {}),
                    c = o[s];
                  c.path !== l.path &&
                    ((l.index = +c.index),
                    (l.path = c.path),
                    (l.length = c.length),
                    (l.fmtLength = i.fmtsize(c.length)),
                    (l.relpath = c.path.replace(m, "/")),
                    l.relpath
                      ? l.relpath.startsWith("[") ||
                        (l.relpath = l.relpath.substr(t.dir.length + 1))
                      : (l.relpath = (c.uris && c.uris[0] && c.uris[0].uri) || "Unknown")),
                    (l.selected = "true" === c.selected);
                }
                (r.length = o.length), r.length && (n = r[0].relpath);
              } else delete t.files;
              return (
                e.bittorrent
                  ? ((a = e.bittorrent.info && e.bittorrent.info.name), (t.bittorrent = !0))
                  : delete t.bittorrent,
                (t.name = a || n || "Unknown"),
                (t.metadata = t.name.startsWith("[METADATA]")),
                t.metadata && (t.name = t.name.substr(10)),
                t
              );
            }),
            (e.hasStatus = function e(t, n) {
              return _.isArray(n)
                ? 0 != n.length && (e(t, n[0]) || e(t, n.slice(1)))
                : t.status == n;
            }),
            (e.getEta = function(e) {
              return (e.totalLength - e.completedLength) / e.downloadSpeed;
            }),
            (e.getProgressClass = function(e) {
              switch (e.status) {
                case "paused":
                  return "progress-bar-info";
                case "error":
                  return "progress-bar-danger";
                case "removed":
                  return "progress-bar-warning";
                case "active":
                  return "active";
                case "verifing":
                  return "progress-bar-warning";
                case "complete":
                  return "progress-bar-success";
                default:
                  return "";
              }
            }),
            (e.getProgress = function(e) {
              var t = 0;
              return (
                (t = (t = e.verifiedLength
                  ? (e.verifiedLength / e.totalLength) * 100 || 0
                  : (e.completedLength / e.totalLength) * 100 || 0).toFixed(2)) || (t = 0),
                t
              );
            }),
            (e.getRatio = function(e) {
              var t = 0;
              return (t = (t = e.uploadLength / e.completedLength || 0).toFixed(2)) || (t = 0), t;
            }),
            (e.getType = function(e) {
              var t = e.status;
              return (
                "paused" == t && (t = "waiting"),
                -1 != ["error", "removed", "complete"].indexOf(t) && (t = "stopped"),
                t
              );
            }),
            (e.selectFiles = function(e) {
              console.log("got back files for the torrent ..."),
                s.invoke("selectFiles", e.files, function(t) {
                  var n = "";
                  _.forEach(t, function(e) {
                    e.selected && (n += "," + e.index);
                  }),
                    (n = n.slice(1)),
                    a.once("changeOption", [e.gid, { "select-file": n }], function(e) {
                      console.log("changed indexes to:", n, e);
                    });
                });
            }),
            (e.showSettings = function(t) {
              var n = e.getType(t),
                o = {};
              return (
                a.once("getOption", [t.gid], function(e) {
                  var i = e[0],
                    r = _.cloneDeep(l);
                  for (var u in r)
                    ("active" == n && -1 == c.indexOf(u)) ||
                      ("waiting" == n && -1 != d.indexOf(u)) ||
                      ((o[u] = r[u]), (o[u].val = i[u] || o[u].val));
                  s.invoke("settings", o, t.name + " settings", "Change", function(e) {
                    var n = {};
                    for (var o in e) n[o] = e[o].val;
                    a.once("changeOption", [t.gid, n]);
                  });
                }),
                !1
              );
            }),
            (e.moveDown = function(e) {
              a.once("changePosition", [e.gid, 1, "POS_CUR"]);
            }),
            (e.moveUp = function(e) {
              a.once("changePosition", [e.gid, -1, "POS_CUR"]);
            });
        }
      ])
      .filter("objFilter", function() {
        return function(e, t) {
          e = e || {};
          var n = {};
          for (var a in e) a.startsWith(t) && (n[a] = e[a]);
          return n;
        };
      }).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a),
      i = function(e, t) {
        var n = 0,
          a = [],
          o = function(e) {
            var o = e.target.result;
            a.push(o.split(",")[1]), --n || t(a);
          };
        _.each(e, function(e) {
          n++, console.log("starting file reader");
          var a = new FileReader();
          (a.onload = o),
            (a.onerror = function(e) {
              console.log("got back error", e), t([]);
            }),
            a.readAsDataURL(e);
        });
      };
    t.a = o.a
      .module("webui.ctrls.modal", [
        "ui.bootstrap",
        "webui.services.deps",
        "webui.services.modals",
        "webui.services.rpc",
        "webui.services.configuration"
      ])
      .controller("ModalCtrl", [
        "$_",
        "$scope",
        "$modal",
        "$modals",
        "$rpc",
        "$fileSettings",
        "$downloadProps",
        function(e, t, n, a, o, r, s) {
          (t.getUris = {
            open: function(a) {
              var o = this;
              (this.uris = ""),
                (this.downloadSettingsCollapsed = !0),
                (this.advancedSettingsCollapsed = !0),
                (this.settings = {}),
                (this.fsettings = e.cloneDeep(r)),
                (this.cb = a),
                e.forEach(s, function(e) {
                  (o.settings[e] = o.fsettings[e]), delete o.fsettings[e];
                }),
                (this.inst = n.open({
                  templateUrl: "getUris.html",
                  scope: t,
                  windowClass: "modal-large"
                })),
                this.inst.result.then(
                  function() {
                    if ((delete o.inst, o.cb)) {
                      var e = {};
                      for (var t in o.settings)
                        r[t].val != o.settings[t].val && (e[t] = o.settings[t].val);
                      for (var t in o.fsettings)
                        r[t].val != o.fsettings[t].val && (e[t] = o.fsettings[t].val);
                      console.log("sending settings:", e), o.cb(o.parse(), e);
                    }
                  },
                  function() {
                    delete o.inst;
                  }
                );
            },
            parse: function() {
              return e
                .chain(this.uris.trim().split(/\r?\n/g))
                .map(function(t) {
                  return e(t)
                    .replace(/["'][^"']*["']/g, function(e) {
                      return e.replace(/%/g, "%25").replace(/ /g, "%20");
                    })
                    .trim()
                    .split(/\s+/g)
                    .map(function(e) {
                      return e
                        .replace(/%20/g, " ")
                        .replace(/%25/g, "%")
                        .replace(/["']/g, "");
                    });
                })
                .filter(function(e) {
                  return e.length;
                })
                .value();
            }
          }),
            (t.settings = {
              open: function(e, a, o, i) {
                var r = this;
                (this.settings = e),
                  (this.title = a),
                  (this.actionText = o),
                  (this.inst = n.open({
                    templateUrl: "settings.html",
                    scope: t,
                    windowClass: "modal-large"
                  })),
                  this.inst.result.then(
                    function() {
                      delete r.inst, i && i(r.settings);
                    },
                    function() {
                      delete r.inst;
                    }
                  );
              }
            }),
            (t.selectFiles = {
              open: function(a, o) {
                var i = this;
                this.files = e.cloneDeep(a);
                (this.groupedFiles = (function(e) {
                  function t() {
                    (this.dirs = {}), (this.files = []), (this.show = !1), (this.selected = !0);
                  }
                  e.sort(function(e, t) {
                    return e.relpath < t.relpath ? -1 : 1;
                  });
                  for (var n, a = new t(), o = 0; o < e.length; o++) {
                    n = a;
                    for (var i = e[o].relpath.split("/"), r = 0; r < i.length - 1; r++)
                      n.dirs[i[r]] || (n.dirs[i[r]] = new t()), (n = n.dirs[i[r]]);
                    n.files.push(e[o]);
                  }
                  return a;
                })(this.files)),
                  (this.inst = n.open({
                    templateUrl: "selectFiles.html",
                    scope: t,
                    windowClass: "modal-large"
                  })),
                  this.inst.result.then(
                    function() {
                      delete i.inst, o && o(i.files);
                    },
                    function() {
                      delete i.inst;
                    }
                  );
              }
            }),
            (t.connection = {
              open: function(e, a) {
                var i = this;
                (this.conf = o.getConfiguration()),
                  (this.inst = n.open({
                    templateUrl: "connection.html",
                    scope: t,
                    windowClass: "modal-large"
                  })),
                  this.inst.result.then(
                    function() {
                      delete i.inst, a && a(i.conf);
                    },
                    function() {
                      delete i.inst;
                    }
                  );
              }
            }),
            e.each(["getTorrents", "getMetalinks"], function(a) {
              t[a] = {
                open: function(o) {
                  var l = this;
                  (this.files = []),
                    (this.collapsed = !0),
                    (this.settings = {}),
                    (this.fsettings = e.cloneDeep(r)),
                    e.forEach(s, function(e) {
                      (l.settings[e] = l.fsettings[e]), delete l.fsettings[e];
                    }),
                    (this.inst = n.open({
                      templateUrl: a + ".html",
                      scope: t,
                      windowClass: "modal-large"
                    })),
                    this.inst.result.then(
                      function() {
                        delete l.inst,
                          o &&
                            i(l.files, function(e) {
                              var t = {};
                              for (var n in l.settings)
                                r[n].val != l.settings[n].val && (t[n] = l.settings[n].val);
                              for (var n in l.fsettings)
                                r[n].val != l.fsettings[n].val && (t[n] = l.fsettings[n].val);
                              console.log("sending settings:", t), o(e, t);
                            });
                      },
                      function() {
                        delete l.inst;
                      }
                    );
                }
              };
            }),
            e.each(["about", "server_info"], function(e) {
              t[e] = {
                open: function() {
                  var a = this;
                  (this.inst = n.open({ templateUrl: e + ".html", scope: t })),
                    this.inst.result.then(
                      function() {
                        delete a.inst;
                      },
                      function() {
                        delete a.inst;
                      }
                    );
                }
              };
            }),
            o.once("getVersion", [], function(e) {
              t.miscellaneous = e[0];
            }),
            e.each(
              [
                "getUris",
                "getTorrents",
                "getMetalinks",
                "selectFiles",
                "settings",
                "connection",
                "server_info",
                "about"
              ],
              function(e) {
                a.register(e, function() {
                  if (!t[e].inst) {
                    var n = Array.prototype.slice.call(arguments, 0);
                    t[e].open.apply(t[e], n);
                  }
                });
              }
            );
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.ctrls.nav", [
        "webui.services.configuration",
        "webui.services.modals",
        "webui.services.rpc",
        "webui.services.rpc.helpers",
        "webui.services.settings",
        "webui.services.utils"
      ])
      .controller("NavCtrl", [
        "$scope",
        "$modals",
        "$rpc",
        "$rpchelpers",
        "$fileSettings",
        "$globalSettings",
        "$globalExclude",
        "$utils",
        "$translate",
        "$filter",
        function(e, t, n, a, o, i, r, s, l, c) {
          (e.isFeatureEnabled = function(e) {
            return a.isFeatureEnabled(e);
          }),
            (e.collapsed = !0),
            (e.onDownloadFilter = function() {
              (e.$parent.downloadFilter = e.downloadFilter), e.$parent.onDownloadFilter();
            }),
            (e.forcePauseAll = function() {
              n.once("forcePauseAll", []);
            }),
            (e.purgeDownloadResult = function() {
              n.once("purgeDownloadResult", []);
            }),
            (e.unpauseAll = function() {
              n.once("unpauseAll", []);
            }),
            (e.addUris = function() {
              t.invoke("getUris", _.bind(a.addUris, a));
            }),
            (e.addMetalinks = function() {
              t.invoke("getMetalinks", _.bind(a.addMetalinks, a));
            }),
            (e.addTorrents = function() {
              t.invoke("getTorrents", _.bind(a.addTorrents, a));
            }),
            (e.changeCSettings = function() {
              t.invoke("connection", n.getConfiguration(), _.bind(n.configure, n));
            }),
            (e.changeGSettings = function() {
              n.once("getGlobalOption", [], function(e) {
                var a = s.getCookie("aria2props");
                (a && a.indexOf) || (a = []);
                var l = e[0],
                  d = {};
                for (var u in (_.forEach([o, i], function(e) {
                  for (var t in e)
                    -1 == r.indexOf(t) &&
                      ((d[t] = _.cloneDeep(e[t])), (d[t].starred = -1 != a.indexOf(t)));
                }),
                l))
                  u in r ||
                    (u in d
                      ? (d[u].val = l[u])
                      : (d[u] = { name: u, val: l[u], desc: "", starred: -1 != a.indexOf(u) }));
                t.invoke(
                  "settings",
                  _.cloneDeep(d),
                  c("translate")("Global Settings"),
                  c("translate")("Save"),
                  function(e) {
                    var t = {},
                      a = [];
                    for (var o in e)
                      d[o].val != e[o].val && (t[o] = e[o].val), e[o].starred && a.push(o);
                    console.log("saving aria2 settings:", t),
                      console.log("saving aria2 starred:", a),
                      n.once("changeGlobalOption", [t]),
                      s.setCookie("aria2props", a);
                  }
                );
              });
            }),
            (e.showServerInfo = function() {
              t.invoke("server_info");
            }),
            (e.showAbout = function() {
              t.invoke("about");
            }),
            (e.changeLanguage = function(e) {
              l.use(e);
            }),
            (e.shutDownServer = function() {
              n.once("shutdown", []);
            });
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    var a = n(0),
      o = n.n(a);
    t.a = o.a
      .module("webui.ctrls.props", [
        "webui.services.utils",
        "webui.services.settings",
        "webui.services.deps",
        "webui.services.rpc",
        "webui.services.configuration"
      ])
      .controller("StarredPropsCtrl", [
        "$scope",
        "$_",
        "$utils",
        "$rpc",
        "$globalSettings",
        "$fileSettings",
        "$starredProps",
        function(e, t, n, a, o, i, r) {
          (e._props = []),
            (e.dirty = !0),
            (e.properties = []),
            (e.getProps = function() {
              var e = n.getCookie("aria2props");
              return (e && e.indexOf) || (e = r), e;
            }),
            (e.enabled = function() {
              for (var t = 0; t < e.properties.length; t++)
                if (e.properties[t]._val != e.properties[t].val) return !0;
              return !1;
            }),
            (e.save = function() {
              for (var t = {}, n = !1, o = 0; o < e.properties.length; o++)
                e.properties[o]._val != e.properties[o].val &&
                  ((t[e.properties[o].name] = e.properties[o].val), (n = !0));
              n && a.once("changeGlobalOption", [t]);
            }),
            a.subscribe("getGlobalOption", [], function(t) {
              for (var a = t[0], r = e.getProps(), s = [], l = 0; l < r.length; l++) {
                var c = {};
                r[l] in o
                  ? ((c = o[r[l]]), r[l] in a && (c.val = a[r[l]]), (c.name = r[l]), s.push(c))
                  : r[l] in i
                    ? ((c = i[r[l]]), r[l] in a && (c.val = a[r[l]]), (c.name = r[l]), s.push(c))
                    : r[l] in a && s.push({ name: r[l], val: a[r[l]] });
              }
              n.mergeMap(s, e.properties, function(e, t) {
                return (
                  ((t = t || {}).name = e.name),
                  (t.options = e.options),
                  (t.multiline = e.multiline),
                  t._val == t.val || t.val == e.val
                    ? ((t._val = e.val), (t.val = e.val))
                    : (t._val = e.val),
                  (t.desc = e.desc),
                  t
                );
              });
            });
        }
      ]).name;
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      function(e) {
        var t = n(0),
          a = n.n(t),
          o = (n(31), n(36), n(2)),
          i = n(3),
          r = n(4),
          s = n(5),
          l = n(7),
          c = n(8),
          d = n(9),
          u = n(10),
          p = n(11),
          h = n(12),
          f = n(13),
          m = n(14),
          g = n(15),
          v = n(16),
          b = n(17),
          w = n(18),
          y = n(19),
          k = n(20),
          S = n(21),
          T = n(22),
          C = n(23),
          P = n(24),
          A = n(25),
          x = n(26),
          R = n(27),
          D = n(28);
        n(32),
          n(33),
          n(34),
          n(35),
          n(40),
          n(41),
          n(42),
          n(43),
          n(44),
          n(45),
          n(46),
          n(47),
          n(48),
          n(49),
          n(50),
          n(51),
          n(52),
          n(53),
          n(54),
          n(55);
        var $ = a.a.module("webui", [
          v.a,
          s.a,
          l.a,
          i.a,
          r.a,
          c.a,
          d.a,
          u.a,
          p.a,
          h.a,
          g.a,
          o.a,
          f.a,
          m.a,
          b.a,
          w.a,
          y.a,
          k.a,
          S.a,
          T.a,
          P.a,
          A.a,
          x.a,
          R.a,
          D.a,
          "ui.bootstrap",
          "pascalprecht.translate"
        ]);
        function M(e, t) {
          for (var n in t) t.hasOwnProperty(n) && ((e[n] && e[n].length) || (e[n] = t[n]));
          return e;
        }
        $.config([
          "$translateProvider",
          "$locationProvider",
          function(e, t) {
            e
              .translations("en_US", translations.en_US)
              .translations("nl_NL", M(translations.nl_NL, translations.en_US))
              .translations("th_TH", M(translations.th_TH, translations.en_US))
              .translations("zh_CN", M(translations.zh_CN, translations.en_US))
              .translations("zh_TW", M(translations.zh_TW, translations.en_US))
              .translations("pl_PL", M(translations.pl_PL, translations.en_US))
              .translations("fr_FR", M(translations.fr_FR, translations.en_US))
              .translations("de_DE", M(translations.de_DE, translations.en_US))
              .translations("es_ES", M(translations.es_ES, translations.en_US))
              .translations("ru_RU", M(translations.ru_RU, translations.en_US))
              .translations("it_IT", M(translations.it_IT, translations.en_US))
              .translations("tr_TR", M(translations.tr_TR, translations.en_US))
              .translations("cs_CZ", M(translations.cs_CZ, translations.en_US))
              .translations("fa_IR", M(translations.fa_IR, translations.en_US))
              .translations("id_ID", M(translations.id_ID, translations.en_US))
              .translations("pt_BR", M(translations.pt_BR, translations.en_US))
              .useSanitizeValueStrategy("escapeParameters")
              .determinePreferredLanguage(),
              t.html5Mode({ enabled: !0, requireBase: !1 });
          }
        ]),
          $.directive("textarea", C.a),
          /*"serviceWorker" in navigator &&
            "https:" === location.protocol &&
            window.addEventListener("load", () => {
              navigator.serviceWorker
                .register("service-worker.js")
                .then(e => {
                  console.log("SW registered: ", e);
                })
                .catch(e => {
                  console.log("SW registration failed: ", e);
                });
            }),*/
          e(function() {
            String.prototype.startsWith ||
              Object.defineProperty(String.prototype, "startsWith", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function(e, t) {
                  return (t = t || 0), this.indexOf(e, t) === t;
                }
              }),
              a.a.bootstrap(document, ["webui"]);
          });
      }.call(this, n(1));
  },
  ,
  ,
  function(e, t) {
    angular.module("ui.bootstrap", [
      "ui.bootstrap.tpls",
      "ui.bootstrap.collapse",
      "ui.bootstrap.accordion",
      "ui.bootstrap.alert",
      "ui.bootstrap.bindHtml",
      "ui.bootstrap.buttons",
      "ui.bootstrap.carousel",
      "ui.bootstrap.dateparser",
      "ui.bootstrap.position",
      "ui.bootstrap.datepicker",
      "ui.bootstrap.dropdown",
      "ui.bootstrap.modal",
      "ui.bootstrap.pagination",
      "ui.bootstrap.tooltip",
      "ui.bootstrap.popover",
      "ui.bootstrap.progressbar",
      "ui.bootstrap.rating",
      "ui.bootstrap.tabs",
      "ui.bootstrap.timepicker",
      "ui.bootstrap.transition",
      "ui.bootstrap.typeahead"
    ]),
      angular.module("ui.bootstrap.tpls", [
        "template/accordion/accordion-group.html",
        "template/accordion/accordion.html",
        "template/alert/alert.html",
        "template/carousel/carousel.html",
        "template/carousel/slide.html",
        "template/datepicker/datepicker.html",
        "template/datepicker/day.html",
        "template/datepicker/month.html",
        "template/datepicker/popup.html",
        "template/datepicker/year.html",
        "template/modal/backdrop.html",
        "template/modal/window.html",
        "template/pagination/pager.html",
        "template/pagination/pagination.html",
        "template/tooltip/tooltip-html-popup.html",
        "template/tooltip/tooltip-html-unsafe-popup.html",
        "template/tooltip/tooltip-popup.html",
        "template/tooltip/tooltip-template-popup.html",
        "template/popover/popover-html.html",
        "template/popover/popover-template.html",
        "template/popover/popover.html",
        "template/progressbar/bar.html",
        "template/progressbar/progress.html",
        "template/progressbar/progressbar.html",
        "template/rating/rating.html",
        "template/tabs/tab.html",
        "template/tabs/tabset.html",
        "template/timepicker/timepicker.html",
        "template/typeahead/typeahead-match.html",
        "template/typeahead/typeahead-popup.html"
      ]),
      angular.module("ui.bootstrap.collapse", []).directive("collapse", [
        "$animate",
        function(e) {
          return {
            link: function(t, n, a) {
              function o() {
                n
                  .removeClass("collapse")
                  .addClass("collapsing")
                  .attr("aria-expanded", !0)
                  .attr("aria-hidden", !1),
                  e.addClass(n, "in", { to: { height: n[0].scrollHeight + "px" } }).then(i);
              }
              function i() {
                n.removeClass("collapsing"), n.css({ height: "auto" });
              }
              function r() {
                return n.hasClass("collapse") || n.hasClass("in")
                  ? (n
                      .css({ height: n[0].scrollHeight + "px" })
                      .removeClass("collapse")
                      .addClass("collapsing")
                      .attr("aria-expanded", !1)
                      .attr("aria-hidden", !0),
                    void e.removeClass(n, "in", { to: { height: "0" } }).then(s))
                  : s();
              }
              function s() {
                n.css({ height: "0" }), n.removeClass("collapsing"), n.addClass("collapse");
              }
              t.$watch(a.collapse, function(e) {
                e ? r() : o();
              });
            }
          };
        }
      ]),
      angular
        .module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"])
        .constant("accordionConfig", { closeOthers: !0 })
        .controller("AccordionController", [
          "$scope",
          "$attrs",
          "accordionConfig",
          function(e, t, n) {
            (this.groups = []),
              (this.closeOthers = function(a) {
                (angular.isDefined(t.closeOthers) ? e.$eval(t.closeOthers) : n.closeOthers) &&
                  angular.forEach(this.groups, function(e) {
                    e !== a && (e.isOpen = !1);
                  });
              }),
              (this.addGroup = function(e) {
                var t = this;
                this.groups.push(e),
                  e.$on("$destroy", function(n) {
                    t.removeGroup(e);
                  });
              }),
              (this.removeGroup = function(e) {
                var t = this.groups.indexOf(e);
                -1 !== t && this.groups.splice(t, 1);
              });
          }
        ])
        .directive("accordion", function() {
          return {
            restrict: "EA",
            controller: "AccordionController",
            controllerAs: "accordion",
            transclude: !0,
            replace: !1,
            templateUrl: function(e, t) {
              return t.templateUrl || "template/accordion/accordion.html";
            }
          };
        })
        .directive("accordionGroup", function() {
          return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: function(e, t) {
              return t.templateUrl || "template/accordion/accordion-group.html";
            },
            scope: { heading: "@", isOpen: "=?", isDisabled: "=?" },
            controller: function() {
              this.setHeading = function(e) {
                this.heading = e;
              };
            },
            link: function(e, t, n, a) {
              a.addGroup(e),
                (e.openClass = n.openClass || "panel-open"),
                (e.panelClass = n.panelClass),
                e.$watch("isOpen", function(n) {
                  t.toggleClass(e.openClass, n), n && a.closeOthers(e);
                }),
                (e.toggleOpen = function(t) {
                  e.isDisabled || (t && 32 !== t.which) || (e.isOpen = !e.isOpen);
                });
            }
          };
        })
        .directive("accordionHeading", function() {
          return {
            restrict: "EA",
            transclude: !0,
            template: "",
            replace: !0,
            require: "^accordionGroup",
            link: function(e, t, n, a, o) {
              a.setHeading(o(e, angular.noop));
            }
          };
        })
        .directive("accordionTransclude", function() {
          return {
            require: "^accordionGroup",
            link: function(e, t, n, a) {
              e.$watch(
                function() {
                  return a[n.accordionTransclude];
                },
                function(e) {
                  e && (t.find("span").html(""), t.find("span").append(e));
                }
              );
            }
          };
        }),
      angular
        .module("ui.bootstrap.alert", [])
        .controller("AlertController", [
          "$scope",
          "$attrs",
          function(e, t) {
            (e.closeable = !!t.close), (this.close = e.close);
          }
        ])
        .directive("alert", function() {
          return {
            controller: "AlertController",
            controllerAs: "alert",
            templateUrl: function(e, t) {
              return t.templateUrl || "template/alert/alert.html";
            },
            transclude: !0,
            replace: !0,
            scope: { type: "@", close: "&" }
          };
        })
        .directive("dismissOnTimeout", [
          "$timeout",
          function(e) {
            return {
              require: "alert",
              link: function(t, n, a, o) {
                e(function() {
                  o.close();
                }, parseInt(a.dismissOnTimeout, 10));
              }
            };
          }
        ]),
      angular
        .module("ui.bootstrap.bindHtml", [])
        .value("$bindHtmlUnsafeSuppressDeprecated", !1)
        .directive("bindHtmlUnsafe", [
          "$log",
          "$bindHtmlUnsafeSuppressDeprecated",
          function(e, t) {
            return function(n, a, o) {
              t || e.warn("bindHtmlUnsafe is now deprecated. Use ngBindHtml instead"),
                a.addClass("ng-binding").data("$binding", o.bindHtmlUnsafe),
                n.$watch(o.bindHtmlUnsafe, function(e) {
                  a.html(e || "");
                });
            };
          }
        ]),
      angular
        .module("ui.bootstrap.buttons", [])
        .constant("buttonConfig", { activeClass: "active", toggleEvent: "click" })
        .controller("ButtonsController", [
          "buttonConfig",
          function(e) {
            (this.activeClass = e.activeClass || "active"),
              (this.toggleEvent = e.toggleEvent || "click");
          }
        ])
        .directive("btnRadio", function() {
          return {
            require: ["btnRadio", "ngModel"],
            controller: "ButtonsController",
            controllerAs: "buttons",
            link: function(e, t, n, a) {
              var o = a[0],
                i = a[1];
              t.find("input").css({ display: "none" }),
                (i.$render = function() {
                  t.toggleClass(o.activeClass, angular.equals(i.$modelValue, e.$eval(n.btnRadio)));
                }),
                t.bind(o.toggleEvent, function() {
                  if (!n.disabled) {
                    var a = t.hasClass(o.activeClass);
                    (!a || angular.isDefined(n.uncheckable)) &&
                      e.$apply(function() {
                        i.$setViewValue(a ? null : e.$eval(n.btnRadio)), i.$render();
                      });
                  }
                });
            }
          };
        })
        .directive("btnCheckbox", [
          "$document",
          function(e) {
            return {
              require: ["btnCheckbox", "ngModel"],
              controller: "ButtonsController",
              controllerAs: "button",
              link: function(t, n, a, o) {
                function i() {
                  return s(a.btnCheckboxTrue, !0);
                }
                function r() {
                  return s(a.btnCheckboxFalse, !1);
                }
                function s(e, n) {
                  var a = t.$eval(e);
                  return angular.isDefined(a) ? a : n;
                }
                var l = o[0],
                  c = o[1];
                n.find("input").css({ display: "none" }),
                  (c.$render = function() {
                    n.toggleClass(l.activeClass, angular.equals(c.$modelValue, i()));
                  }),
                  n.bind(l.toggleEvent, function() {
                    a.disabled ||
                      t.$apply(function() {
                        c.$setViewValue(n.hasClass(l.activeClass) ? r() : i()), c.$render();
                      });
                  }),
                  n.on("keypress", function(o) {
                    a.disabled ||
                      32 !== o.which ||
                      e[0].activeElement !== n[0] ||
                      t.$apply(function() {
                        c.$setViewValue(n.hasClass(l.activeClass) ? r() : i()), c.$render();
                      });
                  });
              }
            };
          }
        ]),
      angular
        .module("ui.bootstrap.carousel", [])
        .controller("CarouselController", [
          "$scope",
          "$element",
          "$interval",
          "$animate",
          function(e, t, n, a) {
            function o(t, n, o) {
              g ||
                (angular.extend(t, { direction: o, active: !0 }),
                angular.extend(u.currentSlide || {}, { direction: o, active: !1 }),
                a.enabled() &&
                  !e.noTransition &&
                  !e.$currentTransition &&
                  t.$element &&
                  u.slides.length > 1 &&
                  (t.$element.data(f, t.direction),
                  u.currentSlide &&
                    u.currentSlide.$element &&
                    u.currentSlide.$element.data(f, t.direction),
                  (e.$currentTransition = !0),
                  h
                    ? a.on("addClass", t.$element, function(t, n) {
                        "close" === n && ((e.$currentTransition = null), a.off("addClass", t));
                      })
                    : t.$element.one("$animate:close", function() {
                        e.$currentTransition = null;
                      })),
                (u.currentSlide = t),
                (m = n),
                r());
            }
            function i(e) {
              if (angular.isUndefined(p[e].index)) return p[e];
              var t;
              for (p.length, t = 0; t < p.length; ++t) if (p[t].index == e) return p[t];
            }
            function r() {
              s();
              var t = +e.interval;
              !isNaN(t) && t > 0 && (c = n(l, t));
            }
            function s() {
              c && (n.cancel(c), (c = null));
            }
            function l() {
              var t = +e.interval;
              d && !isNaN(t) && t > 0 && p.length ? e.next() : e.pause();
            }
            var c,
              d,
              u = this,
              p = (u.slides = e.slides = []),
              h = angular.version.minor >= 4,
              f = "uib-slideDirection",
              m = -1;
            u.currentSlide = null;
            var g = !1;
            (u.select = e.select = function(t, n) {
              var a = e.indexOfSlide(t);
              void 0 === n && (n = a > u.getCurrentIndex() ? "next" : "prev"),
                t && t !== u.currentSlide && !e.$currentTransition && o(t, a, n);
            }),
              e.$on("$destroy", function() {
                g = !0;
              }),
              (u.getCurrentIndex = function() {
                return u.currentSlide && angular.isDefined(u.currentSlide.index)
                  ? +u.currentSlide.index
                  : m;
              }),
              (e.indexOfSlide = function(e) {
                return angular.isDefined(e.index) ? +e.index : p.indexOf(e);
              }),
              (e.next = function() {
                var t = (u.getCurrentIndex() + 1) % p.length;
                return 0 === t && e.noWrap() ? void e.pause() : u.select(i(t), "next");
              }),
              (e.prev = function() {
                var t = u.getCurrentIndex() - 1 < 0 ? p.length - 1 : u.getCurrentIndex() - 1;
                return e.noWrap() && t === p.length - 1 ? void e.pause() : u.select(i(t), "prev");
              }),
              (e.isActive = function(e) {
                return u.currentSlide === e;
              }),
              e.$watch("interval", r),
              e.$on("$destroy", s),
              (e.play = function() {
                d || ((d = !0), r());
              }),
              (e.pause = function() {
                e.noPause || ((d = !1), s());
              }),
              (u.addSlide = function(t, n) {
                (t.$element = n),
                  p.push(t),
                  1 === p.length || t.active
                    ? (u.select(p[p.length - 1]), 1 == p.length && e.play())
                    : (t.active = !1);
              }),
              (u.removeSlide = function(e) {
                angular.isDefined(e.index) &&
                  p.sort(function(e, t) {
                    return +e.index > +t.index;
                  });
                var t = p.indexOf(e);
                p.splice(t, 1),
                  p.length > 0 && e.active
                    ? t >= p.length
                      ? u.select(p[t - 1])
                      : u.select(p[t])
                    : m > t && m--,
                  0 === p.length && (u.currentSlide = null);
              }),
              e.$watch("noTransition", function(e) {
                t.data("uib-noTransition", e);
              });
          }
        ])
        .directive("carousel", [
          function() {
            return {
              restrict: "EA",
              transclude: !0,
              replace: !0,
              controller: "CarouselController",
              controllerAs: "carousel",
              require: "carousel",
              templateUrl: function(e, t) {
                return t.templateUrl || "template/carousel/carousel.html";
              },
              scope: { interval: "=", noTransition: "=", noPause: "=", noWrap: "&" }
            };
          }
        ])
        .directive("slide", function() {
          return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: function(e, t) {
              return t.templateUrl || "template/carousel/slide.html";
            },
            scope: { active: "=?", actual: "=?", index: "=?" },
            link: function(e, t, n, a) {
              a.addSlide(e, t),
                e.$on("$destroy", function() {
                  a.removeSlide(e);
                }),
                e.$watch("active", function(t) {
                  t && a.select(e);
                });
            }
          };
        })
        .animation(".item", [
          "$injector",
          "$animate",
          function(e, t) {
            function n(e, t, n) {
              e.removeClass(t), n && n();
            }
            var a = "uib-noTransition",
              o = "uib-slideDirection",
              i = null;
            return (
              e.has("$animateCss") && (i = e.get("$animateCss")),
              {
                beforeAddClass: function(e, r, s) {
                  if ("active" == r && e.parent() && !e.parent().data(a)) {
                    var l = !1,
                      c = e.data(o),
                      d = "next" == c ? "left" : "right",
                      u = n.bind(this, e, d + " " + c, s);
                    return (
                      e.addClass(c),
                      i
                        ? i(e, { addClass: d })
                            .start()
                            .done(u)
                        : t.addClass(e, d).then(function() {
                            l || u(), s();
                          }),
                      function() {
                        l = !0;
                      }
                    );
                  }
                  s();
                },
                beforeRemoveClass: function(e, r, s) {
                  if ("active" === r && e.parent() && !e.parent().data(a)) {
                    var l = !1,
                      c = "next" == e.data(o) ? "left" : "right",
                      d = n.bind(this, e, c, s);
                    return (
                      i
                        ? i(e, { addClass: c })
                            .start()
                            .done(d)
                        : t.addClass(e, c).then(function() {
                            l || d(), s();
                          }),
                      function() {
                        l = !0;
                      }
                    );
                  }
                  s();
                }
              }
            );
          }
        ]),
      angular.module("ui.bootstrap.dateparser", []).service("dateParser", [
        "$log",
        "$locale",
        "orderByFilter",
        function(e, t, n) {
          function a(e) {
            var t = [],
              a = e.split("");
            return (
              angular.forEach(i, function(n, o) {
                var i = e.indexOf(o);
                if (i > -1) {
                  (e = e.split("")), (a[i] = "(" + n.regex + ")"), (e[i] = "$");
                  for (var r = i + 1, s = i + o.length; s > r; r++) (a[r] = ""), (e[r] = "$");
                  (e = e.join("")), t.push({ index: i, apply: n.apply });
                }
              }),
              { regex: new RegExp("^" + a.join("") + "$"), map: n(t, "index") }
            );
          }
          var o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
          this.parsers = {};
          var i = {
            yyyy: {
              regex: "\\d{4}",
              apply: function(e) {
                this.year = +e;
              }
            },
            yy: {
              regex: "\\d{2}",
              apply: function(e) {
                this.year = +e + 2e3;
              }
            },
            y: {
              regex: "\\d{1,4}",
              apply: function(e) {
                this.year = +e;
              }
            },
            MMMM: {
              regex: t.DATETIME_FORMATS.MONTH.join("|"),
              apply: function(e) {
                this.month = t.DATETIME_FORMATS.MONTH.indexOf(e);
              }
            },
            MMM: {
              regex: t.DATETIME_FORMATS.SHORTMONTH.join("|"),
              apply: function(e) {
                this.month = t.DATETIME_FORMATS.SHORTMONTH.indexOf(e);
              }
            },
            MM: {
              regex: "0[1-9]|1[0-2]",
              apply: function(e) {
                this.month = e - 1;
              }
            },
            M: {
              regex: "[1-9]|1[0-2]",
              apply: function(e) {
                this.month = e - 1;
              }
            },
            dd: {
              regex: "[0-2][0-9]{1}|3[0-1]{1}",
              apply: function(e) {
                this.date = +e;
              }
            },
            d: {
              regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
              apply: function(e) {
                this.date = +e;
              }
            },
            EEEE: { regex: t.DATETIME_FORMATS.DAY.join("|") },
            EEE: { regex: t.DATETIME_FORMATS.SHORTDAY.join("|") },
            HH: {
              regex: "(?:0|1)[0-9]|2[0-3]",
              apply: function(e) {
                this.hours = +e;
              }
            },
            hh: {
              regex: "0[0-9]|1[0-2]",
              apply: function(e) {
                this.hours = +e;
              }
            },
            H: {
              regex: "1?[0-9]|2[0-3]",
              apply: function(e) {
                this.hours = +e;
              }
            },
            h: {
              regex: "[0-9]|1[0-2]",
              apply: function(e) {
                this.hours = +e;
              }
            },
            mm: {
              regex: "[0-5][0-9]",
              apply: function(e) {
                this.minutes = +e;
              }
            },
            m: {
              regex: "[0-9]|[1-5][0-9]",
              apply: function(e) {
                this.minutes = +e;
              }
            },
            sss: {
              regex: "[0-9][0-9][0-9]",
              apply: function(e) {
                this.milliseconds = +e;
              }
            },
            ss: {
              regex: "[0-5][0-9]",
              apply: function(e) {
                this.seconds = +e;
              }
            },
            s: {
              regex: "[0-9]|[1-5][0-9]",
              apply: function(e) {
                this.seconds = +e;
              }
            },
            a: {
              regex: t.DATETIME_FORMATS.AMPMS.join("|"),
              apply: function(e) {
                12 === this.hours && (this.hours = 0), "PM" === e && (this.hours += 12);
              }
            }
          };
          this.parse = function(n, i, r) {
            if (!angular.isString(n) || !i) return n;
            (i = (i = t.DATETIME_FORMATS[i] || i).replace(o, "\\$&")),
              this.parsers[i] || (this.parsers[i] = a(i));
            var s = this.parsers[i],
              l = s.regex,
              c = s.map,
              d = n.match(l);
            if (d && d.length) {
              var u, p;
              angular.isDate(r) && !isNaN(r.getTime())
                ? (u = {
                    year: r.getFullYear(),
                    month: r.getMonth(),
                    date: r.getDate(),
                    hours: r.getHours(),
                    minutes: r.getMinutes(),
                    seconds: r.getSeconds(),
                    milliseconds: r.getMilliseconds()
                  })
                : (r && e.warn("dateparser:", "baseDate is not a valid date"),
                  (u = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0
                  }));
              for (var h = 1, f = d.length; f > h; h++) {
                var m = c[h - 1];
                m.apply && m.apply.call(u, d[h]);
              }
              return (
                (function(e, t, n) {
                  return (
                    !(1 > n) &&
                    (1 === t && n > 28
                      ? 29 === n && ((e % 4 == 0 && e % 100 != 0) || e % 400 == 0)
                      : (3 !== t && 5 !== t && 8 !== t && 10 !== t) || 31 > n)
                  );
                })(u.year, u.month, u.date) &&
                  (p = new Date(
                    u.year,
                    u.month,
                    u.date,
                    u.hours,
                    u.minutes,
                    u.seconds,
                    u.milliseconds || 0
                  )),
                p
              );
            }
          };
        }
      ]),
      angular.module("ui.bootstrap.position", []).factory("$position", [
        "$document",
        "$window",
        function(e, t) {
          function n(e) {
            return (
              "static" ===
              ((function(e, n) {
                return e.currentStyle
                  ? e.currentStyle[n]
                  : t.getComputedStyle
                    ? t.getComputedStyle(e)[n]
                    : e.style[n];
              })(e, "position") || "static")
            );
          }
          var a = function(t) {
            for (var a = e[0], o = t.offsetParent || a; o && o !== a && n(o); ) o = o.offsetParent;
            return o || a;
          };
          return {
            position: function(t) {
              var n = this.offset(t),
                o = { top: 0, left: 0 },
                i = a(t[0]);
              i != e[0] &&
                (((o = this.offset(angular.element(i))).top += i.clientTop - i.scrollTop),
                (o.left += i.clientLeft - i.scrollLeft));
              var r = t[0].getBoundingClientRect();
              return {
                width: r.width || t.prop("offsetWidth"),
                height: r.height || t.prop("offsetHeight"),
                top: n.top - o.top,
                left: n.left - o.left
              };
            },
            offset: function(n) {
              var a = n[0].getBoundingClientRect();
              return {
                width: a.width || n.prop("offsetWidth"),
                height: a.height || n.prop("offsetHeight"),
                top: a.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                left: a.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
              };
            },
            positionElements: function(e, t, n, a) {
              var o,
                i,
                r,
                s,
                l = n.split("-"),
                c = l[0],
                d = l[1] || "center";
              (o = a ? this.offset(e) : this.position(e)),
                (i = t.prop("offsetWidth")),
                (r = t.prop("offsetHeight"));
              var u = {
                  center: function() {
                    return o.left + o.width / 2 - i / 2;
                  },
                  left: function() {
                    return o.left;
                  },
                  right: function() {
                    return o.left + o.width;
                  }
                },
                p = {
                  center: function() {
                    return o.top + o.height / 2 - r / 2;
                  },
                  top: function() {
                    return o.top;
                  },
                  bottom: function() {
                    return o.top + o.height;
                  }
                };
              switch (c) {
                case "right":
                  s = { top: p[d](), left: u[c]() };
                  break;
                case "left":
                  s = { top: p[d](), left: o.left - i };
                  break;
                case "bottom":
                  s = { top: p[c](), left: u[d]() };
                  break;
                default:
                  s = { top: o.top - r, left: u[d]() };
              }
              return s;
            }
          };
        }
      ]),
      angular
        .module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"])
        .value("$datepickerSuppressError", !1)
        .constant("datepickerConfig", {
          formatDay: "dd",
          formatMonth: "MMMM",
          formatYear: "yyyy",
          formatDayHeader: "EEE",
          formatDayTitle: "MMMM yyyy",
          formatMonthTitle: "yyyy",
          datepickerMode: "day",
          minMode: "day",
          maxMode: "year",
          showWeeks: !0,
          startingDay: 0,
          yearRange: 20,
          minDate: null,
          maxDate: null,
          shortcutPropagation: !1
        })
        .controller("DatepickerController", [
          "$scope",
          "$attrs",
          "$parse",
          "$interpolate",
          "$log",
          "dateFilter",
          "datepickerConfig",
          "$datepickerSuppressError",
          function(e, t, n, a, o, i, r, s) {
            var l = this,
              c = { $setViewValue: angular.noop };
            (this.modes = ["day", "month", "year"]),
              angular.forEach(
                [
                  "formatDay",
                  "formatMonth",
                  "formatYear",
                  "formatDayHeader",
                  "formatDayTitle",
                  "formatMonthTitle",
                  "showWeeks",
                  "startingDay",
                  "yearRange",
                  "shortcutPropagation"
                ],
                function(n, o) {
                  l[n] = angular.isDefined(t[n])
                    ? 6 > o
                      ? a(t[n])(e.$parent)
                      : e.$parent.$eval(t[n])
                    : r[n];
                }
              ),
              angular.forEach(["minDate", "maxDate"], function(a) {
                t[a]
                  ? e.$parent.$watch(n(t[a]), function(e) {
                      (l[a] = e ? new Date(e) : null), l.refreshView();
                    })
                  : (l[a] = r[a] ? new Date(r[a]) : null);
              }),
              angular.forEach(["minMode", "maxMode"], function(a) {
                t[a]
                  ? e.$parent.$watch(n(t[a]), function(n) {
                      (l[a] = angular.isDefined(n) ? n : t[a]),
                        (e[a] = l[a]),
                        (("minMode" == a &&
                          l.modes.indexOf(e.datepickerMode) < l.modes.indexOf(l[a])) ||
                          ("maxMode" == a &&
                            l.modes.indexOf(e.datepickerMode) > l.modes.indexOf(l[a]))) &&
                          (e.datepickerMode = l[a]);
                    })
                  : ((l[a] = r[a] || null), (e[a] = l[a]));
              }),
              (e.datepickerMode = e.datepickerMode || r.datepickerMode),
              (e.uniqueId = "datepicker-" + e.$id + "-" + Math.floor(1e4 * Math.random())),
              angular.isDefined(t.initDate)
                ? ((this.activeDate = e.$parent.$eval(t.initDate) || new Date()),
                  e.$parent.$watch(t.initDate, function(e) {
                    e &&
                      (c.$isEmpty(c.$modelValue) || c.$invalid) &&
                      ((l.activeDate = e), l.refreshView());
                  }))
                : (this.activeDate = new Date()),
              (e.isActive = function(t) {
                return 0 === l.compare(t.date, l.activeDate) && ((e.activeDateId = t.uid), !0);
              }),
              (this.init = function(e) {
                (c = e).$render = function() {
                  l.render();
                };
              }),
              (this.render = function() {
                if (c.$viewValue) {
                  var e = new Date(c.$viewValue);
                  !isNaN(e)
                    ? (this.activeDate = e)
                    : s ||
                      o.error(
                        'Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'
                      );
                }
                this.refreshView();
              }),
              (this.refreshView = function() {
                if (this.element) {
                  this._refreshView();
                  var e = c.$viewValue ? new Date(c.$viewValue) : null;
                  c.$setValidity("dateDisabled", !e || (this.element && !this.isDisabled(e)));
                }
              }),
              (this.createDateObject = function(e, t) {
                var n = c.$viewValue ? new Date(c.$viewValue) : null;
                return {
                  date: e,
                  label: i(e, t),
                  selected: n && 0 === this.compare(e, n),
                  disabled: this.isDisabled(e),
                  current: 0 === this.compare(e, new Date()),
                  customClass: this.customClass(e)
                };
              }),
              (this.isDisabled = function(n) {
                return (
                  (this.minDate && this.compare(n, this.minDate) < 0) ||
                  (this.maxDate && this.compare(n, this.maxDate) > 0) ||
                  (t.dateDisabled && e.dateDisabled({ date: n, mode: e.datepickerMode }))
                );
              }),
              (this.customClass = function(t) {
                return e.customClass({ date: t, mode: e.datepickerMode });
              }),
              (this.split = function(e, t) {
                for (var n = []; e.length > 0; ) n.push(e.splice(0, t));
                return n;
              }),
              (this.fixTimeZone = function(e) {
                var t = e.getHours();
                e.setHours(23 === t ? t + 2 : 0);
              }),
              (e.select = function(t) {
                if (e.datepickerMode === l.minMode) {
                  var n = c.$viewValue ? new Date(c.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                  n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
                    c.$setViewValue(n),
                    c.$render();
                } else
                  (l.activeDate = t),
                    (e.datepickerMode = l.modes[l.modes.indexOf(e.datepickerMode) - 1]);
              }),
              (e.move = function(e) {
                var t = l.activeDate.getFullYear() + e * (l.step.years || 0),
                  n = l.activeDate.getMonth() + e * (l.step.months || 0);
                l.activeDate.setFullYear(t, n, 1), l.refreshView();
              }),
              (e.toggleMode = function(t) {
                (t = t || 1),
                  (e.datepickerMode === l.maxMode && 1 === t) ||
                    (e.datepickerMode === l.minMode && -1 === t) ||
                    (e.datepickerMode = l.modes[l.modes.indexOf(e.datepickerMode) + t]);
              }),
              (e.keys = {
                13: "enter",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down"
              });
            var d = function() {
              l.element[0].focus();
            };
            e.$on("datepicker.focus", d),
              (e.keydown = function(t) {
                var n = e.keys[t.which];
                if (n && !t.shiftKey && !t.altKey)
                  if (
                    (t.preventDefault(),
                    l.shortcutPropagation || t.stopPropagation(),
                    "enter" === n || "space" === n)
                  ) {
                    if (l.isDisabled(l.activeDate)) return;
                    e.select(l.activeDate), d();
                  } else
                    !t.ctrlKey || ("up" !== n && "down" !== n)
                      ? (l.handleKeyDown(n, t), l.refreshView())
                      : (e.toggleMode("up" === n ? 1 : -1), d());
              });
          }
        ])
        .directive("datepicker", function() {
          return {
            restrict: "EA",
            replace: !0,
            templateUrl: function(e, t) {
              return t.templateUrl || "template/datepicker/datepicker.html";
            },
            scope: {
              datepickerMode: "=?",
              dateDisabled: "&",
              customClass: "&",
              shortcutPropagation: "&?"
            },
            require: ["datepicker", "^ngModel"],
            controller: "DatepickerController",
            controllerAs: "datepicker",
            link: function(e, t, n, a) {
              var o = a[0],
                i = a[1];
              o.init(i);
            }
          };
        })
        .directive("daypicker", [
          "dateFilter",
          function(e) {
            return {
              restrict: "EA",
              replace: !0,
              templateUrl: "template/datepicker/day.html",
              require: "^datepicker",
              link: function(t, n, a, o) {
                function i(e, t) {
                  return 1 !== t || e % 4 != 0 || (e % 100 == 0 && e % 400 != 0) ? s[t] : 29;
                }
                function r(e) {
                  var t = new Date(e);
                  t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                  var n = t.getTime();
                  return (
                    t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
                  );
                }
                (t.showWeeks = o.showWeeks), (o.step = { months: 1 }), (o.element = n);
                var s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                (o._refreshView = function() {
                  var n = o.activeDate.getFullYear(),
                    a = o.activeDate.getMonth(),
                    i = new Date(n, a, 1),
                    s = o.startingDay - i.getDay(),
                    l = s > 0 ? 7 - s : -s,
                    c = new Date(i);
                  l > 0 && c.setDate(1 - l);
                  for (
                    var d = (function(e, t) {
                        for (var n, a = new Array(t), i = new Date(e), r = 0; t > r; )
                          (n = new Date(i)),
                            o.fixTimeZone(n),
                            (a[r++] = n),
                            i.setDate(i.getDate() + 1);
                        return a;
                      })(c, 42),
                      u = 0;
                    42 > u;
                    u++
                  )
                    d[u] = angular.extend(o.createDateObject(d[u], o.formatDay), {
                      secondary: d[u].getMonth() !== a,
                      uid: t.uniqueId + "-" + u
                    });
                  t.labels = new Array(7);
                  for (var p = 0; 7 > p; p++)
                    t.labels[p] = {
                      abbr: e(d[p].date, o.formatDayHeader),
                      full: e(d[p].date, "EEEE")
                    };
                  if (
                    ((t.title = e(o.activeDate, o.formatDayTitle)),
                    (t.rows = o.split(d, 7)),
                    t.showWeeks)
                  ) {
                    t.weekNumbers = [];
                    for (var h = (11 - o.startingDay) % 7, f = t.rows.length, m = 0; f > m; m++)
                      t.weekNumbers.push(r(t.rows[m][h].date));
                  }
                }),
                  (o.compare = function(e, t) {
                    return (
                      new Date(e.getFullYear(), e.getMonth(), e.getDate()) -
                      new Date(t.getFullYear(), t.getMonth(), t.getDate())
                    );
                  }),
                  (o.handleKeyDown = function(e, t) {
                    var n = o.activeDate.getDate();
                    if ("left" === e) n -= 1;
                    else if ("up" === e) n -= 7;
                    else if ("right" === e) n += 1;
                    else if ("down" === e) n += 7;
                    else if ("pageup" === e || "pagedown" === e) {
                      var a = o.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
                      o.activeDate.setMonth(a, 1),
                        (n = Math.min(i(o.activeDate.getFullYear(), o.activeDate.getMonth()), n));
                    } else
                      "home" === e
                        ? (n = 1)
                        : "end" === e &&
                          (n = i(o.activeDate.getFullYear(), o.activeDate.getMonth()));
                    o.activeDate.setDate(n);
                  }),
                  o.refreshView();
              }
            };
          }
        ])
        .directive("monthpicker", [
          "dateFilter",
          function(e) {
            return {
              restrict: "EA",
              replace: !0,
              templateUrl: "template/datepicker/month.html",
              require: "^datepicker",
              link: function(t, n, a, o) {
                (o.step = { years: 1 }),
                  (o.element = n),
                  (o._refreshView = function() {
                    for (
                      var n, a = new Array(12), i = o.activeDate.getFullYear(), r = 0;
                      12 > r;
                      r++
                    )
                      (n = new Date(i, r, 1)),
                        o.fixTimeZone(n),
                        (a[r] = angular.extend(o.createDateObject(n, o.formatMonth), {
                          uid: t.uniqueId + "-" + r
                        }));
                    (t.title = e(o.activeDate, o.formatMonthTitle)), (t.rows = o.split(a, 3));
                  }),
                  (o.compare = function(e, t) {
                    return (
                      new Date(e.getFullYear(), e.getMonth()) -
                      new Date(t.getFullYear(), t.getMonth())
                    );
                  }),
                  (o.handleKeyDown = function(e, t) {
                    var n = o.activeDate.getMonth();
                    if ("left" === e) n -= 1;
                    else if ("up" === e) n -= 3;
                    else if ("right" === e) n += 1;
                    else if ("down" === e) n += 3;
                    else if ("pageup" === e || "pagedown" === e) {
                      var a = o.activeDate.getFullYear() + ("pageup" === e ? -1 : 1);
                      o.activeDate.setFullYear(a);
                    } else "home" === e ? (n = 0) : "end" === e && (n = 11);
                    o.activeDate.setMonth(n);
                  }),
                  o.refreshView();
              }
            };
          }
        ])
        .directive("yearpicker", [
          "dateFilter",
          function(e) {
            return {
              restrict: "EA",
              replace: !0,
              templateUrl: "template/datepicker/year.html",
              require: "^datepicker",
              link: function(e, t, n, a) {
                function o(e) {
                  return parseInt((e - 1) / i, 10) * i + 1;
                }
                var i = a.yearRange;
                (a.step = { years: i }),
                  (a.element = t),
                  (a._refreshView = function() {
                    for (
                      var t, n = new Array(i), r = 0, s = o(a.activeDate.getFullYear());
                      i > r;
                      r++
                    )
                      (t = new Date(s + r, 0, 1)),
                        a.fixTimeZone(t),
                        (n[r] = angular.extend(a.createDateObject(t, a.formatYear), {
                          uid: e.uniqueId + "-" + r
                        }));
                    (e.title = [n[0].label, n[i - 1].label].join(" - ")), (e.rows = a.split(n, 5));
                  }),
                  (a.compare = function(e, t) {
                    return e.getFullYear() - t.getFullYear();
                  }),
                  (a.handleKeyDown = function(e, t) {
                    var n = a.activeDate.getFullYear();
                    "left" === e
                      ? (n -= 1)
                      : "up" === e
                        ? (n -= 5)
                        : "right" === e
                          ? (n += 1)
                          : "down" === e
                            ? (n += 5)
                            : "pageup" === e || "pagedown" === e
                              ? (n += ("pageup" === e ? -1 : 1) * a.step.years)
                              : "home" === e
                                ? (n = o(a.activeDate.getFullYear()))
                                : "end" === e && (n = o(a.activeDate.getFullYear()) + i - 1),
                      a.activeDate.setFullYear(n);
                  }),
                  a.refreshView();
              }
            };
          }
        ])
        .constant("datepickerPopupConfig", {
          datepickerPopup: "yyyy-MM-dd",
          datepickerPopupTemplateUrl: "template/datepicker/popup.html",
          datepickerTemplateUrl: "template/datepicker/datepicker.html",
          html5Types: {
            date: "yyyy-MM-dd",
            "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
            month: "yyyy-MM"
          },
          currentText: "Today",
          clearText: "Clear",
          closeText: "Done",
          closeOnDateSelection: !0,
          appendToBody: !1,
          showButtonBar: !0,
          onOpenFocus: !0
        })
        .directive("datepickerPopup", [
          "$compile",
          "$parse",
          "$document",
          "$rootScope",
          "$position",
          "dateFilter",
          "dateParser",
          "datepickerPopupConfig",
          "$timeout",
          function(e, t, n, a, o, i, r, s, l) {
            return {
              restrict: "EA",
              require: "ngModel",
              scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&",
                customClass: "&"
              },
              link: function(c, d, u, p) {
                function h(e) {
                  return e.replace(/([A-Z])/g, function(e) {
                    return "-" + e.toLowerCase();
                  });
                }
                var f,
                  m = angular.isDefined(u.closeOnDateSelection)
                    ? c.$parent.$eval(u.closeOnDateSelection)
                    : s.closeOnDateSelection,
                  g = angular.isDefined(u.datepickerAppendToBody)
                    ? c.$parent.$eval(u.datepickerAppendToBody)
                    : s.appendToBody,
                  v = angular.isDefined(u.onOpenFocus)
                    ? c.$parent.$eval(u.onOpenFocus)
                    : s.onOpenFocus,
                  b = angular.isDefined(u.datepickerPopupTemplateUrl)
                    ? u.datepickerPopupTemplateUrl
                    : s.datepickerPopupTemplateUrl,
                  w = angular.isDefined(u.datepickerTemplateUrl)
                    ? u.datepickerTemplateUrl
                    : s.datepickerTemplateUrl,
                  y = {};
                (c.showButtonBar = angular.isDefined(u.showButtonBar)
                  ? c.$parent.$eval(u.showButtonBar)
                  : s.showButtonBar),
                  (c.getText = function(e) {
                    return c[e + "Text"] || s[e + "Text"];
                  }),
                  (c.isDisabled = function(e) {
                    return (
                      "today" === e && (e = new Date()),
                      (c.watchData.minDate && c.compare(e, y.minDate) < 0) ||
                        (c.watchData.maxDate && c.compare(e, y.maxDate) > 0)
                    );
                  }),
                  (c.compare = function(e, t) {
                    return (
                      new Date(e.getFullYear(), e.getMonth(), e.getDate()) -
                      new Date(t.getFullYear(), t.getMonth(), t.getDate())
                    );
                  });
                var k = !1;
                if (
                  (s.html5Types[u.type]
                    ? ((f = s.html5Types[u.type]), (k = !0))
                    : ((f = u.datepickerPopup || s.datepickerPopup),
                      u.$observe("datepickerPopup", function(e, t) {
                        var n = e || s.datepickerPopup;
                        if (n !== f && ((f = n), (p.$modelValue = null), !f))
                          throw new Error("datepickerPopup must have a date format specified.");
                      })),
                  !f)
                )
                  throw new Error("datepickerPopup must have a date format specified.");
                if (k && u.datepickerPopup)
                  throw new Error("HTML5 date input types do not support custom formats.");
                var S = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                S.attr({
                  "ng-model": "date",
                  "ng-change": "dateSelection(date)",
                  "template-url": b
                });
                var T = angular.element(S.children()[0]);
                if (
                  (T.attr("template-url", w),
                  k &&
                    "month" === u.type &&
                    (T.attr("datepicker-mode", '"month"'), T.attr("min-mode", "month")),
                  u.datepickerOptions)
                ) {
                  var C = c.$parent.$eval(u.datepickerOptions);
                  C &&
                    C.initDate &&
                    ((c.initDate = C.initDate), T.attr("init-date", "initDate"), delete C.initDate),
                    angular.forEach(C, function(e, t) {
                      T.attr(h(t), e);
                    });
                }
                (c.watchData = {}),
                  angular.forEach(
                    [
                      "minMode",
                      "maxMode",
                      "minDate",
                      "maxDate",
                      "datepickerMode",
                      "initDate",
                      "shortcutPropagation"
                    ],
                    function(e) {
                      if (u[e]) {
                        var n = t(u[e]);
                        if (
                          (c.$parent.$watch(n, function(t) {
                            (c.watchData[e] = t),
                              ("minDate" === e || "maxDate" === e) && (y[e] = new Date(t));
                          }),
                          T.attr(h(e), "watchData." + e),
                          "datepickerMode" === e)
                        ) {
                          var a = n.assign;
                          c.$watch("watchData." + e, function(e, t) {
                            angular.isFunction(a) && e !== t && a(c.$parent, e);
                          });
                        }
                      }
                    }
                  ),
                  u.dateDisabled &&
                    T.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"),
                  u.showWeeks && T.attr("show-weeks", u.showWeeks),
                  u.customClass &&
                    T.attr("custom-class", "customClass({ date: date, mode: mode })"),
                  k
                    ? p.$formatters.push(function(e) {
                        return (c.date = e), e;
                      })
                    : ((p.$$parserName = "date"),
                      (p.$validators.date = function(e, t) {
                        var n = e || t;
                        if (!u.ngRequired && !n) return !0;
                        if ((angular.isNumber(n) && (n = new Date(n)), n)) {
                          if (angular.isDate(n) && !isNaN(n)) return !0;
                          if (angular.isString(n)) {
                            var a = r.parse(n, f);
                            return !isNaN(a);
                          }
                          return !1;
                        }
                        return !0;
                      }),
                      p.$parsers.unshift(function(e) {
                        if ((angular.isNumber(e) && (e = new Date(e)), !e)) return null;
                        if (angular.isDate(e) && !isNaN(e)) return e;
                        if (angular.isString(e)) {
                          var t = r.parse(e, f, c.date);
                          return isNaN(t) ? void 0 : t;
                        }
                      }),
                      p.$formatters.push(function(e) {
                        return (c.date = e), p.$isEmpty(e) ? e : i(e, f);
                      })),
                  (c.dateSelection = function(e) {
                    angular.isDefined(e) && (c.date = e);
                    var t = c.date ? i(c.date, f) : null;
                    d.val(t), p.$setViewValue(t), m && ((c.isOpen = !1), d[0].focus());
                  }),
                  p.$viewChangeListeners.push(function() {
                    c.date = r.parse(p.$viewValue, f, c.date);
                  });
                var P = function(e) {
                    !c.isOpen ||
                      d[0].contains(e.target) ||
                      S[0].contains(e.target) ||
                      c.$apply(function() {
                        c.isOpen = !1;
                      });
                  },
                  A = function(e) {
                    27 === e.which && c.isOpen
                      ? (e.preventDefault(),
                        e.stopPropagation(),
                        c.$apply(function() {
                          c.isOpen = !1;
                        }),
                        d[0].focus())
                      : 40 !== e.which ||
                        c.isOpen ||
                        (e.preventDefault(),
                        e.stopPropagation(),
                        c.$apply(function() {
                          c.isOpen = !0;
                        }));
                  };
                d.bind("keydown", A),
                  (c.keydown = function(e) {
                    27 === e.which && ((c.isOpen = !1), d[0].focus());
                  }),
                  c.$watch("isOpen", function(e) {
                    e
                      ? ((c.position = g ? o.offset(d) : o.position(d)),
                        (c.position.top = c.position.top + d.prop("offsetHeight")),
                        l(
                          function() {
                            v && c.$broadcast("datepicker.focus"), n.bind("click", P);
                          },
                          0,
                          !1
                        ))
                      : n.unbind("click", P);
                  }),
                  (c.select = function(e) {
                    if ("today" === e) {
                      var t = new Date();
                      angular.isDate(c.date)
                        ? (e = new Date(c.date)).setFullYear(
                            t.getFullYear(),
                            t.getMonth(),
                            t.getDate()
                          )
                        : (e = new Date(t.setHours(0, 0, 0, 0)));
                    }
                    c.dateSelection(e);
                  }),
                  (c.close = function() {
                    (c.isOpen = !1), d[0].focus();
                  });
                var x = e(S)(c);
                S.remove(),
                  g ? n.find("body").append(x) : d.after(x),
                  c.$on("$destroy", function() {
                    !0 === c.isOpen &&
                      (a.$$phase ||
                        c.$apply(function() {
                          c.isOpen = !1;
                        })),
                      x.remove(),
                      d.unbind("keydown", A),
                      n.unbind("click", P);
                  });
              }
            };
          }
        ])
        .directive("datepickerPopupWrap", function() {
          return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            templateUrl: function(e, t) {
              return t.templateUrl || "template/datepicker/popup.html";
            }
          };
        }),
      angular
        .module("ui.bootstrap.dropdown", ["ui.bootstrap.position"])
        .constant("dropdownConfig", { openClass: "open" })
        .service("dropdownService", [
          "$document",
          "$rootScope",
          function(e, t) {
            var n = null;
            (this.open = function(t) {
              n || (e.bind("click", a), e.bind("keydown", o)),
                n && n !== t && (n.isOpen = !1),
                (n = t);
            }),
              (this.close = function(t) {
                n === t && ((n = null), e.unbind("click", a), e.unbind("keydown", o));
              });
            var a = function(e) {
                if (n && (!e || "disabled" !== n.getAutoClose())) {
                  var a = n.getToggleElement();
                  if (!(e && a && a[0].contains(e.target))) {
                    var o = n.getDropdownElement();
                    (e && "outsideClick" === n.getAutoClose() && o && o[0].contains(e.target)) ||
                      ((n.isOpen = !1), t.$$phase || n.$apply());
                  }
                }
              },
              o = function(e) {
                27 === e.which
                  ? (n.focusToggleElement(), a())
                  : n.isKeynavEnabled() &&
                    /(38|40)/.test(e.which) &&
                    n.isOpen &&
                    (e.preventDefault(), e.stopPropagation(), n.focusDropdownEntry(e.which));
              };
          }
        ])
        .controller("DropdownController", [
          "$scope",
          "$attrs",
          "$parse",
          "dropdownConfig",
          "dropdownService",
          "$animate",
          "$position",
          "$document",
          "$compile",
          "$templateRequest",
          function(e, t, n, a, o, i, r, s, l, c) {
            var d,
              u,
              p = this,
              h = e.$new(),
              f = a.openClass,
              m = angular.noop,
              g = t.onToggle ? n(t.onToggle) : angular.noop,
              v = !1,
              b = !1,
              w = s.find("body");
            (this.init = function(a) {
              (p.$element = a),
                t.isOpen &&
                  ((u = n(t.isOpen)),
                  (m = u.assign),
                  e.$watch(u, function(e) {
                    h.isOpen = !!e;
                  })),
                (v = angular.isDefined(t.dropdownAppendToBody)),
                (b = angular.isDefined(t.keyboardNav)),
                v &&
                  p.dropdownMenu &&
                  (w.append(p.dropdownMenu),
                  w.addClass("dropdown"),
                  a.on("$destroy", function() {
                    p.dropdownMenu.remove();
                  }));
            }),
              (this.toggle = function(e) {
                return (h.isOpen = arguments.length ? !!e : !h.isOpen);
              }),
              (this.isOpen = function() {
                return h.isOpen;
              }),
              (h.getToggleElement = function() {
                return p.toggleElement;
              }),
              (h.getAutoClose = function() {
                return t.autoClose || "always";
              }),
              (h.getElement = function() {
                return p.$element;
              }),
              (h.isKeynavEnabled = function() {
                return b;
              }),
              (h.focusDropdownEntry = function(e) {
                var t = p.dropdownMenu
                  ? angular.element(p.dropdownMenu).find("a")
                  : angular
                      .element(p.$element)
                      .find("ul")
                      .eq(0)
                      .find("a");
                switch (e) {
                  case 40:
                    angular.isNumber(p.selectedOption)
                      ? (p.selectedOption =
                          p.selectedOption === t.length - 1
                            ? p.selectedOption
                            : p.selectedOption + 1)
                      : (p.selectedOption = 0);
                    break;
                  case 38:
                    angular.isNumber(p.selectedOption)
                      ? (p.selectedOption = 0 === p.selectedOption ? 0 : p.selectedOption - 1)
                      : (p.selectedOption = t.length - 1);
                }
                t[p.selectedOption].focus();
              }),
              (h.getDropdownElement = function() {
                return p.dropdownMenu;
              }),
              (h.focusToggleElement = function() {
                p.toggleElement && p.toggleElement[0].focus();
              }),
              h.$watch("isOpen", function(t, n) {
                if (v && p.dropdownMenu) {
                  var a = r.positionElements(p.$element, p.dropdownMenu, "bottom-left", !0),
                    s = { top: a.top + "px", display: t ? "block" : "none" };
                  p.dropdownMenu.hasClass("dropdown-menu-right")
                    ? ((s.left = "auto"),
                      (s.right =
                        window.innerWidth - (a.left + p.$element.prop("offsetWidth")) + "px"))
                    : ((s.left = a.left + "px"), (s.right = "auto")),
                    p.dropdownMenu.css(s);
                }
                var u = v ? w : p.$element;
                if (
                  (i[t ? "addClass" : "removeClass"](u, f).then(function() {
                    angular.isDefined(t) && t !== n && g(e, { open: !!t });
                  }),
                  t)
                )
                  p.dropdownMenuTemplateUrl &&
                    c(p.dropdownMenuTemplateUrl).then(function(e) {
                      (d = h.$new()),
                        l(e.trim())(d, function(e) {
                          var t = e;
                          p.dropdownMenu.replaceWith(t), (p.dropdownMenu = t);
                        });
                    }),
                    h.focusToggleElement(),
                    o.open(h);
                else {
                  if (p.dropdownMenuTemplateUrl) {
                    d && d.$destroy();
                    var b = angular.element('<ul class="dropdown-menu"></ul>');
                    p.dropdownMenu.replaceWith(b), (p.dropdownMenu = b);
                  }
                  o.close(h), (p.selectedOption = null);
                }
                angular.isFunction(m) && m(e, t);
              }),
              e.$on("$locationChangeSuccess", function() {
                "disabled" !== h.getAutoClose() && (h.isOpen = !1);
              });
            var y = e.$on("$destroy", function() {
              h.$destroy();
            });
            h.$on("$destroy", y);
          }
        ])
        .directive("dropdown", function() {
          return {
            controller: "DropdownController",
            link: function(e, t, n, a) {
              a.init(t), t.addClass("dropdown");
            }
          };
        })
        .directive("dropdownMenu", function() {
          return {
            restrict: "AC",
            require: "?^dropdown",
            link: function(e, t, n, a) {
              if (a) {
                var o = n.templateUrl;
                o && (a.dropdownMenuTemplateUrl = o), a.dropdownMenu || (a.dropdownMenu = t);
              }
            }
          };
        })
        .directive("keyboardNav", function() {
          return {
            restrict: "A",
            require: "?^dropdown",
            link: function(e, t, n, a) {
              t.bind("keydown", function(e) {
                if (-1 !== [38, 40].indexOf(e.which)) {
                  e.preventDefault(), e.stopPropagation();
                  var t = a.dropdownMenu.find("a");
                  switch (e.which) {
                    case 40:
                      angular.isNumber(a.selectedOption)
                        ? (a.selectedOption =
                            a.selectedOption === t.length - 1
                              ? a.selectedOption
                              : a.selectedOption + 1)
                        : (a.selectedOption = 0);
                      break;
                    case 38:
                      angular.isNumber(a.selectedOption)
                        ? (a.selectedOption = 0 === a.selectedOption ? 0 : a.selectedOption - 1)
                        : (a.selectedOption = t.length - 1);
                  }
                  t[a.selectedOption].focus();
                }
              });
            }
          };
        })
        .directive("dropdownToggle", function() {
          return {
            require: "?^dropdown",
            link: function(e, t, n, a) {
              if (a) {
                t.addClass("dropdown-toggle"), (a.toggleElement = t);
                var o = function(o) {
                  o.preventDefault(),
                    t.hasClass("disabled") ||
                      n.disabled ||
                      e.$apply(function() {
                        a.toggle();
                      });
                };
                t.bind("click", o),
                  t.attr({ "aria-haspopup": !0, "aria-expanded": !1 }),
                  e.$watch(a.isOpen, function(e) {
                    t.attr("aria-expanded", !!e);
                  }),
                  e.$on("$destroy", function() {
                    t.unbind("click", o);
                  });
              }
            }
          };
        }),
      angular
        .module("ui.bootstrap.modal", [])
        .factory("$$stackedMap", function() {
          return {
            createNew: function() {
              var e = [];
              return {
                add: function(t, n) {
                  e.push({ key: t, value: n });
                },
                get: function(t) {
                  for (var n = 0; n < e.length; n++) if (t == e[n].key) return e[n];
                },
                keys: function() {
                  for (var t = [], n = 0; n < e.length; n++) t.push(e[n].key);
                  return t;
                },
                top: function() {
                  return e[e.length - 1];
                },
                remove: function(t) {
                  for (var n = -1, a = 0; a < e.length; a++)
                    if (t == e[a].key) {
                      n = a;
                      break;
                    }
                  return e.splice(n, 1)[0];
                },
                removeTop: function() {
                  return e.splice(e.length - 1, 1)[0];
                },
                length: function() {
                  return e.length;
                }
              };
            }
          };
        })
        .factory("$$multiMap", function() {
          return {
            createNew: function() {
              var e = {};
              return {
                entries: function() {
                  return Object.keys(e).map(function(t) {
                    return { key: t, value: e[t] };
                  });
                },
                get: function(t) {
                  return e[t];
                },
                hasKey: function(t) {
                  return !!e[t];
                },
                keys: function() {
                  return Object.keys(e);
                },
                put: function(t, n) {
                  e[t] || (e[t] = []), e[t].push(n);
                },
                remove: function(t, n) {
                  var a = e[t];
                  if (a) {
                    var o = a.indexOf(n);
                    -1 !== o && a.splice(o, 1), a.length || delete e[t];
                  }
                }
              };
            }
          };
        })
        .directive("modalBackdrop", [
          "$animate",
          "$injector",
          "$modalStack",
          function(e, t, n) {
            function a(t, a, i) {
              i.modalInClass &&
                (o ? o(a, { addClass: i.modalInClass }).start() : e.addClass(a, i.modalInClass),
                t.$on(n.NOW_CLOSING_EVENT, function(t, n) {
                  var r = n();
                  o
                    ? o(a, { removeClass: i.modalInClass })
                        .start()
                        .then(r)
                    : e.removeClass(a, i.modalInClass).then(r);
                }));
            }
            var o = null;
            return (
              t.has("$animateCss") && (o = t.get("$animateCss")),
              {
                restrict: "EA",
                replace: !0,
                templateUrl: "template/modal/backdrop.html",
                compile: function(e, t) {
                  return e.addClass(t.backdropClass), a;
                }
              }
            );
          }
        ])
        .directive("modalWindow", [
          "$modalStack",
          "$q",
          "$animate",
          "$injector",
          function(e, t, n, a) {
            var o = null;
            return (
              a.has("$animateCss") && (o = a.get("$animateCss")),
              {
                restrict: "EA",
                scope: { index: "@" },
                replace: !0,
                transclude: !0,
                templateUrl: function(e, t) {
                  return t.templateUrl || "template/modal/window.html";
                },
                link: function(a, i, r) {
                  i.addClass(r.windowClass || ""),
                    (a.size = r.size),
                    (a.close = function(t) {
                      var n = e.getTop();
                      n &&
                        n.value.backdrop &&
                        "static" !== n.value.backdrop &&
                        t.target === t.currentTarget &&
                        (t.preventDefault(),
                        t.stopPropagation(),
                        e.dismiss(n.key, "backdrop click"));
                    }),
                    (a.$isRendered = !0);
                  var s = t.defer();
                  r.$observe("modalRender", function(e) {
                    "true" == e && s.resolve();
                  }),
                    s.promise.then(function() {
                      var s = null;
                      r.modalInClass &&
                        ((s = o
                          ? o(i, { addClass: r.modalInClass }).start()
                          : n.addClass(i, r.modalInClass)),
                        a.$on(e.NOW_CLOSING_EVENT, function(e, t) {
                          var a = t();
                          o
                            ? o(i, { removeClass: r.modalInClass })
                                .start()
                                .then(a)
                            : n.removeClass(i, r.modalInClass).then(a);
                        })),
                        t.when(s).then(function() {
                          var e = i[0].querySelectorAll("[autofocus]");
                          e.length ? e[0].focus() : i[0].focus();
                        });
                      var l = e.getTop();
                      l && e.modalRendered(l.key);
                    });
                }
              }
            );
          }
        ])
        .directive("modalAnimationClass", [
          function() {
            return {
              compile: function(e, t) {
                t.modalAnimation && e.addClass(t.modalAnimationClass);
              }
            };
          }
        ])
        .directive("modalTransclude", function() {
          return {
            link: function(e, t, n, a, o) {
              o(e.$parent, function(e) {
                t.empty(), t.append(e);
              });
            }
          };
        })
        .factory("$modalStack", [
          "$animate",
          "$timeout",
          "$document",
          "$compile",
          "$rootScope",
          "$q",
          "$injector",
          "$$multiMap",
          "$$stackedMap",
          function(e, t, n, a, o, i, r, s, l) {
            function c() {
              for (var e = -1, t = b.keys(), n = 0; n < t.length; n++)
                b.get(t[n]).value.backdrop && (e = n);
              return e;
            }
            function d(e, t) {
              var a = n.find("body").eq(0),
                o = b.get(e).value;
              b.remove(e),
                u(o.modalDomEl, o.modalScope, function() {
                  var t = o.openedClass || v;
                  w.remove(t, e), a.toggleClass(t, w.hasKey(t));
                }),
                (function() {
                  if (f && -1 == c()) {
                    u(f, m, function() {
                      null;
                    }),
                      (f = void 0),
                      (m = void 0);
                  }
                })(),
                t && t.focus ? t.focus() : a.focus();
            }
            function u(t, n, a) {
              var o,
                r = null;
              return (
                n.$broadcast(y.NOW_CLOSING_EVENT, function() {
                  return (
                    o || ((o = i.defer()), (r = o.promise)),
                    function() {
                      o.resolve();
                    }
                  );
                }),
                i.when(r).then(function o() {
                  o.done ||
                    ((o.done = !0),
                    h
                      ? h(t, { event: "leave" })
                          .start()
                          .then(function() {
                            t.remove();
                          })
                      : e.leave(t),
                    n.$destroy(),
                    a && a());
                })
              );
            }
            function p(e, t, n) {
              return !e.value.modalScope.$broadcast("modal.closing", t, n).defaultPrevented;
            }
            var h = null;
            r.has("$animateCss") && (h = r.get("$animateCss"));
            var f,
              m,
              g,
              v = "modal-open",
              b = l.createNew(),
              w = s.createNew(),
              y = { NOW_CLOSING_EVENT: "modal.stack.now-closing" };
            return (
              o.$watch(c, function(e) {
                m && (m.index = e);
              }),
              n.bind("keydown", function(e) {
                if (e.isDefaultPrevented()) return e;
                var t = b.top();
                if (t && t.value.keyboard)
                  switch (e.which) {
                    case 27:
                      e.preventDefault(),
                        o.$apply(function() {
                          y.dismiss(t.key, "escape key press");
                        });
                      break;
                    case 9:
                      y.loadFocusElementList(t);
                      var n = !1;
                      e.shiftKey
                        ? y.isFocusInFirstItem(e) && (n = y.focusLastFocusableElement())
                        : y.isFocusInLastItem(e) && (n = y.focusFirstFocusableElement()),
                        n && (e.preventDefault(), e.stopPropagation());
                  }
              }),
              (y.open = function(e, t) {
                var i = n[0].activeElement,
                  r = t.openedClass || v;
                b.add(e, {
                  deferred: t.deferred,
                  renderDeferred: t.renderDeferred,
                  modalScope: t.scope,
                  backdrop: t.backdrop,
                  keyboard: t.keyboard,
                  openedClass: t.openedClass
                }),
                  w.put(r, e);
                var s = n.find("body").eq(0),
                  l = c();
                if (l >= 0 && !f) {
                  (m = o.$new(!0)).index = l;
                  var d = angular.element('<div modal-backdrop="modal-backdrop"></div>');
                  d.attr("backdrop-class", t.backdropClass),
                    t.animation && d.attr("modal-animation", "true"),
                    (f = a(d)(m)),
                    s.append(f);
                }
                var u = angular.element('<div modal-window="modal-window"></div>');
                u
                  .attr({
                    "template-url": t.windowTemplateUrl,
                    "window-class": t.windowClass,
                    size: t.size,
                    index: b.length() - 1,
                    animate: "animate"
                  })
                  .html(t.content),
                  t.animation && u.attr("modal-animation", "true");
                var p = a(u)(t.scope);
                (b.top().value.modalDomEl = p),
                  (b.top().value.modalOpener = i),
                  s.append(p),
                  s.addClass(r),
                  y.clearFocusListCache();
              }),
              (y.close = function(e, t) {
                var n = b.get(e);
                return n && p(n, t, !0)
                  ? ((n.value.modalScope.$$uibDestructionScheduled = !0),
                    n.value.deferred.resolve(t),
                    d(e, n.value.modalOpener),
                    !0)
                  : !n;
              }),
              (y.dismiss = function(e, t) {
                var n = b.get(e);
                return n && p(n, t, !1)
                  ? ((n.value.modalScope.$$uibDestructionScheduled = !0),
                    n.value.deferred.reject(t),
                    d(e, n.value.modalOpener),
                    !0)
                  : !n;
              }),
              (y.dismissAll = function(e) {
                for (var t = this.getTop(); t && this.dismiss(t.key, e); ) t = this.getTop();
              }),
              (y.getTop = function() {
                return b.top();
              }),
              (y.modalRendered = function(e) {
                var t = b.get(e);
                t && t.value.renderDeferred.resolve();
              }),
              (y.focusFirstFocusableElement = function() {
                return g.length > 0 && (g[0].focus(), !0);
              }),
              (y.focusLastFocusableElement = function() {
                return g.length > 0 && (g[g.length - 1].focus(), !0);
              }),
              (y.isFocusInFirstItem = function(e) {
                return g.length > 0 && (e.target || e.srcElement) == g[0];
              }),
              (y.isFocusInLastItem = function(e) {
                return g.length > 0 && (e.target || e.srcElement) == g[g.length - 1];
              }),
              (y.clearFocusListCache = function() {
                (g = []), 0;
              }),
              (y.loadFocusElementList = function(e) {
                if ((void 0 === g || !g.length0) && e) {
                  var t = e.value.modalDomEl;
                  t &&
                    t.length &&
                    (g = t[0].querySelectorAll(
                      "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]"
                    ));
                }
              }),
              y
            );
          }
        ])
        .provider("$modal", function() {
          var e = {
            options: { animation: !0, backdrop: !0, keyboard: !0 },
            $get: [
              "$injector",
              "$rootScope",
              "$q",
              "$templateRequest",
              "$controller",
              "$modalStack",
              function(t, n, a, o, i, r) {
                function s(e) {
                  return e.template
                    ? a.when(e.template)
                    : o(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl);
                }
                function l(e) {
                  var n = [];
                  return (
                    angular.forEach(e, function(e) {
                      angular.isFunction(e) || angular.isArray(e)
                        ? n.push(a.when(t.invoke(e)))
                        : angular.isString(e)
                          ? n.push(a.when(t.get(e)))
                          : n.push(a.when(e));
                    }),
                    n
                  );
                }
                var c = {},
                  d = null;
                return (
                  (c.getPromiseChain = function() {
                    return d;
                  }),
                  (c.open = function(t) {
                    var o = a.defer(),
                      c = a.defer(),
                      u = a.defer(),
                      p = {
                        result: o.promise,
                        opened: c.promise,
                        rendered: u.promise,
                        close: function(e) {
                          return r.close(p, e);
                        },
                        dismiss: function(e) {
                          return r.dismiss(p, e);
                        }
                      };
                    if (
                      (((t = angular.extend({}, e.options, t)).resolve = t.resolve || {}),
                      !t.template && !t.templateUrl)
                    )
                      throw new Error("One of template or templateUrl options is required.");
                    var h,
                      f = a.all([s(t)].concat(l(t.resolve)));
                    return (
                      (h = d = a
                        .all([d])
                        .then(
                          function() {
                            return f;
                          },
                          function() {
                            return f;
                          }
                        )
                        .then(
                          function(e) {
                            var a = (t.scope || n).$new();
                            (a.$close = p.close),
                              (a.$dismiss = p.dismiss),
                              a.$on("$destroy", function() {
                                a.$$uibDestructionScheduled ||
                                  a.$dismiss("$uibUnscheduledDestruction");
                              });
                            var s,
                              l = {},
                              d = 1;
                            t.controller &&
                              ((l.$scope = a),
                              (l.$modalInstance = p),
                              angular.forEach(t.resolve, function(t, n) {
                                l[n] = e[d++];
                              }),
                              (s = i(t.controller, l)),
                              t.controllerAs &&
                                (t.bindToController && angular.extend(s, a),
                                (a[t.controllerAs] = s))),
                              r.open(p, {
                                scope: a,
                                deferred: o,
                                renderDeferred: u,
                                content: e[0],
                                animation: t.animation,
                                backdrop: t.backdrop,
                                keyboard: t.keyboard,
                                backdropClass: t.backdropClass,
                                windowClass: t.windowClass,
                                windowTemplateUrl: t.windowTemplateUrl,
                                size: t.size,
                                openedClass: t.openedClass
                              }),
                              c.resolve(!0);
                          },
                          function(e) {
                            c.reject(e), o.reject(e);
                          }
                        )
                        .finally(function() {
                          d === h && (d = null);
                        })),
                      p
                    );
                  }),
                  c
                );
              }
            ]
          };
          return e;
        }),
      angular
        .module("ui.bootstrap.pagination", [])
        .controller("PaginationController", [
          "$scope",
          "$attrs",
          "$parse",
          function(e, t, n) {
            var a = this,
              o = { $setViewValue: angular.noop },
              i = t.numPages ? n(t.numPages).assign : angular.noop;
            (this.init = function(r, s) {
              (o = r),
                (this.config = s),
                (o.$render = function() {
                  a.render();
                }),
                t.itemsPerPage
                  ? e.$parent.$watch(n(t.itemsPerPage), function(t) {
                      (a.itemsPerPage = parseInt(t, 10)), (e.totalPages = a.calculateTotalPages());
                    })
                  : (this.itemsPerPage = s.itemsPerPage),
                e.$watch("totalItems", function() {
                  e.totalPages = a.calculateTotalPages();
                }),
                e.$watch("totalPages", function(t) {
                  i(e.$parent, t), e.page > t ? e.selectPage(t) : o.$render();
                });
            }),
              (this.calculateTotalPages = function() {
                var t = this.itemsPerPage < 1 ? 1 : Math.ceil(e.totalItems / this.itemsPerPage);
                return Math.max(t || 0, 1);
              }),
              (this.render = function() {
                e.page = parseInt(o.$viewValue, 10) || 1;
              }),
              (e.selectPage = function(t, n) {
                n && n.preventDefault(),
                  (!e.ngDisabled || !n) &&
                    e.page !== t &&
                    t > 0 &&
                    t <= e.totalPages &&
                    (n && n.target && n.target.blur(), o.$setViewValue(t), o.$render());
              }),
              (e.getText = function(t) {
                return e[t + "Text"] || a.config[t + "Text"];
              }),
              (e.noPrevious = function() {
                return 1 === e.page;
              }),
              (e.noNext = function() {
                return e.page === e.totalPages;
              });
          }
        ])
        .constant("paginationConfig", {
          itemsPerPage: 10,
          boundaryLinks: !1,
          directionLinks: !0,
          firstText: "First",
          previousText: "Previous",
          nextText: "Next",
          lastText: "Last",
          rotate: !0
        })
        .directive("pagination", [
          "$parse",
          "paginationConfig",
          function(e, t) {
            return {
              restrict: "EA",
              scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@",
                ngDisabled: "="
              },
              require: ["pagination", "?ngModel"],
              controller: "PaginationController",
              controllerAs: "pagination",
              templateUrl: function(e, t) {
                return t.templateUrl || "template/pagination/pagination.html";
              },
              replace: !0,
              link: function(n, a, o, i) {
                function r(e, t, n) {
                  return { number: e, text: t, active: n };
                }
                var s = i[0],
                  l = i[1];
                if (l) {
                  var c = angular.isDefined(o.maxSize) ? n.$parent.$eval(o.maxSize) : t.maxSize,
                    d = angular.isDefined(o.rotate) ? n.$parent.$eval(o.rotate) : t.rotate;
                  (n.boundaryLinks = angular.isDefined(o.boundaryLinks)
                    ? n.$parent.$eval(o.boundaryLinks)
                    : t.boundaryLinks),
                    (n.directionLinks = angular.isDefined(o.directionLinks)
                      ? n.$parent.$eval(o.directionLinks)
                      : t.directionLinks),
                    s.init(l, t),
                    o.maxSize &&
                      n.$parent.$watch(e(o.maxSize), function(e) {
                        (c = parseInt(e, 10)), s.render();
                      });
                  var u = s.render;
                  s.render = function() {
                    u(),
                      n.page > 0 &&
                        n.page <= n.totalPages &&
                        (n.pages = (function(e, t) {
                          var n = [],
                            a = 1,
                            o = t,
                            i = angular.isDefined(c) && t > c;
                          i &&
                            (d
                              ? (o = (a = Math.max(e - Math.floor(c / 2), 1)) + c - 1) > t &&
                                (a = (o = t) - c + 1)
                              : ((a = (Math.ceil(e / c) - 1) * c + 1),
                                (o = Math.min(a + c - 1, t))));
                          for (var s = a; o >= s; s++) {
                            var l = r(s, s, s === e);
                            n.push(l);
                          }
                          if (i && !d) {
                            if (a > 1) {
                              var u = r(a - 1, "...", !1);
                              n.unshift(u);
                            }
                            if (t > o) {
                              var p = r(o + 1, "...", !1);
                              n.push(p);
                            }
                          }
                          return n;
                        })(n.page, n.totalPages));
                  };
                }
              }
            };
          }
        ])
        .constant("pagerConfig", {
          itemsPerPage: 10,
          previousText: "?? Previous",
          nextText: "Next ??",
          align: !0
        })
        .directive("pager", [
          "pagerConfig",
          function(e) {
            return {
              restrict: "EA",
              scope: { totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "=" },
              require: ["pager", "?ngModel"],
              controller: "PaginationController",
              controllerAs: "pagination",
              templateUrl: function(e, t) {
                return t.templateUrl || "template/pagination/pager.html";
              },
              replace: !0,
              link: function(t, n, a, o) {
                var i = o[0],
                  r = o[1];
                r &&
                  ((t.align = angular.isDefined(a.align) ? t.$parent.$eval(a.align) : e.align),
                  i.init(r, e));
              }
            };
          }
        ]),
      angular
        .module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"])
        .provider("$tooltip", function() {
          var e = { placement: "top", animation: !0, popupDelay: 0, useContentExp: !1 },
            t = { mouseenter: "mouseleave", click: "click", focus: "blur", none: "" },
            n = {};
          (this.options = function(e) {
            angular.extend(n, e);
          }),
            (this.setTriggers = function(e) {
              angular.extend(t, e);
            }),
            (this.$get = [
              "$window",
              "$compile",
              "$timeout",
              "$document",
              "$position",
              "$interpolate",
              "$rootScope",
              "$parse",
              function(a, o, i, r, s, l, c, d) {
                return function(a, u, p, h) {
                  function f(e) {
                    var n = (e || h.trigger || p).split(" ");
                    return {
                      show: n,
                      hide: n.map(function(e) {
                        return t[e] || e;
                      })
                    };
                  }
                  h = angular.extend({}, e, n, h);
                  var m = (function(e) {
                      return e.replace(/[A-Z]/g, function(e, t) {
                        return (t ? "-" : "") + e.toLowerCase();
                      });
                    })(a),
                    g = l.startSymbol(),
                    v = l.endSymbol(),
                    b =
                      "<div " +
                      m +
                      '-popup title="' +
                      g +
                      "title" +
                      v +
                      '" ' +
                      (h.useContentExp
                        ? 'content-exp="contentExp()" '
                        : 'content="' + g + "content" + v + '" ') +
                      'placement="' +
                      g +
                      "placement" +
                      v +
                      '" popup-class="' +
                      g +
                      "popupClass" +
                      v +
                      '" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';
                  return {
                    restrict: "EA",
                    compile: function(e, t) {
                      var n = o(b);
                      return function(e, t, o, l) {
                        function p() {
                          D.isOpen ? g() : m();
                        }
                        function m() {
                          (!R || e.$eval(o[u + "Enable"])) &&
                            ((D.popupClass = o[u + "Class"]),
                            y(),
                            (function() {
                              var e = o[u + "PopupDelay"],
                                t = parseInt(e, 10);
                              D.popupDelay = isNaN(t) ? h.popupDelay : t;
                            })(),
                            D.popupDelay ? C || (C = i(v, D.popupDelay, !1)) : v());
                        }
                        function g() {
                          b(), c.$$phase || c.$digest();
                        }
                        function v() {
                          return (
                            (C = null),
                            T && (i.cancel(T), (T = null)),
                            (h.useContentExp
                            ? D.contentExp()
                            : D.content)
                              ? (k && w(),
                                (S = D.$new()),
                                (k = n(S, function(e) {
                                  A ? r.find("body").append(e) : t.after(e);
                                })),
                                h.useContentExp &&
                                  (S.$watch("contentExp()", function(e) {
                                    !e && D.isOpen && b();
                                  }),
                                  S.$watch(function() {
                                    $ ||
                                      (($ = !0),
                                      S.$$postDigest(function() {
                                        ($ = !1), D.isOpen && I();
                                      }));
                                  })),
                                (D.isOpen = !0),
                                M && M.assign(D.origScope, D.isOpen),
                                c.$$phase || D.$apply(),
                                k.css({ display: "block" }),
                                void I())
                              : angular.noop
                          );
                        }
                        function b() {
                          (D.isOpen = !1),
                            M && M.assign(D.origScope, D.isOpen),
                            i.cancel(C),
                            (C = null),
                            i.cancel(P),
                            (P = null),
                            D.animation ? T || (T = i(w, 500)) : w();
                        }
                        function w() {
                          (T = null),
                            k && (k.remove(), (k = null)),
                            S && (S.$destroy(), (S = null));
                        }
                        function y() {
                          var e = o[u + "Placement"];
                          D.placement = angular.isDefined(e) ? e : h.placement;
                        }
                        var k,
                          S,
                          T,
                          C,
                          P,
                          A = !!angular.isDefined(h.appendToBody) && h.appendToBody,
                          x = f(void 0),
                          R = angular.isDefined(o[u + "Enable"]),
                          D = e.$new(!0),
                          $ = !1,
                          M = !!angular.isDefined(o[u + "IsOpen"]) && d(o[u + "IsOpen"]),
                          I = function() {
                            k &&
                              (P ||
                                (P = i(
                                  function() {
                                    k.css({ top: 0, left: 0, width: "auto", height: "auto" });
                                    var e = s.position(k),
                                      n = s.positionElements(t, k, D.placement, A);
                                    (n.top += "px"),
                                      (n.left += "px"),
                                      (n.width = e.width + "px"),
                                      (n.height = e.height + "px"),
                                      k.css(n),
                                      (P = null);
                                  },
                                  0,
                                  !1
                                )));
                          };
                        (D.origScope = e),
                          (D.isOpen = !1),
                          (D.contentExp = function() {
                            return e.$eval(o[a]);
                          }),
                          h.useContentExp ||
                            o.$observe(a, function(e) {
                              (D.content = e), !e && D.isOpen ? b() : I();
                            }),
                          o.$observe("disabled", function(e) {
                            C && e && (i.cancel(C), (C = null)), e && D.isOpen && b();
                          }),
                          o.$observe(u + "Title", function(e) {
                            (D.title = e), I();
                          }),
                          o.$observe(u + "Placement", function() {
                            D.isOpen && (y(), I());
                          }),
                          M &&
                            e.$watch(M, function(e) {
                              e !== D.isOpen && p();
                            });
                        var E = function() {
                          x.show.forEach(function(e) {
                            t.unbind(e, m);
                          }),
                            x.hide.forEach(function(e) {
                              t.unbind(e, g);
                            });
                        };
                        !(function() {
                          var e = o[u + "Trigger"];
                          E(),
                            "none" !== (x = f(e)).show &&
                              x.show.forEach(function(e, n) {
                                e === x.hide[n]
                                  ? t[0].addEventListener(e, p)
                                  : e &&
                                    (t[0].addEventListener(e, m),
                                    t[0].addEventListener(x.hide[n], g));
                              });
                        })();
                        var z = e.$eval(o[u + "Animation"]);
                        D.animation = angular.isDefined(z) ? !!z : h.animation;
                        var U = e.$eval(o[u + "AppendToBody"]);
                        (A = angular.isDefined(U) ? U : A) &&
                          e.$on("$locationChangeSuccess", function() {
                            D.isOpen && b();
                          }),
                          e.$on("$destroy", function() {
                            i.cancel(T), i.cancel(C), i.cancel(P), E(), w(), (D = null);
                          });
                      };
                    }
                  };
                };
              }
            ]);
        })
        .directive("tooltipTemplateTransclude", [
          "$animate",
          "$sce",
          "$compile",
          "$templateRequest",
          function(e, t, n, a) {
            return {
              link: function(o, i, r) {
                var s,
                  l,
                  c,
                  d = o.$eval(r.tooltipTemplateTranscludeScope),
                  u = 0,
                  p = function() {
                    l && (l.remove(), (l = null)),
                      s && (s.$destroy(), (s = null)),
                      c &&
                        (e.leave(c).then(function() {
                          l = null;
                        }),
                        (l = c),
                        (c = null));
                  };
                o.$watch(t.parseAsResourceUrl(r.tooltipTemplateTransclude), function(t) {
                  var r = ++u;
                  t
                    ? (a(t, !0).then(
                        function(a) {
                          if (r === u) {
                            var o = d.$new(),
                              l = n(a)(o, function(t) {
                                p(), e.enter(t, i);
                              });
                            (c = l), (s = o).$emit("$includeContentLoaded", t);
                          }
                        },
                        function() {
                          r === u && (p(), o.$emit("$includeContentError", t));
                        }
                      ),
                      o.$emit("$includeContentRequested", t))
                    : p();
                }),
                  o.$on("$destroy", p);
              }
            };
          }
        ])
        .directive("tooltipClasses", function() {
          return {
            restrict: "A",
            link: function(e, t, n) {
              e.placement && t.addClass(e.placement),
                e.popupClass && t.addClass(e.popupClass),
                e.animation() && t.addClass(n.tooltipAnimationClass);
            }
          };
        })
        .directive("tooltipPopup", function() {
          return {
            restrict: "EA",
            replace: !0,
            scope: { content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" },
            templateUrl: "template/tooltip/tooltip-popup.html"
          };
        })
        .directive("tooltip", [
          "$tooltip",
          function(e) {
            return e("tooltip", "tooltip", "mouseenter");
          }
        ])
        .directive("tooltipTemplatePopup", function() {
          return {
            restrict: "EA",
            replace: !0,
            scope: {
              contentExp: "&",
              placement: "@",
              popupClass: "@",
              animation: "&",
              isOpen: "&",
              originScope: "&"
            },
            templateUrl: "template/tooltip/tooltip-template-popup.html"
          };
        })
        .directive("tooltipTemplate", [
          "$tooltip",
          function(e) {
            return e("tooltipTemplate", "tooltip", "mouseenter", { useContentExp: !0 });
          }
        ])
        .directive("tooltipHtmlPopup", function() {
          return {
            restrict: "EA",
            replace: !0,
            scope: {
              contentExp: "&",
              placement: "@",
              popupClass: "@",
              animation: "&",
              isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-popup.html"
          };
        })
        .directive("tooltipHtml", [
          "$tooltip",
          function(e) {
            return e("tooltipHtml", "tooltip", "mouseenter", { useContentExp: !0 });
          }
        ])
        .directive("tooltipHtmlUnsafePopup", function() {
          return {
            restrict: "EA",
            replace: !0,
            scope: { content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" },
            templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
          };
        })
        .value("tooltipHtmlUnsafeSuppressDeprecated", !1)
        .directive("tooltipHtmlUnsafe", [
          "$tooltip",
          "tooltipHtmlUnsafeSuppressDeprecated",
          "$log",
          function(e, t, n) {
            return (
              t ||
                n.warn(
                  "tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."
                ),
              e("tooltipHtmlUnsafe", "tooltip", "mouseenter")
            );
          }
        ]),
      angular
        .module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"])
        .directive("popoverTemplatePopup", function() {
          return {
            restrict: "EA",
            replace: !0,
            scope: {
              title: "@",
              contentExp: "&",
              placement: "@",
              popupClass: "@",
              animation: "&",
              isOpen: "&",
              originScope: "&"
            },
            templateUrl: "template/popover/popover-template.html"
          };
        })
        .directive("popoverTemplate", [
          "$tooltip",
          function(e) {
            return e("popoverTemplate", "popover", "click", { useContentExp: !0 });
          }
        ])
        .directive("popoverHtmlPopup", function() {
          return {
            restrict: "EA",
            replace: !0,
            scope: {
              contentExp: "&",
              title: "@",
              placement: "@",
              popupClass: "@",
              animation: "&",
              isOpen: "&"
            },
            templateUrl: "template/popover/popover-html.html"
          };
        })
        .directive("popoverHtml", [
          "$tooltip",
          function(e) {
            return e("popoverHtml", "popover", "click", { useContentExp: !0 });
          }
        ])
        .directive("popoverPopup", function() {
          return {
            restrict: "EA",
            replace: !0,
            scope: {
              title: "@",
              content: "@",
              placement: "@",
              popupClass: "@",
              animation: "&",
              isOpen: "&"
            },
            templateUrl: "template/popover/popover.html"
          };
        })
        .directive("popover", [
          "$tooltip",
          function(e) {
            return e("popover", "popover", "click");
          }
        ]),
      angular
        .module("ui.bootstrap.progressbar", [])
        .constant("progressConfig", { animate: !0, max: 100 })
        .value("$progressSuppressWarning", !1)
        .controller("ProgressController", [
          "$scope",
          "$attrs",
          "progressConfig",
          function(e, t, n) {
            var a = this,
              o = angular.isDefined(t.animate) ? e.$parent.$eval(t.animate) : n.animate;
            (this.bars = []),
              (e.max = angular.isDefined(e.max) ? e.max : n.max),
              (this.addBar = function(t, n) {
                o || n.css({ transition: "none" }),
                  this.bars.push(t),
                  (t.max = e.max),
                  t.$watch("value", function(e) {
                    t.recalculatePercentage();
                  }),
                  (t.recalculatePercentage = function() {
                    t.percent = +((100 * t.value) / t.max).toFixed(2);
                    var e = a.bars.reduce(function(e, t) {
                      return e + t.percent;
                    }, 0);
                    e > 100 && (t.percent -= e - 100);
                  }),
                  t.$on("$destroy", function() {
                    (n = null), a.removeBar(t);
                  });
              }),
              (this.removeBar = function(e) {
                this.bars.splice(this.bars.indexOf(e), 1);
              }),
              e.$watch("max", function(t) {
                a.bars.forEach(function(t) {
                  (t.max = e.max), t.recalculatePercentage();
                });
              });
          }
        ])
        .directive("uibProgress", function() {
          return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            require: "uibProgress",
            scope: { max: "=?" },
            templateUrl: "template/progressbar/progress.html"
          };
        })
        .directive("progress", [
          "$log",
          "$progressSuppressWarning",
          function(e, t) {
            return {
              restrict: "EA",
              replace: !0,
              transclude: !0,
              controller: "ProgressController",
              require: "progress",
              scope: { max: "=?" },
              templateUrl: "template/progressbar/progress.html",
              link: function() {
                t && e.warn("progress is now deprecated. Use uib-progress instead");
              }
            };
          }
        ])
        .directive("uibBar", function() {
          return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: "^uibProgress",
            scope: { value: "=", type: "@" },
            templateUrl: "template/progressbar/bar.html",
            link: function(e, t, n, a) {
              a.addBar(e, t);
            }
          };
        })
        .directive("bar", [
          "$log",
          "$progressSuppressWarning",
          function(e, t) {
            return {
              restrict: "EA",
              replace: !0,
              transclude: !0,
              require: "^progress",
              scope: { value: "=", type: "@" },
              templateUrl: "template/progressbar/bar.html",
              link: function(n, a, o, i) {
                t && e.warn("bar is now deprecated. Use uib-bar instead"), i.addBar(n, a);
              }
            };
          }
        ])
        .directive("progressbar", function() {
          return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            scope: { value: "=", max: "=?", type: "@" },
            templateUrl: "template/progressbar/progressbar.html",
            link: function(e, t, n, a) {
              a.addBar(e, angular.element(t.children()[0]));
            }
          };
        }),
      angular
        .module("ui.bootstrap.rating", [])
        .constant("ratingConfig", {
          max: 5,
          stateOn: null,
          stateOff: null,
          titles: ["one", "two", "three", "four", "five"]
        })
        .controller("RatingController", [
          "$scope",
          "$attrs",
          "ratingConfig",
          function(e, t, n) {
            var a = { $setViewValue: angular.noop };
            (this.init = function(o) {
              ((a = o).$render = this.render),
                a.$formatters.push(function(e) {
                  return angular.isNumber(e) && e << 0 !== e && (e = Math.round(e)), e;
                }),
                (this.stateOn = angular.isDefined(t.stateOn)
                  ? e.$parent.$eval(t.stateOn)
                  : n.stateOn),
                (this.stateOff = angular.isDefined(t.stateOff)
                  ? e.$parent.$eval(t.stateOff)
                  : n.stateOff);
              var i = angular.isDefined(t.titles) ? e.$parent.$eval(t.titles) : n.titles;
              this.titles = angular.isArray(i) && i.length > 0 ? i : n.titles;
              var r = angular.isDefined(t.ratingStates)
                ? e.$parent.$eval(t.ratingStates)
                : new Array(angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max);
              e.range = this.buildTemplateObjects(r);
            }),
              (this.buildTemplateObjects = function(e) {
                for (var t = 0, n = e.length; n > t; t++)
                  e[t] = angular.extend(
                    { index: t },
                    { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(t) },
                    e[t]
                  );
                return e;
              }),
              (this.getTitle = function(e) {
                return e >= this.titles.length ? e + 1 : this.titles[e];
              }),
              (e.rate = function(t) {
                !e.readonly &&
                  t >= 0 &&
                  t <= e.range.length &&
                  (a.$setViewValue(a.$viewValue === t ? 0 : t), a.$render());
              }),
              (e.enter = function(t) {
                e.readonly || (e.value = t), e.onHover({ value: t });
              }),
              (e.reset = function() {
                (e.value = a.$viewValue), e.onLeave();
              }),
              (e.onKeydown = function(t) {
                /(37|38|39|40)/.test(t.which) &&
                  (t.preventDefault(),
                  t.stopPropagation(),
                  e.rate(e.value + (38 === t.which || 39 === t.which ? 1 : -1)));
              }),
              (this.render = function() {
                e.value = a.$viewValue;
              });
          }
        ])
        .directive("rating", function() {
          return {
            restrict: "EA",
            require: ["rating", "ngModel"],
            scope: { readonly: "=?", onHover: "&", onLeave: "&" },
            controller: "RatingController",
            templateUrl: "template/rating/rating.html",
            replace: !0,
            link: function(e, t, n, a) {
              var o = a[0],
                i = a[1];
              o.init(i);
            }
          };
        }),
      angular
        .module("ui.bootstrap.tabs", [])
        .controller("TabsetController", [
          "$scope",
          function(e) {
            var t,
              n = this,
              a = (n.tabs = e.tabs = []);
            (n.select = function(e) {
              angular.forEach(a, function(t) {
                t.active && t !== e && ((t.active = !1), t.onDeselect(), (e.selectCalled = !1));
              }),
                (e.active = !0),
                e.selectCalled || (e.onSelect(), (e.selectCalled = !0));
            }),
              (n.addTab = function(e) {
                a.push(e),
                  1 === a.length && !1 !== e.active
                    ? (e.active = !0)
                    : e.active
                      ? n.select(e)
                      : (e.active = !1);
              }),
              (n.removeTab = function(e) {
                var o = a.indexOf(e);
                if (e.active && a.length > 1 && !t) {
                  var i = o == a.length - 1 ? o - 1 : o + 1;
                  n.select(a[i]);
                }
                a.splice(o, 1);
              }),
              e.$on("$destroy", function() {
                t = !0;
              });
          }
        ])
        .directive("tabset", function() {
          return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            scope: { type: "@" },
            controller: "TabsetController",
            templateUrl: "template/tabs/tabset.html",
            link: function(e, t, n) {
              (e.vertical = !!angular.isDefined(n.vertical) && e.$parent.$eval(n.vertical)),
                (e.justified = !!angular.isDefined(n.justified) && e.$parent.$eval(n.justified));
            }
          };
        })
        .directive("tab", [
          "$parse",
          "$log",
          function(e, t) {
            return {
              require: "^tabset",
              restrict: "EA",
              replace: !0,
              templateUrl: "template/tabs/tab.html",
              transclude: !0,
              scope: { active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect" },
              controller: function() {},
              link: function(n, a, o, i, r) {
                n.$watch("active", function(e) {
                  e && i.select(n);
                }),
                  (n.disabled = !1),
                  o.disable &&
                    n.$parent.$watch(e(o.disable), function(e) {
                      n.disabled = !!e;
                    }),
                  o.disabled &&
                    (t.warn(
                      'Use of "disabled" attribute has been deprecated, please use "disable"'
                    ),
                    n.$parent.$watch(e(o.disabled), function(e) {
                      n.disabled = !!e;
                    })),
                  (n.select = function() {
                    n.disabled || (n.active = !0);
                  }),
                  i.addTab(n),
                  n.$on("$destroy", function() {
                    i.removeTab(n);
                  }),
                  (n.$transcludeFn = r);
              }
            };
          }
        ])
        .directive("tabHeadingTransclude", function() {
          return {
            restrict: "A",
            require: "^tab",
            link: function(e, t, n, a) {
              e.$watch("headingElement", function(e) {
                e && (t.html(""), t.append(e));
              });
            }
          };
        })
        .directive("tabContentTransclude", function() {
          return {
            restrict: "A",
            require: "^tabset",
            link: function(e, t, n) {
              var a = e.$eval(n.tabContentTransclude);
              a.$transcludeFn(a.$parent, function(e) {
                angular.forEach(e, function(e) {
                  !(function(e) {
                    return (
                      e.tagName &&
                      (e.hasAttribute("tab-heading") ||
                        e.hasAttribute("data-tab-heading") ||
                        e.hasAttribute("x-tab-heading") ||
                        "tab-heading" === e.tagName.toLowerCase() ||
                        "data-tab-heading" === e.tagName.toLowerCase() ||
                        "x-tab-heading" === e.tagName.toLowerCase())
                    );
                  })(e)
                    ? t.append(e)
                    : (a.headingElement = e);
                });
              });
            }
          };
        }),
      angular
        .module("ui.bootstrap.timepicker", [])
        .constant("timepickerConfig", {
          hourStep: 1,
          minuteStep: 1,
          showMeridian: !0,
          meridians: null,
          readonlyInput: !1,
          mousewheel: !0,
          arrowkeys: !0,
          showSpinners: !0
        })
        .controller("TimepickerController", [
          "$scope",
          "$attrs",
          "$parse",
          "$log",
          "$locale",
          "timepickerConfig",
          function(e, t, n, a, o, i) {
            function r() {
              var t = parseInt(e.hours, 10);
              return (e.showMeridian
              ? t > 0 && 13 > t
              : t >= 0 && 24 > t)
                ? (e.showMeridian && (12 === t && (t = 0), e.meridian === g[1] && (t += 12)), t)
                : void 0;
            }
            function s() {
              var t = parseInt(e.minutes, 10);
              return t >= 0 && 60 > t ? t : void 0;
            }
            function l(e) {
              return angular.isDefined(e) && e.toString().length < 2 ? "0" + e : e.toString();
            }
            function c(e) {
              d(), m.$setViewValue(new Date(f)), u(e);
            }
            function d() {
              m.$setValidity("time", !0), (e.invalidHours = !1), (e.invalidMinutes = !1);
            }
            function u(t) {
              var n = f.getHours(),
                a = f.getMinutes();
              e.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12),
                (e.hours = "h" === t ? n : l(n)),
                "m" !== t && (e.minutes = l(a)),
                (e.meridian = f.getHours() < 12 ? g[0] : g[1]);
            }
            function p(e, t) {
              var n = new Date(e.getTime() + 6e4 * t),
                a = new Date(e);
              return a.setHours(n.getHours(), n.getMinutes()), a;
            }
            function h(e) {
              (f = p(f, e)), c();
            }
            var f = new Date(),
              m = { $setViewValue: angular.noop },
              g = angular.isDefined(t.meridians)
                ? e.$parent.$eval(t.meridians)
                : i.meridians || o.DATETIME_FORMATS.AMPMS;
            this.init = function(n, a) {
              ((m = n).$render = this.render),
                m.$formatters.unshift(function(e) {
                  return e ? new Date(e) : null;
                });
              var o = a.eq(0),
                r = a.eq(1);
              (angular.isDefined(t.mousewheel) ? e.$parent.$eval(t.mousewheel) : i.mousewheel) &&
                this.setupMousewheelEvents(o, r),
                (angular.isDefined(t.arrowkeys) ? e.$parent.$eval(t.arrowkeys) : i.arrowkeys) &&
                  this.setupArrowkeyEvents(o, r),
                (e.readonlyInput = angular.isDefined(t.readonlyInput)
                  ? e.$parent.$eval(t.readonlyInput)
                  : i.readonlyInput),
                this.setupInputEvents(o, r);
            };
            var v = i.hourStep;
            t.hourStep &&
              e.$parent.$watch(n(t.hourStep), function(e) {
                v = parseInt(e, 10);
              });
            var b,
              w,
              y = i.minuteStep;
            t.minuteStep &&
              e.$parent.$watch(n(t.minuteStep), function(e) {
                y = parseInt(e, 10);
              }),
              e.$parent.$watch(n(t.min), function(e) {
                var t = new Date(e);
                b = isNaN(t) ? void 0 : t;
              }),
              e.$parent.$watch(n(t.max), function(e) {
                var t = new Date(e);
                w = isNaN(t) ? void 0 : t;
              }),
              (e.noIncrementHours = function() {
                var e = p(f, 60 * v);
                return e > w || (f > e && b > e);
              }),
              (e.noDecrementHours = function() {
                var e = p(f, 60 * -v);
                return b > e || (e > f && e > w);
              }),
              (e.noIncrementMinutes = function() {
                var e = p(f, y);
                return e > w || (f > e && b > e);
              }),
              (e.noDecrementMinutes = function() {
                var e = p(f, -y);
                return b > e || (e > f && e > w);
              }),
              (e.noToggleMeridian = function() {
                return f.getHours() < 13 ? p(f, 720) > w : p(f, -720) < b;
              }),
              (e.showMeridian = i.showMeridian),
              t.showMeridian &&
                e.$parent.$watch(n(t.showMeridian), function(t) {
                  if (((e.showMeridian = !!t), m.$error.time)) {
                    var n = r(),
                      a = s();
                    angular.isDefined(n) && angular.isDefined(a) && (f.setHours(n), c());
                  } else u();
                }),
              (this.setupMousewheelEvents = function(t, n) {
                var a = function(e) {
                  e.originalEvent && (e = e.originalEvent);
                  var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                  return e.detail || t > 0;
                };
                t.bind("mousewheel wheel", function(t) {
                  e.$apply(a(t) ? e.incrementHours() : e.decrementHours()), t.preventDefault();
                }),
                  n.bind("mousewheel wheel", function(t) {
                    e.$apply(a(t) ? e.incrementMinutes() : e.decrementMinutes()),
                      t.preventDefault();
                  });
              }),
              (this.setupArrowkeyEvents = function(t, n) {
                t.bind("keydown", function(t) {
                  38 === t.which
                    ? (t.preventDefault(), e.incrementHours(), e.$apply())
                    : 40 === t.which && (t.preventDefault(), e.decrementHours(), e.$apply());
                }),
                  n.bind("keydown", function(t) {
                    38 === t.which
                      ? (t.preventDefault(), e.incrementMinutes(), e.$apply())
                      : 40 === t.which && (t.preventDefault(), e.decrementMinutes(), e.$apply());
                  });
              }),
              (this.setupInputEvents = function(t, n) {
                if (e.readonlyInput)
                  return (e.updateHours = angular.noop), void (e.updateMinutes = angular.noop);
                var a = function(t, n) {
                  m.$setViewValue(null),
                    m.$setValidity("time", !1),
                    angular.isDefined(t) && (e.invalidHours = t),
                    angular.isDefined(n) && (e.invalidMinutes = n);
                };
                (e.updateHours = function() {
                  var e = r(),
                    t = s();
                  angular.isDefined(e) && angular.isDefined(t)
                    ? (f.setHours(e), b > f || f > w ? a(!0) : c("h"))
                    : a(!0);
                }),
                  t.bind("blur", function(t) {
                    !e.invalidHours &&
                      e.hours < 10 &&
                      e.$apply(function() {
                        e.hours = l(e.hours);
                      });
                  }),
                  (e.updateMinutes = function() {
                    var e = s(),
                      t = r();
                    angular.isDefined(e) && angular.isDefined(t)
                      ? (f.setMinutes(e), b > f || f > w ? a(void 0, !0) : c("m"))
                      : a(void 0, !0);
                  }),
                  n.bind("blur", function(t) {
                    !e.invalidMinutes &&
                      e.minutes < 10 &&
                      e.$apply(function() {
                        e.minutes = l(e.minutes);
                      });
                  });
              }),
              (this.render = function() {
                var t = m.$viewValue;
                isNaN(t)
                  ? (m.$setValidity("time", !1),
                    a.error(
                      'Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'
                    ))
                  : (t && (f = t),
                    b > f || f > w
                      ? (m.$setValidity("time", !1), (e.invalidHours = !0), (e.invalidMinutes = !0))
                      : d(),
                    u());
              }),
              (e.showSpinners = angular.isDefined(t.showSpinners)
                ? e.$parent.$eval(t.showSpinners)
                : i.showSpinners),
              (e.incrementHours = function() {
                e.noIncrementHours() || h(60 * v);
              }),
              (e.decrementHours = function() {
                e.noDecrementHours() || h(60 * -v);
              }),
              (e.incrementMinutes = function() {
                e.noIncrementMinutes() || h(y);
              }),
              (e.decrementMinutes = function() {
                e.noDecrementMinutes() || h(-y);
              }),
              (e.toggleMeridian = function() {
                e.noToggleMeridian() || h(720 * (f.getHours() < 12 ? 1 : -1));
              });
          }
        ])
        .directive("timepicker", function() {
          return {
            restrict: "EA",
            require: ["timepicker", "?^ngModel"],
            controller: "TimepickerController",
            controllerAs: "timepicker",
            replace: !0,
            scope: {},
            templateUrl: function(e, t) {
              return t.templateUrl || "template/timepicker/timepicker.html";
            },
            link: function(e, t, n, a) {
              var o = a[0],
                i = a[1];
              i && o.init(i, t.find("input"));
            }
          };
        }),
      angular
        .module("ui.bootstrap.transition", [])
        .value("$transitionSuppressDeprecated", !1)
        .factory("$transition", [
          "$q",
          "$timeout",
          "$rootScope",
          "$log",
          "$transitionSuppressDeprecated",
          function(e, t, n, a, o) {
            function i(e) {
              for (var t in e) if (void 0 !== s.style[t]) return e[t];
            }
            o || a.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
            var r = function(a, o, i) {
                i = i || {};
                var s = e.defer(),
                  l = r[i.animation ? "animationEndEventName" : "transitionEndEventName"],
                  c = function(e) {
                    n.$apply(function() {
                      a.unbind(l, c), s.resolve(a);
                    });
                  };
                return (
                  l && a.bind(l, c),
                  t(function() {
                    angular.isString(o)
                      ? a.addClass(o)
                      : angular.isFunction(o)
                        ? o(a)
                        : angular.isObject(o) && a.css(o),
                      l || s.resolve(a);
                  }),
                  (s.promise.cancel = function() {
                    l && a.unbind(l, c), s.reject("Transition cancelled");
                  }),
                  s.promise
                );
              },
              s = document.createElement("trans");
            return (
              (r.transitionEndEventName = i({
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
              })),
              (r.animationEndEventName = i({
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
              })),
              r
            );
          }
        ]),
      angular
        .module("ui.bootstrap.typeahead", ["ui.bootstrap.position"])
        .factory("typeaheadParser", [
          "$parse",
          function(e) {
            var t = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
            return {
              parse: function(n) {
                var a = n.match(t);
                if (!a)
                  throw new Error(
                    'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' +
                      n +
                      '".'
                  );
                return {
                  itemName: a[3],
                  source: e(a[4]),
                  viewMapper: e(a[2] || a[1]),
                  modelMapper: e(a[1])
                };
              }
            };
          }
        ])
        .directive("typeahead", [
          "$compile",
          "$parse",
          "$q",
          "$timeout",
          "$document",
          "$window",
          "$rootScope",
          "$position",
          "typeaheadParser",
          function(e, t, n, a, o, i, r, s, l) {
            var c = [9, 13, 27, 38, 40],
              d = 200;
            return {
              require: ["ngModel", "^?ngModelOptions"],
              link: function(u, p, h, f) {
                function m() {
                  U.moveInProgress || ((U.moveInProgress = !0), U.$digest()),
                    N && a.cancel(N),
                    (N = a(function() {
                      U.matches.length && g(), (U.moveInProgress = !1), U.$digest();
                    }, d));
                }
                function g() {
                  (U.position = D ? s.offset(p) : s.position(p)),
                    (U.position.top += p.prop("offsetHeight"));
                }
                var v = f[0],
                  b = f[1],
                  w = u.$eval(h.typeaheadMinLength);
                w || 0 === w || (w = 1);
                var y,
                  k,
                  S = u.$eval(h.typeaheadWaitMs) || 0,
                  T = !1 !== u.$eval(h.typeaheadEditable),
                  C = t(h.typeaheadLoading).assign || angular.noop,
                  P = t(h.typeaheadOnSelect),
                  A =
                    !!angular.isDefined(h.typeaheadSelectOnBlur) &&
                    u.$eval(h.typeaheadSelectOnBlur),
                  x = t(h.typeaheadNoResults).assign || angular.noop,
                  R = h.typeaheadInputFormatter ? t(h.typeaheadInputFormatter) : void 0,
                  D = !!h.typeaheadAppendToBody && u.$eval(h.typeaheadAppendToBody),
                  $ = !1 !== u.$eval(h.typeaheadFocusFirst),
                  M = !!h.typeaheadSelectOnExact && u.$eval(h.typeaheadSelectOnExact),
                  I = t(h.ngModel),
                  E = t(h.ngModel + "($$$p)"),
                  z = l.parse(h.typeahead),
                  U = u.$new(),
                  L = u.$on("$destroy", function() {
                    U.$destroy();
                  });
                U.$on("$destroy", L);
                var F = "typeahead-" + U.$id + "-" + Math.floor(1e4 * Math.random());
                p.attr({ "aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": F });
                var O = angular.element("<div typeahead-popup></div>");
                O.attr({
                  id: F,
                  matches: "matches",
                  active: "activeIdx",
                  select: "select(activeIdx)",
                  "move-in-progress": "moveInProgress",
                  query: "query",
                  position: "position"
                }),
                  angular.isDefined(h.typeaheadTemplateUrl) &&
                    O.attr("template-url", h.typeaheadTemplateUrl),
                  angular.isDefined(h.typeaheadPopupTemplateUrl) &&
                    O.attr("popup-template-url", h.typeaheadPopupTemplateUrl);
                var B = function() {
                    (U.matches = []), (U.activeIdx = -1), p.attr("aria-expanded", !1);
                  },
                  j = function(e) {
                    return F + "-option-" + e;
                  };
                U.$watch("activeIdx", function(e) {
                  0 > e
                    ? p.removeAttr("aria-activedescendant")
                    : p.attr("aria-activedescendant", j(e));
                });
                var N,
                  H = function(e) {
                    var t = { $viewValue: e };
                    C(u, !0),
                      x(u, !1),
                      n.when(z.source(u, t)).then(
                        function(n) {
                          var a = e === v.$viewValue;
                          if (a && y)
                            if (n && n.length > 0) {
                              (U.activeIdx = $ ? 0 : -1), x(u, !1), (U.matches.length = 0);
                              for (var o = 0; o < n.length; o++)
                                (t[z.itemName] = n[o]),
                                  U.matches.push({
                                    id: j(o),
                                    label: z.viewMapper(U, t),
                                    model: n[o]
                                  });
                              (U.query = e),
                                g(),
                                p.attr("aria-expanded", !0),
                                M &&
                                  1 === U.matches.length &&
                                  (function(e, t) {
                                    return (
                                      !!(U.matches.length > t && e) &&
                                      e.toUpperCase() === U.matches[t].label.toUpperCase()
                                    );
                                  })(e, 0) &&
                                  U.select(0);
                            } else B(), x(u, !0);
                          a && C(u, !1);
                        },
                        function() {
                          B(), C(u, !1), x(u, !0);
                        }
                      );
                  };
                D && (angular.element(i).bind("resize", m), o.find("body").bind("scroll", m)),
                  (U.moveInProgress = !1),
                  B(),
                  (U.query = void 0);
                var W,
                  V = function() {
                    W && a.cancel(W);
                  };
                v.$parsers.unshift(function(e) {
                  return (
                    (y = !0),
                    0 === w || (e && e.length >= w)
                      ? S > 0
                        ? (V(),
                          (function(e) {
                            W = a(function() {
                              H(e);
                            }, S);
                          })(e))
                        : H(e)
                      : (C(u, !1), V(), B()),
                    T
                      ? e
                      : e
                        ? void v.$setValidity("editable", !1)
                        : (v.$setValidity("editable", !0), null)
                  );
                }),
                  v.$formatters.push(function(e) {
                    var t,
                      n = {};
                    return (
                      T || v.$setValidity("editable", !0),
                      R
                        ? ((n.$model = e), R(u, n))
                        : ((n[z.itemName] = e),
                          (t = z.viewMapper(u, n)),
                          (n[z.itemName] = void 0),
                          t !== z.viewMapper(u, n) ? t : e)
                    );
                  }),
                  (U.select = function(e) {
                    var t,
                      n,
                      o = {};
                    (k = !0),
                      (o[z.itemName] = n = U.matches[e].model),
                      (t = z.modelMapper(u, o)),
                      (function(e, t) {
                        angular.isFunction(I(u)) && b && b.$options && b.$options.getterSetter
                          ? E(e, { $$$p: t })
                          : I.assign(e, t);
                      })(u, t),
                      v.$setValidity("editable", !0),
                      v.$setValidity("parse", !0),
                      P(u, { $item: n, $model: t, $label: z.viewMapper(u, o) }),
                      B(),
                      !1 !== U.$eval(h.typeaheadFocusOnSelect) &&
                        a(
                          function() {
                            p[0].focus();
                          },
                          0,
                          !1
                        );
                  }),
                  p.bind("keydown", function(e) {
                    if (0 !== U.matches.length && -1 !== c.indexOf(e.which)) {
                      if (-1 === U.activeIdx && (9 === e.which || 13 === e.which))
                        return B(), void U.$digest();
                      e.preventDefault(),
                        40 === e.which
                          ? ((U.activeIdx = (U.activeIdx + 1) % U.matches.length), U.$digest())
                          : 38 === e.which
                            ? ((U.activeIdx =
                                (U.activeIdx > 0 ? U.activeIdx : U.matches.length) - 1),
                              U.$digest())
                            : 13 === e.which || 9 === e.which
                              ? U.$apply(function() {
                                  U.select(U.activeIdx);
                                })
                              : 27 === e.which && (e.stopPropagation(), B(), U.$digest());
                    }
                  }),
                  p.bind("blur", function() {
                    A &&
                      U.matches.length &&
                      -1 !== U.activeIdx &&
                      !k &&
                      ((k = !0),
                      U.$apply(function() {
                        U.select(U.activeIdx);
                      })),
                      (y = !1),
                      (k = !1);
                  });
                var Y = function(e) {
                  p[0] !== e.target &&
                    3 !== e.which &&
                    0 !== U.matches.length &&
                    (B(), r.$$phase || U.$digest());
                };
                o.bind("click", Y),
                  u.$on("$destroy", function() {
                    o.unbind("click", Y), D && q.remove(), O.remove();
                  });
                var q = e(O)(U);
                D ? o.find("body").append(q) : p.after(q);
              }
            };
          }
        ])
        .directive("typeaheadPopup", function() {
          return {
            restrict: "EA",
            scope: {
              matches: "=",
              query: "=",
              active: "=",
              position: "&",
              moveInProgress: "=",
              select: "&"
            },
            replace: !0,
            templateUrl: function(e, t) {
              return t.popupTemplateUrl || "template/typeahead/typeahead-popup.html";
            },
            link: function(e, t, n) {
              (e.templateUrl = n.templateUrl),
                (e.isOpen = function() {
                  return e.matches.length > 0;
                }),
                (e.isActive = function(t) {
                  return e.active == t;
                }),
                (e.selectActive = function(t) {
                  e.active = t;
                }),
                (e.selectMatch = function(t) {
                  e.select({ activeIdx: t });
                });
            }
          };
        })
        .directive("typeaheadMatch", [
          "$templateRequest",
          "$compile",
          "$parse",
          function(e, t, n) {
            return {
              restrict: "EA",
              scope: { index: "=", match: "=", query: "=" },
              link: function(a, o, i) {
                var r = n(i.templateUrl)(a.$parent) || "template/typeahead/typeahead-match.html";
                e(r).then(function(e) {
                  t(e.trim())(a, function(e) {
                    o.replaceWith(e);
                  });
                });
              }
            };
          }
        ])
        .filter("typeaheadHighlight", [
          "$sce",
          "$injector",
          "$log",
          function(e, t, n) {
            var a;
            return (
              (a = t.has("$sanitize")),
              function(t, o) {
                return (
                  !a &&
                    (function(e) {
                      return /<.*>/g.test(e);
                    })(t) &&
                    n.warn("Unsafe use of typeahead please use ngSanitize"),
                  (t = o
                    ? ("" + t).replace(
                        new RegExp(
                          (function(e) {
                            return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                          })(o),
                          "gi"
                        ),
                        "<strong>$&</strong>"
                      )
                    : t),
                  a || (t = e.trustAsHtml(t)),
                  t
                );
              }
            );
          }
        ]),
      angular.module("template/accordion/accordion-group.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/accordion/accordion-group.html",
            '<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n\t  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/accordion/accordion.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/accordion/accordion.html",
            '<div class="panel-group" ng-transclude></div>'
          );
        }
      ]),
      angular.module("template/alert/alert.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/alert/alert.html",
            '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close($event)">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/carousel/carousel.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/carousel/carousel.html",
            '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n'
          );
        }
      ]),
      angular.module("template/carousel/slide.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/carousel/slide.html",
            '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n'
          );
        }
      ]),
      angular.module("template/datepicker/datepicker.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/datepicker/datepicker.html",
            '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>'
          );
        }
      ]),
      angular.module("template/datepicker/day.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/datepicker/day.html",
            '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
          );
        }
      ]),
      angular.module("template/datepicker/month.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/datepicker/month.html",
            '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
          );
        }
      ]),
      angular.module("template/datepicker/popup.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/datepicker/popup.html",
            '<ul class="dropdown-menu" ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n\t<li ng-transclude></li>\n\t<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n\t\t<span class="btn-group pull-left">\n\t\t\t<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n\t\t\t<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n\t\t</span>\n\t\t<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n\t</li>\n</ul>\n'
          );
        }
      ]),
      angular.module("template/datepicker/year.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/datepicker/year.html",
            '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
          );
        }
      ]),
      angular.module("template/modal/backdrop.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/modal/backdrop.html",
            '<div class="modal-backdrop"\n     modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n'
          );
        }
      ]),
      angular.module("template/modal/window.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/modal/window.html",
            '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n    modal-in-class="in"\n\tng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/pagination/pager.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/pagination/pager.html",
            '<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n'
          );
        }
      ]),
      angular.module("template/pagination/pagination.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/pagination/pagination.html",
            '<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n'
          );
        }
      ]),
      angular.module("template/tooltip/tooltip-html-popup.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/tooltip/tooltip-html-popup.html",
            '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/tooltip/tooltip-html-unsafe-popup.html",
            '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/tooltip/tooltip-popup.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/tooltip/tooltip-popup.html",
            '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/tooltip/tooltip-template-popup.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/tooltip/tooltip-template-popup.html",
            '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/popover/popover-html.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/popover/popover-html.html",
            '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/popover/popover-template.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/popover/popover-template.html",
            '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/popover/popover.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/popover/popover.html",
            '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/progressbar/bar.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/progressbar/bar.html",
            '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n'
          );
        }
      ]),
      angular.module("template/progressbar/progress.html", []).run([
        "$templateCache",
        function(e) {
          e.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>');
        }
      ]),
      angular.module("template/progressbar/progressbar.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/progressbar/progressbar.html",
            '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/rating/rating.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/rating/rating.html",
            '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" ></i>\n</span>\n'
          );
        }
      ]),
      angular.module("template/tabs/tab.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/tabs/tab.html",
            '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n'
          );
        }
      ]),
      angular.module("template/tabs/tabset.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/tabs/tabset.html",
            '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n'
          );
        }
      ]),
      angular.module("template/timepicker/timepicker.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/timepicker/timepicker.html",
            '<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n'
          );
        }
      ]),
      angular.module("template/typeahead/typeahead-match.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/typeahead/typeahead-match.html",
            '<a href tabindex="-1" ng-bind-html="match.label | typeaheadHighlight:query"></a>\n'
          );
        }
      ]),
      angular.module("template/typeahead/typeahead-popup.html", []).run([
        "$templateCache",
        function(e) {
          e.put(
            "template/typeahead/typeahead-popup.html",
            '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n'
          );
        }
      ]),
      !angular.$$csp() &&
        angular
          .element(document)
          .find("head")
          .prepend(
            '<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'
          );
  },
  function(e, t, n) {
    (function(e) {
      !(function(e) {
        "use strict";
        var t = 0,
          n = function(t, n) {
            (this.options = n), (this.$elementFilestyle = []), (this.$element = e(t));
          };
        n.prototype = {
          clear: function() {
            this.$element.val(""),
              this.$elementFilestyle.find(":text").val(""),
              this.$elementFilestyle.find(".badge").remove();
          },
          destroy: function() {
            this.$element.removeAttr("style").removeData("filestyle"),
              this.$elementFilestyle.remove();
          },
          disabled: function(e) {
            if (!0 === e)
              this.options.disabled ||
                (this.$element.attr("disabled", "true"),
                this.$elementFilestyle.find("label").attr("disabled", "true"),
                (this.options.disabled = !0));
            else {
              if (!1 !== e) return this.options.disabled;
              this.options.disabled &&
                (this.$element.removeAttr("disabled"),
                this.$elementFilestyle.find("label").removeAttr("disabled"),
                (this.options.disabled = !1));
            }
          },
          buttonBefore: function(e) {
            if (!0 === e)
              this.options.buttonBefore ||
                ((this.options.buttonBefore = !0),
                this.options.input &&
                  (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
            else {
              if (!1 !== e) return this.options.buttonBefore;
              this.options.buttonBefore &&
                ((this.options.buttonBefore = !1),
                this.options.input &&
                  (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
            }
          },
          icon: function(e) {
            if (!0 === e)
              this.options.icon ||
                ((this.options.icon = !0),
                this.$elementFilestyle.find("label").prepend(this.htmlIcon()));
            else {
              if (!1 !== e) return this.options.icon;
              this.options.icon &&
                ((this.options.icon = !1),
                this.$elementFilestyle.find(".icon-span-filestyle").remove());
            }
          },
          input: function(e) {
            if (!0 === e)
              this.options.input ||
                ((this.options.input = !0),
                this.options.buttonBefore
                  ? this.$elementFilestyle.append(this.htmlInput())
                  : this.$elementFilestyle.prepend(this.htmlInput()),
                this.$elementFilestyle.find(".badge").remove(),
                this.pushNameFiles(),
                this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
            else {
              if (!1 !== e) return this.options.input;
              if (this.options.input) {
                (this.options.input = !1), this.$elementFilestyle.find(":text").remove();
                var t = this.pushNameFiles();
                t.length > 0 &&
                  this.options.badge &&
                  this.$elementFilestyle
                    .find("label")
                    .append(' <span class="badge">' + t.length + "</span>"),
                  this.$elementFilestyle
                    .find(".group-span-filestyle")
                    .removeClass("input-group-btn");
              }
            }
          },
          size: function(e) {
            if (void 0 === e) return this.options.size;
            var t = this.$elementFilestyle.find("label"),
              n = this.$elementFilestyle.find("input");
            t.removeClass("btn-lg btn-sm"),
              n.removeClass("input-lg input-sm"),
              "nr" != e && (t.addClass("btn-" + e), n.addClass("input-" + e));
          },
          placeholder: function(e) {
            if (void 0 === e) return this.options.placeholder;
            (this.options.placeholder = e),
              this.$elementFilestyle.find("input").attr("placeholder", e);
          },
          buttonText: function(e) {
            if (void 0 === e) return this.options.buttonText;
            (this.options.buttonText = e),
              this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText);
          },
          buttonName: function(e) {
            if (void 0 === e) return this.options.buttonName;
            (this.options.buttonName = e),
              this.$elementFilestyle
                .find("label")
                .attr({ class: "btn " + this.options.buttonName });
          },
          iconName: function(e) {
            if (void 0 === e) return this.options.iconName;
            this.$elementFilestyle
              .find(".icon-span-filestyle")
              .attr({ class: "icon-span-filestyle " + this.options.iconName });
          },
          htmlIcon: function() {
            return this.options.icon
              ? '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> '
              : "";
          },
          htmlInput: function() {
            return this.options.input
              ? '<input type="text" class="form-control ' +
                  ("nr" == this.options.size ? "" : "input-" + this.options.size) +
                  '" placeholder="' +
                  this.options.placeholder +
                  '" disabled> '
              : "";
          },
          pushNameFiles: function() {
            var e = "",
              t = [];
            void 0 === this.$element[0].files
              ? (t[0] = { name: this.$element[0] && this.$element[0].value })
              : (t = this.$element[0].files);
            for (var n = 0; n < t.length; n++) e += t[n].name.split("\\").pop() + ", ";
            return (
              "" !== e
                ? this.$elementFilestyle.find(":text").val(e.replace(/\, $/g, ""))
                : this.$elementFilestyle.find(":text").val(""),
              t
            );
          },
          constructor: function() {
            var n,
              a,
              o = this,
              i = "",
              r = o.$element.attr("id");
            ("" !== r && r) || ((r = "filestyle-" + t), o.$element.attr({ id: r }), t++),
              (i =
                '<div class="group-span-filestyle ' +
                (o.options.input ? "input-group-btn" : "btn-group") +
                '">'),
              (n =
                '<label for="' +
                r +
                '" class="btn ' +
                o.options.buttonName +
                " " +
                ("nr" == o.options.size ? "" : "btn-" + o.options.size) +
                '" ' +
                (o.options.disabled || o.$element.attr("disabled") ? 'disabled="true"' : "") +
                ">" +
                o.htmlIcon() +
                '<span class="buttonText">' +
                o.options.buttonText +
                "</span></label>"),
              (a =
                '<button id="' +
                r +
                '-clear" class="btn btn-default" aria-label="Clear"><svg class="icon icon-fw"><use xlink:href="#icon-times"></span></button>'),
              (i = o.options.buttonBefore
                ? i + n + a + "</div>" + o.htmlInput()
                : o.htmlInput() + i + a + n + "</div>"),
              (o.$elementFilestyle = e(
                '<div class="bootstrap-filestyle input-group">' + i + "</div>"
              )),
              o.$elementFilestyle
                .find(".group-span-filestyle")
                .attr("tabindex", "0")
                .keypress(function(e) {
                  if (13 === e.keyCode || 32 === e.charCode)
                    return o.$elementFilestyle.find("label").click(), !1;
                }),
              o.$elementFilestyle.find("#" + r + "-clear").click(function(e) {
                o.clear();
              }),
              o.$element
                .css({ position: "absolute", clip: "rect(0px 0px 0px 0px)" })
                .attr("tabindex", "-1")
                .after(o.$elementFilestyle),
              (o.options.disabled || o.$element.attr("disabled")) &&
                o.$element.attr("disabled", "true"),
              o.$element.change(function() {
                var e = o.pushNameFiles();
                0 == o.options.input && o.options.badge
                  ? 0 == o.$elementFilestyle.find(".badge").length
                    ? o.$elementFilestyle
                        .find("label")
                        .append(' <span class="badge">' + e.length + "</span>")
                    : 0 == e.length
                      ? o.$elementFilestyle.find(".badge").remove()
                      : o.$elementFilestyle.find(".badge").html(e.length)
                  : o.$elementFilestyle.find(".badge").remove();
              }),
              window.navigator.userAgent.search(/firefox/i) > -1 &&
                o.$elementFilestyle.find("label").click(function() {
                  return o.$element.click(), !1;
                });
          }
        };
        var a = e.fn.filestyle;
        (e.fn.filestyle = function(t, a) {
          var o = "",
            i = this.each(function() {
              if ("file" === e(this).attr("type")) {
                var i = e(this),
                  r = i.data("filestyle"),
                  s = e.extend({}, e.fn.filestyle.defaults, t, "object" == typeof t && t);
                r || (i.data("filestyle", (r = new n(this, s))), r.constructor()),
                  "string" == typeof t && (o = r[t](a));
              }
            });
          return void 0 !== typeof o ? o : i;
        }),
          (e.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1,
            placeholder: ""
          }),
          (e.fn.filestyle.noConflict = function() {
            return (e.fn.filestyle = a), this;
          }),
          e(function() {
            e(".filestyle").each(function() {
              var t = e(this),
                n = {
                  input: "false" !== t.attr("data-input"),
                  icon: "false" !== t.attr("data-icon"),
                  buttonBefore: "true" === t.attr("data-buttonBefore"),
                  disabled: "true" === t.attr("data-disabled"),
                  size: t.attr("data-size"),
                  buttonText: t.attr("data-buttonText"),
                  buttonName: t.attr("data-buttonName"),
                  iconName: t.attr("data-iconName"),
                  badge: "false" !== t.attr("data-badge"),
                  placeholder: t.attr("data-placeholder")
                };
              t.filestyle(n);
            });
          });
      })(e);
    }.call(this, n(1)));
  },
  function(e, t, n) {
    (function(e) {
      !(function(e) {
        (e.color = {}),
          (e.color.make = function(t, n, a, o) {
            var i = {};
            return (
              (i.r = t || 0),
              (i.g = n || 0),
              (i.b = a || 0),
              (i.a = null != o ? o : 1),
              (i.add = function(e, t) {
                for (var n = 0; n < e.length; ++n) i[e.charAt(n)] += t;
                return i.normalize();
              }),
              (i.scale = function(e, t) {
                for (var n = 0; n < e.length; ++n) i[e.charAt(n)] *= t;
                return i.normalize();
              }),
              (i.toString = function() {
                return i.a >= 1
                  ? "rgb(" + [i.r, i.g, i.b].join(",") + ")"
                  : "rgba(" + [i.r, i.g, i.b, i.a].join(",") + ")";
              }),
              (i.normalize = function() {
                function e(e, t, n) {
                  return t < e ? e : t > n ? n : t;
                }
                return (
                  (i.r = e(0, parseInt(i.r), 255)),
                  (i.g = e(0, parseInt(i.g), 255)),
                  (i.b = e(0, parseInt(i.b), 255)),
                  (i.a = e(0, i.a, 1)),
                  i
                );
              }),
              (i.clone = function() {
                return e.color.make(i.r, i.b, i.g, i.a);
              }),
              i.normalize()
            );
          }),
          (e.color.extract = function(t, n) {
            var a;
            do {
              if ("" != (a = t.css(n).toLowerCase()) && "transparent" != a) break;
              t = t.parent();
            } while (t.length && !e.nodeName(t.get(0), "body"));
            return "rgba(0, 0, 0, 0)" == a && (a = "transparent"), e.color.parse(a);
          }),
          (e.color.parse = function(n) {
            var a,
              o = e.color.make;
            if ((a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)))
              return o(parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10));
            if (
              (a = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
                n
              ))
            )
              return o(
                parseInt(a[1], 10),
                parseInt(a[2], 10),
                parseInt(a[3], 10),
                parseFloat(a[4])
              );
            if (
              (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
                n
              ))
            )
              return o(2.55 * parseFloat(a[1]), 2.55 * parseFloat(a[2]), 2.55 * parseFloat(a[3]));
            if (
              (a = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
                n
              ))
            )
              return o(
                2.55 * parseFloat(a[1]),
                2.55 * parseFloat(a[2]),
                2.55 * parseFloat(a[3]),
                parseFloat(a[4])
              );
            if ((a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)))
              return o(parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16));
            if ((a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)))
              return o(
                parseInt(a[1] + a[1], 16),
                parseInt(a[2] + a[2], 16),
                parseInt(a[3] + a[3], 16)
              );
            var i = e.trim(n).toLowerCase();
            return "transparent" == i
              ? o(255, 255, 255, 0)
              : o((a = t[i] || [0, 0, 0])[0], a[1], a[2]);
          });
        var t = {
          aqua: [0, 255, 255],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          black: [0, 0, 0],
          blue: [0, 0, 255],
          brown: [165, 42, 42],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgrey: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkviolet: [148, 0, 211],
          fuchsia: [255, 0, 255],
          gold: [255, 215, 0],
          green: [0, 128, 0],
          indigo: [75, 0, 130],
          khaki: [240, 230, 140],
          lightblue: [173, 216, 230],
          lightcyan: [224, 255, 255],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          navy: [0, 0, 128],
          olive: [128, 128, 0],
          orange: [255, 165, 0],
          pink: [255, 192, 203],
          purple: [128, 0, 128],
          violet: [128, 0, 128],
          red: [255, 0, 0],
          silver: [192, 192, 192],
          white: [255, 255, 255],
          yellow: [255, 255, 0]
        };
      })(e),
        (function(e) {
          var t = Object.prototype.hasOwnProperty;
          function n(t, n) {
            var a = n.children("." + t)[0];
            if (
              null == a &&
              (((a = document.createElement("canvas")).className = t),
              e(a)
                .css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
                .appendTo(n),
              !a.getContext)
            ) {
              if (!window.G_vmlCanvasManager)
                throw new Error(
                  "Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode."
                );
              a = window.G_vmlCanvasManager.initElement(a);
            }
            this.element = a;
            var o = (this.context = a.getContext("2d")),
              i = window.devicePixelRatio || 1,
              r =
                o.webkitBackingStorePixelRatio ||
                o.mozBackingStorePixelRatio ||
                o.msBackingStorePixelRatio ||
                o.oBackingStorePixelRatio ||
                o.backingStorePixelRatio ||
                1;
            (this.pixelRatio = i / r),
              this.resize(n.width(), n.height()),
              (this.textContainer = null),
              (this.text = {}),
              (this._textCache = {});
          }
          function a(t, a, o, i) {
            var r = [],
              s = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                  show: !0,
                  noColumns: 1,
                  labelFormatter: null,
                  labelBoxBorderColor: "#ccc",
                  container: null,
                  position: "ne",
                  margin: 5,
                  backgroundColor: null,
                  backgroundOpacity: 0.85,
                  sorted: null
                },
                xaxis: {
                  show: null,
                  position: "bottom",
                  mode: null,
                  font: null,
                  color: null,
                  tickColor: null,
                  transform: null,
                  inverseTransform: null,
                  min: null,
                  max: null,
                  autoscaleMargin: null,
                  ticks: null,
                  tickFormatter: null,
                  labelWidth: null,
                  labelHeight: null,
                  reserveSpace: null,
                  tickLength: null,
                  alignTicksWithAxis: null,
                  tickDecimals: null,
                  tickSize: null,
                  minTickSize: null
                },
                yaxis: { autoscaleMargin: 0.02, position: "left" },
                xaxes: [],
                yaxes: [],
                series: {
                  points: {
                    show: !1,
                    radius: 3,
                    lineWidth: 2,
                    fill: !0,
                    fillColor: "#ffffff",
                    symbol: "circle"
                  },
                  lines: { lineWidth: 2, fill: !1, fillColor: null, steps: !1 },
                  bars: {
                    show: !1,
                    lineWidth: 2,
                    barWidth: 1,
                    fill: !0,
                    fillColor: null,
                    align: "left",
                    horizontal: !1,
                    zero: !0
                  },
                  shadowSize: 3,
                  highlightColor: null
                },
                grid: {
                  show: !0,
                  aboveData: !1,
                  color: "#545454",
                  backgroundColor: null,
                  borderColor: null,
                  tickColor: null,
                  margin: 0,
                  labelMargin: 5,
                  axisMargin: 8,
                  borderWidth: 2,
                  minBorderMargin: null,
                  markings: null,
                  markingsColor: "#f4f4f4",
                  markingsLineWidth: 2,
                  clickable: !1,
                  hoverable: !1,
                  autoHighlight: !0,
                  mouseActiveRadius: 10
                },
                interaction: { redrawOverlayInterval: 1e3 / 60 },
                hooks: {}
              },
              l = null,
              c = null,
              d = null,
              u = null,
              p = null,
              h = [],
              f = [],
              m = { left: 0, right: 0, top: 0, bottom: 0 },
              g = 0,
              v = 0,
              b = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
              },
              w = this;
            function y(e, t) {
              t = [w].concat(t);
              for (var n = 0; n < e.length; ++n) e[n].apply(this, t);
            }
            function k(t) {
              (r = (function(t) {
                for (var n = [], a = 0; a < t.length; ++a) {
                  var o = e.extend(!0, {}, s.series);
                  null != t[a].data
                    ? ((o.data = t[a].data),
                      delete t[a].data,
                      e.extend(!0, o, t[a]),
                      (t[a].data = o.data))
                    : (o.data = t[a]),
                    n.push(o);
                }
                return n;
              })(t)),
                (function() {
                  var t,
                    n = r.length,
                    a = -1;
                  for (t = 0; t < r.length; ++t) {
                    var o = r[t].color;
                    null != o && (n--, "number" == typeof o && o > a && (a = o));
                  }
                  n <= a && (n = a + 1);
                  var i,
                    l = [],
                    c = s.colors,
                    d = c.length,
                    u = 0;
                  for (t = 0; t < n; t++)
                    (i = e.color.parse(c[t % d] || "#666")),
                      t % d == 0 && t && (u = u >= 0 ? (u < 0.5 ? -u - 0.2 : 0) : -u),
                      (l[t] = i.scale("rgb", 1 + u));
                  var p,
                    m = 0;
                  for (t = 0; t < r.length; ++t) {
                    if (
                      (null == (p = r[t]).color
                        ? ((p.color = l[m].toString()), ++m)
                        : "number" == typeof p.color && (p.color = l[p.color].toString()),
                      null == p.lines.show)
                    ) {
                      var g,
                        v = !0;
                      for (g in p)
                        if (p[g] && p[g].show) {
                          v = !1;
                          break;
                        }
                      v && (p.lines.show = !0);
                    }
                    null == p.lines.zero && (p.lines.zero = !!p.lines.fill),
                      (p.xaxis = P(h, S(p, "x"))),
                      (p.yaxis = P(f, S(p, "y")));
                  }
                })(),
                (function() {
                  var t,
                    n,
                    a,
                    o,
                    i,
                    s,
                    l,
                    c,
                    d,
                    u,
                    p,
                    h,
                    f = Number.POSITIVE_INFINITY,
                    m = Number.NEGATIVE_INFINITY,
                    g = Number.MAX_VALUE;
                  function v(e, t, n) {
                    t < e.datamin && t != -g && (e.datamin = t),
                      n > e.datamax && n != g && (e.datamax = n);
                  }
                  for (
                    e.each(T(), function(e, t) {
                      (t.datamin = f), (t.datamax = m), (t.used = !1);
                    }),
                      t = 0;
                    t < r.length;
                    ++t
                  )
                    ((i = r[t]).datapoints = { points: [] }),
                      y(b.processRawData, [i, i.data, i.datapoints]);
                  for (t = 0; t < r.length; ++t) {
                    if (((i = r[t]), (p = i.data), !(h = i.datapoints.format))) {
                      if (
                        ((h = []).push({ x: !0, number: !0, required: !0 }),
                        h.push({ y: !0, number: !0, required: !0 }),
                        i.bars.show || (i.lines.show && i.lines.fill))
                      ) {
                        var w = !!((i.bars.show && i.bars.zero) || (i.lines.show && i.lines.zero));
                        h.push({ y: !0, number: !0, required: !1, defaultValue: 0, autoscale: w }),
                          i.bars.horizontal && (delete h[h.length - 1].y, (h[h.length - 1].x = !0));
                      }
                      i.datapoints.format = h;
                    }
                    if (null == i.datapoints.pointsize) {
                      (i.datapoints.pointsize = h.length),
                        (l = i.datapoints.pointsize),
                        (s = i.datapoints.points);
                      var k = i.lines.show && i.lines.steps;
                      for (i.xaxis.used = i.yaxis.used = !0, n = a = 0; n < p.length; ++n, a += l) {
                        var S = null == (u = p[n]);
                        if (!S)
                          for (o = 0; o < l; ++o)
                            (c = u[o]),
                              (d = h[o]) &&
                                (d.number &&
                                  null != c &&
                                  ((c = +c),
                                  isNaN(c)
                                    ? (c = null)
                                    : c == 1 / 0
                                      ? (c = g)
                                      : c == -1 / 0 && (c = -g)),
                                null == c &&
                                  (d.required && (S = !0),
                                  null != d.defaultValue && (c = d.defaultValue))),
                              (s[a + o] = c);
                        if (S)
                          for (o = 0; o < l; ++o)
                            null != (c = s[a + o]) &&
                              !1 !== (d = h[o]).autoscale &&
                              (d.x && v(i.xaxis, c, c), d.y && v(i.yaxis, c, c)),
                              (s[a + o] = null);
                        else if (
                          k &&
                          a > 0 &&
                          null != s[a - l] &&
                          s[a - l] != s[a] &&
                          s[a - l + 1] != s[a + 1]
                        ) {
                          for (o = 0; o < l; ++o) s[a + l + o] = s[a + o];
                          (s[a + 1] = s[a - l + 1]), (a += l);
                        }
                      }
                    }
                  }
                  for (t = 0; t < r.length; ++t)
                    (i = r[t]), y(b.processDatapoints, [i, i.datapoints]);
                  for (t = 0; t < r.length; ++t) {
                    (i = r[t]),
                      (s = i.datapoints.points),
                      (l = i.datapoints.pointsize),
                      (h = i.datapoints.format);
                    var C = f,
                      P = f,
                      A = m,
                      x = m;
                    for (n = 0; n < s.length; n += l)
                      if (null != s[n])
                        for (o = 0; o < l; ++o)
                          (c = s[n + o]),
                            (d = h[o]) &&
                              !1 !== d.autoscale &&
                              c != g &&
                              c != -g &&
                              (d.x && (c < C && (C = c), c > A && (A = c)),
                              d.y && (c < P && (P = c), c > x && (x = c)));
                    if (i.bars.show) {
                      var R;
                      switch (i.bars.align) {
                        case "left":
                          R = 0;
                          break;
                        case "right":
                          R = -i.bars.barWidth;
                          break;
                        default:
                          R = -i.bars.barWidth / 2;
                      }
                      i.bars.horizontal
                        ? ((P += R), (x += R + i.bars.barWidth))
                        : ((C += R), (A += R + i.bars.barWidth));
                    }
                    v(i.xaxis, C, A), v(i.yaxis, P, x);
                  }
                  e.each(T(), function(e, t) {
                    t.datamin == f && (t.datamin = null), t.datamax == m && (t.datamax = null);
                  });
                })();
            }
            function S(e, t) {
              var n = e[t + "axis"];
              return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n;
            }
            function T() {
              return e.grep(h.concat(f), function(e) {
                return e;
              });
            }
            function C(e) {
              var t,
                n,
                a = {};
              for (t = 0; t < h.length; ++t) (n = h[t]) && n.used && (a["x" + n.n] = n.c2p(e.left));
              for (t = 0; t < f.length; ++t) (n = f[t]) && n.used && (a["y" + n.n] = n.c2p(e.top));
              return void 0 !== a.x1 && (a.x = a.x1), void 0 !== a.y1 && (a.y = a.y1), a;
            }
            function P(t, n) {
              return (
                t[n - 1] ||
                  (t[n - 1] = {
                    n: n,
                    direction: t == h ? "x" : "y",
                    options: e.extend(!0, {}, t == h ? s.xaxis : s.yaxis)
                  }),
                t[n - 1]
              );
            }
            function A() {
              L && clearTimeout(L),
                d.unbind("mousemove", F),
                d.unbind("mouseleave", O),
                d.unbind("click", B),
                y(b.shutdown, [d]);
            }
            function x(t) {
              var n = t.labelWidth,
                a = t.labelHeight,
                o = t.options.position,
                i = "x" === t.direction,
                r = t.options.tickLength,
                c = s.grid.axisMargin,
                d = s.grid.labelMargin,
                u = !0,
                p = !0,
                g = !0,
                v = !1;
              e.each(i ? h : f, function(e, n) {
                n &&
                  (n.show || n.reserveSpace) &&
                  (n === t ? (v = !0) : n.options.position === o && (v ? (p = !1) : (u = !1)),
                  v || (g = !1));
              }),
                p && (c = 0),
                null == r && (r = g ? "full" : 5),
                isNaN(+r) || (d += +r),
                i
                  ? ((a += d),
                    "bottom" == o
                      ? ((m.bottom += a + c), (t.box = { top: l.height - m.bottom, height: a }))
                      : ((t.box = { top: m.top + c, height: a }), (m.top += a + c)))
                  : ((n += d),
                    "left" == o
                      ? ((t.box = { left: m.left + c, width: n }), (m.left += n + c))
                      : ((m.right += n + c), (t.box = { left: l.width - m.right, width: n }))),
                (t.position = o),
                (t.tickLength = r),
                (t.box.padding = d),
                (t.innermost = u);
            }
            function R() {
              var n,
                a = T(),
                o = s.grid.show;
              for (var i in m) {
                var c = s.grid.margin || 0;
                m[i] = "number" == typeof c ? c : c[i] || 0;
              }
              for (var i in (y(b.processOffset, [m]), m))
                "object" == typeof s.grid.borderWidth
                  ? (m[i] += o ? s.grid.borderWidth[i] : 0)
                  : (m[i] += o ? s.grid.borderWidth : 0);
              if (
                (e.each(a, function(e, t) {
                  var n = t.options;
                  (t.show = null == n.show ? t.used : n.show),
                    (t.reserveSpace = null == n.reserveSpace ? t.show : n.reserveSpace),
                    (function(e) {
                      var t = e.options,
                        n = +(null != t.min ? t.min : e.datamin),
                        a = +(null != t.max ? t.max : e.datamax),
                        o = a - n;
                      if (0 == o) {
                        var i = 0 == a ? 1 : 0.01;
                        null == t.min && (n -= i), (null != t.max && null == t.min) || (a += i);
                      } else {
                        var r = t.autoscaleMargin;
                        null != r &&
                          (null == t.min &&
                            (n -= o * r) < 0 &&
                            null != e.datamin &&
                            e.datamin >= 0 &&
                            (n = 0),
                          null == t.max &&
                            (a += o * r) > 0 &&
                            null != e.datamax &&
                            e.datamax <= 0 &&
                            (a = 0));
                      }
                      (e.min = n), (e.max = a);
                    })(t);
                }),
                o)
              ) {
                var d = e.grep(a, function(e) {
                  return e.show || e.reserveSpace;
                });
                for (
                  e.each(d, function(t, n) {
                    !(function(t) {
                      var n,
                        a = t.options;
                      n =
                        "number" == typeof a.ticks && a.ticks > 0
                          ? a.ticks
                          : 0.3 * Math.sqrt("x" == t.direction ? l.width : l.height);
                      var o = (t.max - t.min) / n,
                        i = -Math.floor(Math.log(o) / Math.LN10),
                        r = a.tickDecimals;
                      null != r && i > r && (i = r);
                      var s,
                        c = Math.pow(10, -i),
                        d = o / c;
                      d < 1.5
                        ? (s = 1)
                        : d < 3
                          ? ((s = 2), d > 2.25 && (null == r || i + 1 <= r) && ((s = 2.5), ++i))
                          : (s = d < 7.5 ? 5 : 10);
                      (s *= c), null != a.minTickSize && s < a.minTickSize && (s = a.minTickSize);
                      if (
                        ((t.delta = o),
                        (t.tickDecimals = Math.max(0, null != r ? r : i)),
                        (t.tickSize = a.tickSize || s),
                        "time" == a.mode && !t.tickGenerator)
                      )
                        throw new Error("Time mode requires the flot.time plugin.");
                      t.tickGenerator ||
                        ((t.tickGenerator = function(e) {
                          var t,
                            n = [],
                            a = (function(e, t) {
                              return t * Math.floor(e / t);
                            })(e.min, e.tickSize),
                            o = 0,
                            i = Number.NaN;
                          do {
                            (t = i), (i = a + o * e.tickSize), n.push(i), ++o;
                          } while (i < e.max && i != t);
                          return n;
                        }),
                        (t.tickFormatter = function(e, t) {
                          var n = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
                            a = "" + Math.round(e * n) / n;
                          if (null != t.tickDecimals) {
                            var o = a.indexOf("."),
                              i = -1 == o ? 0 : a.length - o - 1;
                            if (i < t.tickDecimals)
                              return (i ? a : a + ".") + ("" + n).substr(1, t.tickDecimals - i);
                          }
                          return a;
                        }));
                      e.isFunction(a.tickFormatter) &&
                        (t.tickFormatter = function(e, t) {
                          return "" + a.tickFormatter(e, t);
                        });
                      if (null != a.alignTicksWithAxis) {
                        var u = ("x" == t.direction ? h : f)[a.alignTicksWithAxis - 1];
                        if (u && u.used && u != t) {
                          var p = t.tickGenerator(t);
                          if (
                            (p.length > 0 &&
                              (null == a.min && (t.min = Math.min(t.min, p[0])),
                              null == a.max &&
                                p.length > 1 &&
                                (t.max = Math.max(t.max, p[p.length - 1]))),
                            (t.tickGenerator = function(e) {
                              var t,
                                n,
                                a = [];
                              for (n = 0; n < u.ticks.length; ++n)
                                (t = (u.ticks[n].v - u.min) / (u.max - u.min)),
                                  (t = e.min + t * (e.max - e.min)),
                                  a.push(t);
                              return a;
                            }),
                            !t.mode && null == a.tickDecimals)
                          ) {
                            var m = Math.max(0, 1 - Math.floor(Math.log(t.delta) / Math.LN10)),
                              g = t.tickGenerator(t);
                            (g.length > 1 && /\..*0$/.test((g[1] - g[0]).toFixed(m))) ||
                              (t.tickDecimals = m);
                          }
                        }
                      }
                    })(n),
                      (function(t) {
                        var n,
                          a,
                          o = t.options.ticks,
                          i = [];
                        null == o || ("number" == typeof o && o > 0)
                          ? (i = t.tickGenerator(t))
                          : o && (i = e.isFunction(o) ? o(t) : o);
                        for (t.ticks = [], n = 0; n < i.length; ++n) {
                          var r = null,
                            s = i[n];
                          "object" == typeof s
                            ? ((a = +s[0]), s.length > 1 && (r = s[1]))
                            : (a = +s),
                            null == r && (r = t.tickFormatter(a, t)),
                            isNaN(a) || t.ticks.push({ v: a, label: r });
                        }
                      })(n),
                      (function(e, t) {
                        e.options.autoscaleMargin &&
                          t.length > 0 &&
                          (null == e.options.min && (e.min = Math.min(e.min, t[0].v)),
                          null == e.options.max &&
                            t.length > 1 &&
                            (e.max = Math.max(e.max, t[t.length - 1].v)));
                      })(n, n.ticks),
                      (function(e) {
                        for (
                          var t = e.options,
                            n = e.ticks || [],
                            a = t.labelWidth || 0,
                            o = t.labelHeight || 0,
                            i =
                              a ||
                              ("x" == e.direction ? Math.floor(l.width / (n.length || 1)) : null),
                            r = e.direction + "Axis " + e.direction + e.n + "Axis",
                            s =
                              "flot-" +
                              e.direction +
                              "-axis flot-" +
                              e.direction +
                              e.n +
                              "-axis " +
                              r,
                            c = t.font || "flot-tick-label tickLabel",
                            d = 0;
                          d < n.length;
                          ++d
                        ) {
                          var u = n[d];
                          if (u.label) {
                            var p = l.getTextInfo(s, u.label, c, null, i);
                            (a = Math.max(a, p.width)), (o = Math.max(o, p.height));
                          }
                        }
                        (e.labelWidth = t.labelWidth || a), (e.labelHeight = t.labelHeight || o);
                      })(n);
                  }),
                    n = d.length - 1;
                  n >= 0;
                  --n
                )
                  x(d[n]);
                !(function() {
                  var t,
                    n = s.grid.minBorderMargin;
                  if (null == n)
                    for (n = 0, t = 0; t < r.length; ++t)
                      n = Math.max(n, 2 * (r[t].points.radius + r[t].points.lineWidth / 2));
                  var a = { left: n, right: n, top: n, bottom: n };
                  e.each(T(), function(e, t) {
                    t.reserveSpace &&
                      t.ticks &&
                      t.ticks.length &&
                      ("x" === t.direction
                        ? ((a.left = Math.max(a.left, t.labelWidth / 2)),
                          (a.right = Math.max(a.right, t.labelWidth / 2)))
                        : ((a.bottom = Math.max(a.bottom, t.labelHeight / 2)),
                          (a.top = Math.max(a.top, t.labelHeight / 2))));
                  }),
                    (m.left = Math.ceil(Math.max(a.left, m.left))),
                    (m.right = Math.ceil(Math.max(a.right, m.right))),
                    (m.top = Math.ceil(Math.max(a.top, m.top))),
                    (m.bottom = Math.ceil(Math.max(a.bottom, m.bottom)));
                })(),
                  e.each(d, function(e, t) {
                    !(function(e) {
                      "x" == e.direction
                        ? ((e.box.left = m.left - e.labelWidth / 2),
                          (e.box.width = l.width - m.left - m.right + e.labelWidth))
                        : ((e.box.top = m.top - e.labelHeight / 2),
                          (e.box.height = l.height - m.bottom - m.top + e.labelHeight));
                    })(t);
                  });
              }
              (g = l.width - m.left - m.right),
                (v = l.height - m.bottom - m.top),
                e.each(a, function(e, t) {
                  !(function(e) {
                    function t(e) {
                      return e;
                    }
                    var n,
                      a,
                      o = e.options.transform || t,
                      i = e.options.inverseTransform;
                    "x" == e.direction
                      ? ((n = e.scale = g / Math.abs(o(e.max) - o(e.min))),
                        (a = Math.min(o(e.max), o(e.min))))
                      : ((n = -(n = e.scale = v / Math.abs(o(e.max) - o(e.min)))),
                        (a = Math.max(o(e.max), o(e.min)))),
                      (e.p2c =
                        o == t
                          ? function(e) {
                              return (e - a) * n;
                            }
                          : function(e) {
                              return (o(e) - a) * n;
                            }),
                      (e.c2p = i
                        ? function(e) {
                            return i(a + e / n);
                          }
                        : function(e) {
                            return a + e / n;
                          });
                  })(t);
                }),
                o &&
                  e.each(T(), function(e, t) {
                    var n,
                      a,
                      o,
                      i,
                      r,
                      s = t.box,
                      c = t.direction + "Axis " + t.direction + t.n + "Axis",
                      d = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + c,
                      u = t.options.font || "flot-tick-label tickLabel";
                    if ((l.removeText(d), t.show && 0 != t.ticks.length))
                      for (var p = 0; p < t.ticks.length; ++p)
                        !(n = t.ticks[p]).label ||
                          n.v < t.min ||
                          n.v > t.max ||
                          ("x" == t.direction
                            ? ((i = "center"),
                              (a = m.left + t.p2c(n.v)),
                              "bottom" == t.position
                                ? (o = s.top + s.padding)
                                : ((o = s.top + s.height - s.padding), (r = "bottom")))
                            : ((r = "middle"),
                              (o = m.top + t.p2c(n.v)),
                              "left" == t.position
                                ? ((a = s.left + s.width - s.padding), (i = "right"))
                                : (a = s.left + s.padding)),
                          l.addText(d, a, o, n.label, u, null, null, i, r));
                  }),
                (function() {
                  null != s.legend.container
                    ? e(s.legend.container).html("")
                    : t.find(".legend").remove();
                  if (!s.legend.show) return;
                  for (
                    var n, a, o = [], i = [], l = !1, c = s.legend.labelFormatter, d = 0;
                    d < r.length;
                    ++d
                  )
                    (n = r[d]).label &&
                      (a = c ? c(n.label, n) : n.label) &&
                      i.push({ label: a, color: n.color });
                  if (s.legend.sorted)
                    if (e.isFunction(s.legend.sorted)) i.sort(s.legend.sorted);
                    else if ("reverse" == s.legend.sorted) i.reverse();
                    else {
                      var u = "descending" != s.legend.sorted;
                      i.sort(function(e, t) {
                        return e.label == t.label ? 0 : e.label < t.label != u ? 1 : -1;
                      });
                    }
                  for (var d = 0; d < i.length; ++d) {
                    var p = i[d];
                    d % s.legend.noColumns == 0 && (l && o.push("</tr>"), o.push("<tr>"), (l = !0)),
                      o.push(
                        '<td class="legendColorBox"><div style="border:1px solid ' +
                          s.legend.labelBoxBorderColor +
                          ';padding:1px"><div style="width:4px;height:0;border:5px solid ' +
                          p.color +
                          ';overflow:hidden"></div></div></td><td class="legendLabel">' +
                          p.label +
                          "</td>"
                      );
                  }
                  l && o.push("</tr>");
                  if (0 == o.length) return;
                  var h =
                    '<table style="font-size:smaller;color:' +
                    s.grid.color +
                    '">' +
                    o.join("") +
                    "</table>";
                  if (null != s.legend.container) e(s.legend.container).html(h);
                  else {
                    var f = "",
                      g = s.legend.position,
                      v = s.legend.margin;
                    null == v[0] && (v = [v, v]),
                      "n" == g.charAt(0)
                        ? (f += "top:" + (v[1] + m.top) + "px;")
                        : "s" == g.charAt(0) && (f += "bottom:" + (v[1] + m.bottom) + "px;"),
                      "e" == g.charAt(1)
                        ? (f += "right:" + (v[0] + m.right) + "px;")
                        : "w" == g.charAt(1) && (f += "left:" + (v[0] + m.left) + "px;");
                    var b = e(
                      '<div class="legend">' +
                        h.replace('style="', 'style="position:absolute;' + f + ";") +
                        "</div>"
                    ).appendTo(t);
                    if (0 != s.legend.backgroundOpacity) {
                      var w = s.legend.backgroundColor;
                      null == w &&
                        (((w =
                          (w = s.grid.backgroundColor) && "string" == typeof w
                            ? e.color.parse(w)
                            : e.color.extract(b, "background-color")).a = 1),
                        (w = w.toString()));
                      var y = b.children();
                      e(
                        '<div style="position:absolute;width:' +
                          y.width() +
                          "px;height:" +
                          y.height() +
                          "px;" +
                          f +
                          "background-color:" +
                          w +
                          ';"> </div>'
                      )
                        .prependTo(b)
                        .css("opacity", s.legend.backgroundOpacity);
                    }
                  }
                })();
            }
            function D() {
              l.clear(), y(b.drawBackground, [u]);
              var e = s.grid;
              e.show &&
                e.backgroundColor &&
                (u.save(),
                u.translate(m.left, m.top),
                (u.fillStyle = G(s.grid.backgroundColor, v, 0, "rgba(255, 255, 255, 0)")),
                u.fillRect(0, 0, g, v),
                u.restore()),
                e.show && !e.aboveData && M();
              for (var t = 0; t < r.length; ++t) y(b.drawSeries, [u, r[t]]), I(r[t]);
              y(b.draw, [u]), e.show && e.aboveData && M(), l.render(), N();
            }
            function $(e, t) {
              for (var n, a, o, i, r = T(), s = 0; s < r.length; ++s)
                if (
                  (n = r[s]).direction == t &&
                  (e[(i = t + n.n + "axis")] || 1 != n.n || (i = t + "axis"), e[i])
                ) {
                  (a = e[i].from), (o = e[i].to);
                  break;
                }
              if (
                (e[i] || ((n = "x" == t ? h[0] : f[0]), (a = e[t + "1"]), (o = e[t + "2"])),
                null != a && null != o && a > o)
              ) {
                var l = a;
                (a = o), (o = l);
              }
              return { from: a, to: o, axis: n };
            }
            function M() {
              var t, n, a, o;
              u.save(), u.translate(m.left, m.top);
              var i = s.grid.markings;
              if (i)
                for (
                  e.isFunction(i) &&
                    (((n = w.getAxes()).xmin = n.xaxis.min),
                    (n.xmax = n.xaxis.max),
                    (n.ymin = n.yaxis.min),
                    (n.ymax = n.yaxis.max),
                    (i = i(n))),
                    t = 0;
                  t < i.length;
                  ++t
                ) {
                  var r = i[t],
                    l = $(r, "x"),
                    c = $(r, "y");
                  if (
                    (null == l.from && (l.from = l.axis.min),
                    null == l.to && (l.to = l.axis.max),
                    null == c.from && (c.from = c.axis.min),
                    null == c.to && (c.to = c.axis.max),
                    !(
                      l.to < l.axis.min ||
                      l.from > l.axis.max ||
                      c.to < c.axis.min ||
                      c.from > c.axis.max
                    ))
                  ) {
                    (l.from = Math.max(l.from, l.axis.min)),
                      (l.to = Math.min(l.to, l.axis.max)),
                      (c.from = Math.max(c.from, c.axis.min)),
                      (c.to = Math.min(c.to, c.axis.max));
                    var d = l.from === l.to,
                      p = c.from === c.to;
                    if (!d || !p)
                      if (
                        ((l.from = Math.floor(l.axis.p2c(l.from))),
                        (l.to = Math.floor(l.axis.p2c(l.to))),
                        (c.from = Math.floor(c.axis.p2c(c.from))),
                        (c.to = Math.floor(c.axis.p2c(c.to))),
                        d || p)
                      ) {
                        var h = r.lineWidth || s.grid.markingsLineWidth,
                          f = h % 2 ? 0.5 : 0;
                        u.beginPath(),
                          (u.strokeStyle = r.color || s.grid.markingsColor),
                          (u.lineWidth = h),
                          d
                            ? (u.moveTo(l.to + f, c.from), u.lineTo(l.to + f, c.to))
                            : (u.moveTo(l.from, c.to + f), u.lineTo(l.to, c.to + f)),
                          u.stroke();
                      } else
                        (u.fillStyle = r.color || s.grid.markingsColor),
                          u.fillRect(l.from, c.to, l.to - l.from, c.from - c.to);
                  }
                }
              (n = T()), (a = s.grid.borderWidth);
              for (var b = 0; b < n.length; ++b) {
                var y,
                  k,
                  S,
                  C,
                  P = n[b],
                  A = P.box,
                  x = P.tickLength;
                if (P.show && 0 != P.ticks.length) {
                  for (
                    u.lineWidth = 1,
                      "x" == P.direction
                        ? ((y = 0),
                          (k =
                            "full" == x
                              ? "top" == P.position
                                ? 0
                                : v
                              : A.top - m.top + ("top" == P.position ? A.height : 0)))
                        : ((k = 0),
                          (y =
                            "full" == x
                              ? "left" == P.position
                                ? 0
                                : g
                              : A.left - m.left + ("left" == P.position ? A.width : 0))),
                      P.innermost ||
                        ((u.strokeStyle = P.options.color),
                        u.beginPath(),
                        (S = C = 0),
                        "x" == P.direction ? (S = g + 1) : (C = v + 1),
                        1 == u.lineWidth &&
                          ("x" == P.direction
                            ? (k = Math.floor(k) + 0.5)
                            : (y = Math.floor(y) + 0.5)),
                        u.moveTo(y, k),
                        u.lineTo(y + S, k + C),
                        u.stroke()),
                      u.strokeStyle = P.options.tickColor,
                      u.beginPath(),
                      t = 0;
                    t < P.ticks.length;
                    ++t
                  ) {
                    var R = P.ticks[t].v;
                    (S = C = 0),
                      isNaN(R) ||
                        R < P.min ||
                        R > P.max ||
                        ("full" == x &&
                          (("object" == typeof a && a[P.position] > 0) || a > 0) &&
                          (R == P.min || R == P.max)) ||
                        ("x" == P.direction
                          ? ((y = P.p2c(R)),
                            (C = "full" == x ? -v : x),
                            "top" == P.position && (C = -C))
                          : ((k = P.p2c(R)),
                            (S = "full" == x ? -g : x),
                            "left" == P.position && (S = -S)),
                        1 == u.lineWidth &&
                          ("x" == P.direction
                            ? (y = Math.floor(y) + 0.5)
                            : (k = Math.floor(k) + 0.5)),
                        u.moveTo(y, k),
                        u.lineTo(y + S, k + C));
                  }
                  u.stroke();
                }
              }
              a &&
                ((o = s.grid.borderColor),
                "object" == typeof a || "object" == typeof o
                  ? ("object" != typeof a && (a = { top: a, right: a, bottom: a, left: a }),
                    "object" != typeof o && (o = { top: o, right: o, bottom: o, left: o }),
                    a.top > 0 &&
                      ((u.strokeStyle = o.top),
                      (u.lineWidth = a.top),
                      u.beginPath(),
                      u.moveTo(0 - a.left, 0 - a.top / 2),
                      u.lineTo(g, 0 - a.top / 2),
                      u.stroke()),
                    a.right > 0 &&
                      ((u.strokeStyle = o.right),
                      (u.lineWidth = a.right),
                      u.beginPath(),
                      u.moveTo(g + a.right / 2, 0 - a.top),
                      u.lineTo(g + a.right / 2, v),
                      u.stroke()),
                    a.bottom > 0 &&
                      ((u.strokeStyle = o.bottom),
                      (u.lineWidth = a.bottom),
                      u.beginPath(),
                      u.moveTo(g + a.right, v + a.bottom / 2),
                      u.lineTo(0, v + a.bottom / 2),
                      u.stroke()),
                    a.left > 0 &&
                      ((u.strokeStyle = o.left),
                      (u.lineWidth = a.left),
                      u.beginPath(),
                      u.moveTo(0 - a.left / 2, v + a.bottom),
                      u.lineTo(0 - a.left / 2, 0),
                      u.stroke()))
                  : ((u.lineWidth = a),
                    (u.strokeStyle = s.grid.borderColor),
                    u.strokeRect(-a / 2, -a / 2, g + a, v + a))),
                u.restore();
            }
            function I(e) {
              e.lines.show &&
                (function(e) {
                  function t(e, t, n, a, o) {
                    var i = e.points,
                      r = e.pointsize,
                      s = null,
                      l = null;
                    u.beginPath();
                    for (var c = r; c < i.length; c += r) {
                      var d = i[c - r],
                        p = i[c - r + 1],
                        h = i[c],
                        f = i[c + 1];
                      if (null != d && null != h) {
                        if (p <= f && p < o.min) {
                          if (f < o.min) continue;
                          (d = ((o.min - p) / (f - p)) * (h - d) + d), (p = o.min);
                        } else if (f <= p && f < o.min) {
                          if (p < o.min) continue;
                          (h = ((o.min - p) / (f - p)) * (h - d) + d), (f = o.min);
                        }
                        if (p >= f && p > o.max) {
                          if (f > o.max) continue;
                          (d = ((o.max - p) / (f - p)) * (h - d) + d), (p = o.max);
                        } else if (f >= p && f > o.max) {
                          if (p > o.max) continue;
                          (h = ((o.max - p) / (f - p)) * (h - d) + d), (f = o.max);
                        }
                        if (d <= h && d < a.min) {
                          if (h < a.min) continue;
                          (p = ((a.min - d) / (h - d)) * (f - p) + p), (d = a.min);
                        } else if (h <= d && h < a.min) {
                          if (d < a.min) continue;
                          (f = ((a.min - d) / (h - d)) * (f - p) + p), (h = a.min);
                        }
                        if (d >= h && d > a.max) {
                          if (h > a.max) continue;
                          (p = ((a.max - d) / (h - d)) * (f - p) + p), (d = a.max);
                        } else if (h >= d && h > a.max) {
                          if (d > a.max) continue;
                          (f = ((a.max - d) / (h - d)) * (f - p) + p), (h = a.max);
                        }
                        (d == s && p == l) || u.moveTo(a.p2c(d) + t, o.p2c(p) + n),
                          (s = h),
                          (l = f),
                          u.lineTo(a.p2c(h) + t, o.p2c(f) + n);
                      }
                    }
                    u.stroke();
                  }
                  u.save(), u.translate(m.left, m.top), (u.lineJoin = "round");
                  var n = e.lines.lineWidth,
                    a = e.shadowSize;
                  if (n > 0 && a > 0) {
                    (u.lineWidth = a), (u.strokeStyle = "rgba(0,0,0,0.1)");
                    var o = Math.PI / 18;
                    t(
                      e.datapoints,
                      Math.sin(o) * (n / 2 + a / 2),
                      Math.cos(o) * (n / 2 + a / 2),
                      e.xaxis,
                      e.yaxis
                    ),
                      (u.lineWidth = a / 2),
                      t(
                        e.datapoints,
                        Math.sin(o) * (n / 2 + a / 4),
                        Math.cos(o) * (n / 2 + a / 4),
                        e.xaxis,
                        e.yaxis
                      );
                  }
                  (u.lineWidth = n), (u.strokeStyle = e.color);
                  var i = z(e.lines, e.color, 0, v);
                  i &&
                    ((u.fillStyle = i),
                    (function(e, t, n) {
                      var a = e.points,
                        o = e.pointsize,
                        i = Math.min(Math.max(0, n.min), n.max),
                        r = 0,
                        s = !1,
                        l = 1,
                        c = 0,
                        d = 0;
                      for (; !(o > 0 && r > a.length + o); ) {
                        var p = a[(r += o) - o],
                          h = a[r - o + l],
                          f = a[r],
                          m = a[r + l];
                        if (s) {
                          if (o > 0 && null != p && null == f) {
                            (d = r), (o = -o), (l = 2);
                            continue;
                          }
                          if (o < 0 && r == c + o) {
                            u.fill(), (s = !1), (l = 1), (r = c = d + (o = -o));
                            continue;
                          }
                        }
                        if (null != p && null != f) {
                          if (p <= f && p < t.min) {
                            if (f < t.min) continue;
                            (h = ((t.min - p) / (f - p)) * (m - h) + h), (p = t.min);
                          } else if (f <= p && f < t.min) {
                            if (p < t.min) continue;
                            (m = ((t.min - p) / (f - p)) * (m - h) + h), (f = t.min);
                          }
                          if (p >= f && p > t.max) {
                            if (f > t.max) continue;
                            (h = ((t.max - p) / (f - p)) * (m - h) + h), (p = t.max);
                          } else if (f >= p && f > t.max) {
                            if (p > t.max) continue;
                            (m = ((t.max - p) / (f - p)) * (m - h) + h), (f = t.max);
                          }
                          if (
                            (s || (u.beginPath(), u.moveTo(t.p2c(p), n.p2c(i)), (s = !0)),
                            h >= n.max && m >= n.max)
                          )
                            u.lineTo(t.p2c(p), n.p2c(n.max)), u.lineTo(t.p2c(f), n.p2c(n.max));
                          else if (h <= n.min && m <= n.min)
                            u.lineTo(t.p2c(p), n.p2c(n.min)), u.lineTo(t.p2c(f), n.p2c(n.min));
                          else {
                            var g = p,
                              v = f;
                            h <= m && h < n.min && m >= n.min
                              ? ((p = ((n.min - h) / (m - h)) * (f - p) + p), (h = n.min))
                              : m <= h &&
                                m < n.min &&
                                h >= n.min &&
                                ((f = ((n.min - h) / (m - h)) * (f - p) + p), (m = n.min)),
                              h >= m && h > n.max && m <= n.max
                                ? ((p = ((n.max - h) / (m - h)) * (f - p) + p), (h = n.max))
                                : m >= h &&
                                  m > n.max &&
                                  h <= n.max &&
                                  ((f = ((n.max - h) / (m - h)) * (f - p) + p), (m = n.max)),
                              p != g && u.lineTo(t.p2c(g), n.p2c(h)),
                              u.lineTo(t.p2c(p), n.p2c(h)),
                              u.lineTo(t.p2c(f), n.p2c(m)),
                              f != v &&
                                (u.lineTo(t.p2c(f), n.p2c(m)), u.lineTo(t.p2c(v), n.p2c(m)));
                          }
                        }
                      }
                    })(e.datapoints, e.xaxis, e.yaxis));
                  n > 0 && t(e.datapoints, 0, 0, e.xaxis, e.yaxis);
                  u.restore();
                })(e),
                e.bars.show &&
                  (function(e) {
                    var t;
                    switch (
                      (u.save(),
                      u.translate(m.left, m.top),
                      (u.lineWidth = e.bars.lineWidth),
                      (u.strokeStyle = e.color),
                      e.bars.align)
                    ) {
                      case "left":
                        t = 0;
                        break;
                      case "right":
                        t = -e.bars.barWidth;
                        break;
                      default:
                        t = -e.bars.barWidth / 2;
                    }
                    var n = e.bars.fill
                      ? function(t, n) {
                          return z(e.bars, e.color, t, n);
                        }
                      : null;
                    (function(t, n, a, o, i, r) {
                      for (var s = t.points, l = t.pointsize, c = 0; c < s.length; c += l)
                        null != s[c] &&
                          E(
                            s[c],
                            s[c + 1],
                            s[c + 2],
                            n,
                            a,
                            o,
                            i,
                            r,
                            u,
                            e.bars.horizontal,
                            e.bars.lineWidth
                          );
                    })(e.datapoints, t, t + e.bars.barWidth, n, e.xaxis, e.yaxis),
                      u.restore();
                  })(e),
                e.points.show &&
                  (function(e) {
                    function t(e, t, n, a, o, i, r, s) {
                      for (var l = e.points, c = e.pointsize, d = 0; d < l.length; d += c) {
                        var p = l[d],
                          h = l[d + 1];
                        null == p ||
                          p < i.min ||
                          p > i.max ||
                          h < r.min ||
                          h > r.max ||
                          (u.beginPath(),
                          (p = i.p2c(p)),
                          (h = r.p2c(h) + a),
                          "circle" == s
                            ? u.arc(p, h, t, 0, o ? Math.PI : 2 * Math.PI, !1)
                            : s(u, p, h, t, o),
                          u.closePath(),
                          n && ((u.fillStyle = n), u.fill()),
                          u.stroke());
                      }
                    }
                    u.save(), u.translate(m.left, m.top);
                    var n = e.points.lineWidth,
                      a = e.shadowSize,
                      o = e.points.radius,
                      i = e.points.symbol;
                    0 == n && (n = 1e-4);
                    if (n > 0 && a > 0) {
                      var r = a / 2;
                      (u.lineWidth = r),
                        (u.strokeStyle = "rgba(0,0,0,0.1)"),
                        t(e.datapoints, o, null, r + r / 2, !0, e.xaxis, e.yaxis, i),
                        (u.strokeStyle = "rgba(0,0,0,0.2)"),
                        t(e.datapoints, o, null, r / 2, !0, e.xaxis, e.yaxis, i);
                    }
                    (u.lineWidth = n),
                      (u.strokeStyle = e.color),
                      t(e.datapoints, o, z(e.points, e.color), 0, !1, e.xaxis, e.yaxis, i),
                      u.restore();
                  })(e);
            }
            function E(e, t, n, a, o, i, r, s, l, c, d) {
              var u, p, h, f, m, g, v, b, w;
              c
                ? ((b = g = v = !0),
                  (m = !1),
                  (f = t + a),
                  (h = t + o),
                  (p = e) < (u = n) && ((w = p), (p = u), (u = w), (m = !0), (g = !1)))
                : ((m = g = v = !0),
                  (b = !1),
                  (u = e + a),
                  (p = e + o),
                  (f = t) < (h = n) && ((w = f), (f = h), (h = w), (b = !0), (v = !1))),
                p < r.min ||
                  u > r.max ||
                  f < s.min ||
                  h > s.max ||
                  (u < r.min && ((u = r.min), (m = !1)),
                  p > r.max && ((p = r.max), (g = !1)),
                  h < s.min && ((h = s.min), (b = !1)),
                  f > s.max && ((f = s.max), (v = !1)),
                  (u = r.p2c(u)),
                  (h = s.p2c(h)),
                  (p = r.p2c(p)),
                  (f = s.p2c(f)),
                  i && ((l.fillStyle = i(h, f)), l.fillRect(u, f, p - u, h - f)),
                  d > 0 &&
                    (m || g || v || b) &&
                    (l.beginPath(),
                    l.moveTo(u, h),
                    m ? l.lineTo(u, f) : l.moveTo(u, f),
                    v ? l.lineTo(p, f) : l.moveTo(p, f),
                    g ? l.lineTo(p, h) : l.moveTo(p, h),
                    b ? l.lineTo(u, h) : l.moveTo(u, h),
                    l.stroke()));
            }
            function z(t, n, a, o) {
              var i = t.fill;
              if (!i) return null;
              if (t.fillColor) return G(t.fillColor, a, o, n);
              var r = e.color.parse(n);
              return (r.a = "number" == typeof i ? i : 0.4), r.normalize(), r.toString();
            }
            (w.setData = k),
              (w.setupGrid = R),
              (w.draw = D),
              (w.getPlaceholder = function() {
                return t;
              }),
              (w.getCanvas = function() {
                return l.element;
              }),
              (w.getPlotOffset = function() {
                return m;
              }),
              (w.width = function() {
                return g;
              }),
              (w.height = function() {
                return v;
              }),
              (w.offset = function() {
                var e = d.offset();
                return (e.left += m.left), (e.top += m.top), e;
              }),
              (w.getData = function() {
                return r;
              }),
              (w.getAxes = function() {
                var t = {};
                return (
                  e.each(h.concat(f), function(e, n) {
                    n && (t[n.direction + (1 != n.n ? n.n : "") + "axis"] = n);
                  }),
                  t
                );
              }),
              (w.getXAxes = function() {
                return h;
              }),
              (w.getYAxes = function() {
                return f;
              }),
              (w.c2p = C),
              (w.p2c = function(e) {
                var t,
                  n,
                  a,
                  o = {};
                for (t = 0; t < h.length; ++t)
                  if (
                    (n = h[t]) &&
                    n.used &&
                    ((a = "x" + n.n), null == e[a] && 1 == n.n && (a = "x"), null != e[a])
                  ) {
                    o.left = n.p2c(e[a]);
                    break;
                  }
                for (t = 0; t < f.length; ++t)
                  if (
                    (n = f[t]) &&
                    n.used &&
                    ((a = "y" + n.n), null == e[a] && 1 == n.n && (a = "y"), null != e[a])
                  ) {
                    o.top = n.p2c(e[a]);
                    break;
                  }
                return o;
              }),
              (w.getOptions = function() {
                return s;
              }),
              (w.highlight = W),
              (w.unhighlight = V),
              (w.triggerRedrawOverlay = N),
              (w.pointOffset = function(e) {
                return {
                  left: parseInt(h[S(e, "x") - 1].p2c(+e.x) + m.left, 10),
                  top: parseInt(f[S(e, "y") - 1].p2c(+e.y) + m.top, 10)
                };
              }),
              (w.shutdown = A),
              (w.destroy = function() {
                A(),
                  t.removeData("plot").empty(),
                  (r = []),
                  (s = null),
                  (l = null),
                  (c = null),
                  (d = null),
                  (u = null),
                  (p = null),
                  (h = []),
                  (f = []),
                  (b = null),
                  (U = []),
                  (w = null);
              }),
              (w.resize = function() {
                var e = t.width(),
                  n = t.height();
                l.resize(e, n), c.resize(e, n);
              }),
              (w.hooks = b),
              (function() {
                for (var t = { Canvas: n }, a = 0; a < i.length; ++a) {
                  var o = i[a];
                  o.init(w, t), o.options && e.extend(!0, s, o.options);
                }
              })(),
              (function(n) {
                e.extend(!0, s, n), n && n.colors && (s.colors = n.colors);
                null == s.xaxis.color &&
                  (s.xaxis.color = e.color
                    .parse(s.grid.color)
                    .scale("a", 0.22)
                    .toString());
                null == s.yaxis.color &&
                  (s.yaxis.color = e.color
                    .parse(s.grid.color)
                    .scale("a", 0.22)
                    .toString());
                null == s.xaxis.tickColor &&
                  (s.xaxis.tickColor = s.grid.tickColor || s.xaxis.color);
                null == s.yaxis.tickColor &&
                  (s.yaxis.tickColor = s.grid.tickColor || s.yaxis.color);
                null == s.grid.borderColor && (s.grid.borderColor = s.grid.color);
                null == s.grid.tickColor &&
                  (s.grid.tickColor = e.color
                    .parse(s.grid.color)
                    .scale("a", 0.22)
                    .toString());
                var a,
                  o,
                  i,
                  r = t.css("font-size"),
                  l = r ? +r.replace("px", "") : 13,
                  c = {
                    style: t.css("font-style"),
                    size: Math.round(0.8 * l),
                    variant: t.css("font-variant"),
                    weight: t.css("font-weight"),
                    family: t.css("font-family")
                  };
                for (i = s.xaxes.length || 1, a = 0; a < i; ++a)
                  (o = s.xaxes[a]) && !o.tickColor && (o.tickColor = o.color),
                    (o = e.extend(!0, {}, s.xaxis, o)),
                    (s.xaxes[a] = o),
                    o.font &&
                      ((o.font = e.extend({}, c, o.font)),
                      o.font.color || (o.font.color = o.color),
                      o.font.lineHeight || (o.font.lineHeight = Math.round(1.15 * o.font.size)));
                for (i = s.yaxes.length || 1, a = 0; a < i; ++a)
                  (o = s.yaxes[a]) && !o.tickColor && (o.tickColor = o.color),
                    (o = e.extend(!0, {}, s.yaxis, o)),
                    (s.yaxes[a] = o),
                    o.font &&
                      ((o.font = e.extend({}, c, o.font)),
                      o.font.color || (o.font.color = o.color),
                      o.font.lineHeight || (o.font.lineHeight = Math.round(1.15 * o.font.size)));
                s.xaxis.noTicks && null == s.xaxis.ticks && (s.xaxis.ticks = s.xaxis.noTicks);
                s.yaxis.noTicks && null == s.yaxis.ticks && (s.yaxis.ticks = s.yaxis.noTicks);
                s.x2axis &&
                  ((s.xaxes[1] = e.extend(!0, {}, s.xaxis, s.x2axis)),
                  (s.xaxes[1].position = "top"),
                  null == s.x2axis.min && (s.xaxes[1].min = null),
                  null == s.x2axis.max && (s.xaxes[1].max = null));
                s.y2axis &&
                  ((s.yaxes[1] = e.extend(!0, {}, s.yaxis, s.y2axis)),
                  (s.yaxes[1].position = "right"),
                  null == s.y2axis.min && (s.yaxes[1].min = null),
                  null == s.y2axis.max && (s.yaxes[1].max = null));
                s.grid.coloredAreas && (s.grid.markings = s.grid.coloredAreas);
                s.grid.coloredAreasColor && (s.grid.markingsColor = s.grid.coloredAreasColor);
                s.lines && e.extend(!0, s.series.lines, s.lines);
                s.points && e.extend(!0, s.series.points, s.points);
                s.bars && e.extend(!0, s.series.bars, s.bars);
                null != s.shadowSize && (s.series.shadowSize = s.shadowSize);
                null != s.highlightColor && (s.series.highlightColor = s.highlightColor);
                for (a = 0; a < s.xaxes.length; ++a) P(h, a + 1).options = s.xaxes[a];
                for (a = 0; a < s.yaxes.length; ++a) P(f, a + 1).options = s.yaxes[a];
                for (var d in b)
                  s.hooks[d] && s.hooks[d].length && (b[d] = b[d].concat(s.hooks[d]));
                y(b.processOptions, [s]);
              })(o),
              (function() {
                t
                  .css("padding", 0)
                  .children()
                  .filter(function() {
                    return !e(this).hasClass("flot-overlay") && !e(this).hasClass("flot-base");
                  })
                  .remove(),
                  "static" == t.css("position") && t.css("position", "relative");
                (l = new n("flot-base", t)),
                  (c = new n("flot-overlay", t)),
                  (u = l.context),
                  (p = c.context),
                  (d = e(c.element).unbind());
                var a = t.data("plot");
                a && (a.shutdown(), c.clear());
                t.data("plot", w);
              })(),
              k(a),
              R(),
              D(),
              (function() {
                s.grid.hoverable && (d.mousemove(F), d.bind("mouseleave", O));
                s.grid.clickable && d.click(B);
                y(b.bindEvents, [d]);
              })();
            var U = [],
              L = null;
            function F(e) {
              s.grid.hoverable &&
                j("plothover", e, function(e) {
                  return 0 != e.hoverable;
                });
            }
            function O(e) {
              s.grid.hoverable &&
                j("plothover", e, function(e) {
                  return !1;
                });
            }
            function B(e) {
              j("plotclick", e, function(e) {
                return 0 != e.clickable;
              });
            }
            function j(e, n, a) {
              var o = d.offset(),
                i = n.pageX - o.left - m.left,
                l = n.pageY - o.top - m.top,
                c = C({ left: i, top: l });
              (c.pageX = n.pageX), (c.pageY = n.pageY);
              var u = (function(e, t, n) {
                var a,
                  o,
                  i,
                  l = s.grid.mouseActiveRadius,
                  c = l * l + 1,
                  d = null;
                for (a = r.length - 1; a >= 0; --a)
                  if (n(r[a])) {
                    var u = r[a],
                      p = u.xaxis,
                      h = u.yaxis,
                      f = u.datapoints.points,
                      m = p.c2p(e),
                      g = h.c2p(t),
                      v = l / p.scale,
                      b = l / h.scale;
                    if (
                      ((i = u.datapoints.pointsize),
                      p.options.inverseTransform && (v = Number.MAX_VALUE),
                      h.options.inverseTransform && (b = Number.MAX_VALUE),
                      u.lines.show || u.points.show)
                    )
                      for (o = 0; o < f.length; o += i) {
                        var w = f[o],
                          y = f[o + 1];
                        if (null != w && !(w - m > v || w - m < -v || y - g > b || y - g < -b)) {
                          var k = Math.abs(p.p2c(w) - e),
                            S = Math.abs(h.p2c(y) - t),
                            T = k * k + S * S;
                          T < c && ((c = T), (d = [a, o / i]));
                        }
                      }
                    if (u.bars.show && !d) {
                      var C, P;
                      switch (u.bars.align) {
                        case "left":
                          C = 0;
                          break;
                        case "right":
                          C = -u.bars.barWidth;
                          break;
                        default:
                          C = -u.bars.barWidth / 2;
                      }
                      for (P = C + u.bars.barWidth, o = 0; o < f.length; o += i) {
                        (w = f[o]), (y = f[o + 1]);
                        var A = f[o + 2];
                        null != w &&
                          (r[a].bars.horizontal
                            ? m <= Math.max(A, w) && m >= Math.min(A, w) && g >= y + C && g <= y + P
                            : m >= w + C &&
                              m <= w + P &&
                              g >= Math.min(A, y) &&
                              g <= Math.max(A, y)) &&
                          (d = [a, o / i]);
                      }
                    }
                  }
                return d
                  ? ((a = d[0]),
                    (o = d[1]),
                    (i = r[a].datapoints.pointsize),
                    {
                      datapoint: r[a].datapoints.points.slice(o * i, (o + 1) * i),
                      dataIndex: o,
                      series: r[a],
                      seriesIndex: a
                    })
                  : null;
              })(i, l, a);
              if (
                (u &&
                  ((u.pageX = parseInt(u.series.xaxis.p2c(u.datapoint[0]) + o.left + m.left, 10)),
                  (u.pageY = parseInt(u.series.yaxis.p2c(u.datapoint[1]) + o.top + m.top, 10))),
                s.grid.autoHighlight)
              ) {
                for (var p = 0; p < U.length; ++p) {
                  var h = U[p];
                  h.auto != e ||
                    (u &&
                      h.series == u.series &&
                      h.point[0] == u.datapoint[0] &&
                      h.point[1] == u.datapoint[1]) ||
                    V(h.series, h.point);
                }
                u && W(u.series, u.datapoint, e);
              }
              t.trigger(e, [c, u]);
            }
            function N() {
              var e = s.interaction.redrawOverlayInterval;
              -1 != e ? L || (L = setTimeout(H, e)) : H();
            }
            function H() {
              var e, t;
              for (
                L = null, p.save(), c.clear(), p.translate(m.left, m.top), e = 0;
                e < U.length;
                ++e
              )
                (t = U[e]).series.bars.show ? _(t.series, t.point) : q(t.series, t.point);
              p.restore(), y(b.drawOverlay, [p]);
            }
            function W(e, t, n) {
              if (("number" == typeof e && (e = r[e]), "number" == typeof t)) {
                var a = e.datapoints.pointsize;
                t = e.datapoints.points.slice(a * t, a * (t + 1));
              }
              var o = Y(e, t);
              -1 == o ? (U.push({ series: e, point: t, auto: n }), N()) : n || (U[o].auto = !1);
            }
            function V(e, t) {
              if (null == e && null == t) return (U = []), void N();
              if (("number" == typeof e && (e = r[e]), "number" == typeof t)) {
                var n = e.datapoints.pointsize;
                t = e.datapoints.points.slice(n * t, n * (t + 1));
              }
              var a = Y(e, t);
              -1 != a && (U.splice(a, 1), N());
            }
            function Y(e, t) {
              for (var n = 0; n < U.length; ++n) {
                var a = U[n];
                if (a.series == e && a.point[0] == t[0] && a.point[1] == t[1]) return n;
              }
              return -1;
            }
            function q(t, n) {
              var a = n[0],
                o = n[1],
                i = t.xaxis,
                r = t.yaxis,
                s =
                  "string" == typeof t.highlightColor
                    ? t.highlightColor
                    : e.color
                        .parse(t.color)
                        .scale("a", 0.5)
                        .toString();
              if (!(a < i.min || a > i.max || o < r.min || o > r.max)) {
                var l = t.points.radius + t.points.lineWidth / 2;
                (p.lineWidth = l), (p.strokeStyle = s);
                var c = 1.5 * l;
                (a = i.p2c(a)),
                  (o = r.p2c(o)),
                  p.beginPath(),
                  "circle" == t.points.symbol
                    ? p.arc(a, o, c, 0, 2 * Math.PI, !1)
                    : t.points.symbol(p, a, o, c, !1),
                  p.closePath(),
                  p.stroke();
              }
            }
            function _(t, n) {
              var a,
                o =
                  "string" == typeof t.highlightColor
                    ? t.highlightColor
                    : e.color
                        .parse(t.color)
                        .scale("a", 0.5)
                        .toString(),
                i = o;
              switch (t.bars.align) {
                case "left":
                  a = 0;
                  break;
                case "right":
                  a = -t.bars.barWidth;
                  break;
                default:
                  a = -t.bars.barWidth / 2;
              }
              (p.lineWidth = t.bars.lineWidth),
                (p.strokeStyle = o),
                E(
                  n[0],
                  n[1],
                  n[2] || 0,
                  a,
                  a + t.bars.barWidth,
                  function() {
                    return i;
                  },
                  t.xaxis,
                  t.yaxis,
                  p,
                  t.bars.horizontal,
                  t.bars.lineWidth
                );
            }
            function G(t, n, a, o) {
              if ("string" == typeof t) return t;
              for (
                var i = u.createLinearGradient(0, a, 0, n), r = 0, s = t.colors.length;
                r < s;
                ++r
              ) {
                var l = t.colors[r];
                if ("string" != typeof l) {
                  var c = e.color.parse(o);
                  null != l.brightness && (c = c.scale("rgb", l.brightness)),
                    null != l.opacity && (c.a *= l.opacity),
                    (l = c.toString());
                }
                i.addColorStop(r / (s - 1), l);
              }
              return i;
            }
          }
          e.fn.detach ||
            (e.fn.detach = function() {
              return this.each(function() {
                this.parentNode && this.parentNode.removeChild(this);
              });
            }),
            (n.prototype.resize = function(e, t) {
              if (e <= 0 || t <= 0)
                throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
              var n = this.element,
                a = this.context,
                o = this.pixelRatio;
              this.width != e && ((n.width = e * o), (n.style.width = e + "px"), (this.width = e)),
                this.height != t &&
                  ((n.height = t * o), (n.style.height = t + "px"), (this.height = t)),
                a.restore(),
                a.save(),
                a.scale(o, o);
            }),
            (n.prototype.clear = function() {
              this.context.clearRect(0, 0, this.width, this.height);
            }),
            (n.prototype.render = function() {
              var e = this._textCache;
              for (var n in e)
                if (t.call(e, n)) {
                  var a = this.getTextLayer(n),
                    o = e[n];
                  for (var i in (a.hide(), o))
                    if (t.call(o, i)) {
                      var r = o[i];
                      for (var s in r)
                        if (t.call(r, s)) {
                          for (var l, c = r[s].positions, d = 0; (l = c[d]); d++)
                            l.active
                              ? l.rendered || (a.append(l.element), (l.rendered = !0))
                              : (c.splice(d--, 1), l.rendered && l.element.detach());
                          0 == c.length && delete r[s];
                        }
                    }
                  a.show();
                }
            }),
            (n.prototype.getTextLayer = function(t) {
              var n = this.text[t];
              return (
                null == n &&
                  (null == this.textContainer &&
                    (this.textContainer = e("<div class='flot-text'></div>")
                      .css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        "font-size": "smaller",
                        color: "#545454"
                      })
                      .insertAfter(this.element)),
                  (n = this.text[t] = e("<div></div>")
                    .addClass(t)
                    .css({ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 })
                    .appendTo(this.textContainer))),
                n
              );
            }),
            (n.prototype.getTextInfo = function(t, n, a, o, i) {
              var r, s, l, c;
              if (
                ((n = "" + n),
                (r =
                  "object" == typeof a
                    ? a.style +
                      " " +
                      a.variant +
                      " " +
                      a.weight +
                      " " +
                      a.size +
                      "px/" +
                      a.lineHeight +
                      "px " +
                      a.family
                    : a),
                null == (s = this._textCache[t]) && (s = this._textCache[t] = {}),
                null == (l = s[r]) && (l = s[r] = {}),
                null == (c = l[n]))
              ) {
                var d = e("<div></div>")
                  .html(n)
                  .css({ position: "absolute", "max-width": i, top: -9999 })
                  .appendTo(this.getTextLayer(t));
                "object" == typeof a
                  ? d.css({ font: r, color: a.color })
                  : "string" == typeof a && d.addClass(a),
                  (c = l[n] = {
                    width: d.outerWidth(!0),
                    height: d.outerHeight(!0),
                    element: d,
                    positions: []
                  }),
                  d.detach();
              }
              return c;
            }),
            (n.prototype.addText = function(e, t, n, a, o, i, r, s, l) {
              var c = this.getTextInfo(e, a, o, i, r),
                d = c.positions;
              "center" == s ? (t -= c.width / 2) : "right" == s && (t -= c.width),
                "middle" == l ? (n -= c.height / 2) : "bottom" == l && (n -= c.height);
              for (var u, p = 0; (u = d[p]); p++)
                if (u.x == t && u.y == n) return void (u.active = !0);
              (u = {
                active: !0,
                rendered: !1,
                element: d.length ? c.element.clone() : c.element,
                x: t,
                y: n
              }),
                d.push(u),
                u.element.css({ top: Math.round(n), left: Math.round(t), "text-align": s });
            }),
            (n.prototype.removeText = function(e, n, a, o, i, r) {
              if (null == o) {
                var s = this._textCache[e];
                if (null != s)
                  for (var l in s)
                    if (t.call(s, l)) {
                      var c = s[l];
                      for (var d in c)
                        if (t.call(c, d))
                          for (var u = c[d].positions, p = 0; (h = u[p]); p++) h.active = !1;
                    }
              } else {
                var h;
                for (u = this.getTextInfo(e, o, i, r).positions, p = 0; (h = u[p]); p++)
                  h.x == n && h.y == a && (h.active = !1);
              }
            }),
            (e.plot = function(t, n, o) {
              return new a(e(t), n, o, e.plot.plugins);
            }),
            (e.plot.version = "0.8.3"),
            (e.plot.plugins = []),
            (e.fn.plot = function(t, n) {
              return this.each(function() {
                e.plot(this, t, n);
              });
            });
        })(e);
    }.call(this, n(1)));
  },
  function(e, t, n) {
    (function(e) {
      !(function(e) {
        function t(e, t) {
          return t * Math.floor(e / t);
        }
        function n(e, t, n, a) {
          if ("function" == typeof e.strftime) return e.strftime(t);
          var o,
            i = function(e, t) {
              return (e = "" + e), (t = "" + (null == t ? "0" : t)), 1 == e.length ? t + e : e;
            },
            r = [],
            s = !1,
            l = e.getHours(),
            c = l < 12;
          null == n &&
            (n = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]),
            null == a && (a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
            (o = l > 12 ? l - 12 : 0 == l ? 12 : l);
          for (var d = 0; d < t.length; ++d) {
            var u = t.charAt(d);
            if (s) {
              switch (u) {
                case "a":
                  u = "" + a[e.getDay()];
                  break;
                case "b":
                  u = "" + n[e.getMonth()];
                  break;
                case "d":
                  u = i(e.getDate());
                  break;
                case "e":
                  u = i(e.getDate(), " ");
                  break;
                case "h":
                case "H":
                  u = i(l);
                  break;
                case "I":
                  u = i(o);
                  break;
                case "l":
                  u = i(o, " ");
                  break;
                case "m":
                  u = i(e.getMonth() + 1);
                  break;
                case "M":
                  u = i(e.getMinutes());
                  break;
                case "q":
                  u = "" + (Math.floor(e.getMonth() / 3) + 1);
                  break;
                case "S":
                  u = i(e.getSeconds());
                  break;
                case "y":
                  u = i(e.getFullYear() % 100);
                  break;
                case "Y":
                  u = "" + e.getFullYear();
                  break;
                case "p":
                  u = c ? "am" : "pm";
                  break;
                case "P":
                  u = c ? "AM" : "PM";
                  break;
                case "w":
                  u = "" + e.getDay();
              }
              r.push(u), (s = !1);
            } else "%" == u ? (s = !0) : r.push(u);
          }
          return r.join("");
        }
        function a(e) {
          function t(e, t, n, a) {
            e[t] = function() {
              return n[a].apply(n, arguments);
            };
          }
          var n = { date: e };
          void 0 != e.strftime && t(n, "strftime", e, "strftime"),
            t(n, "getTime", e, "getTime"),
            t(n, "setTime", e, "setTime");
          for (
            var a = [
                "Date",
                "Day",
                "FullYear",
                "Hours",
                "Milliseconds",
                "Minutes",
                "Month",
                "Seconds"
              ],
              o = 0;
            o < a.length;
            o++
          )
            t(n, "get" + a[o], e, "getUTC" + a[o]), t(n, "set" + a[o], e, "setUTC" + a[o]);
          return n;
        }
        function o(e, t) {
          if ("browser" == t.timezone) return new Date(e);
          if (t.timezone && "utc" != t.timezone) {
            if ("undefined" != typeof timezoneJS && void 0 !== timezoneJS.Date) {
              var n = new timezoneJS.Date();
              return n.setTimezone(t.timezone), n.setTime(e), n;
            }
            return a(new Date(e));
          }
          return a(new Date(e));
        }
        var i = {
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            month: 2592e6,
            quarter: 7776e6,
            year: 525949.2 * 60 * 1e3
          },
          r = [
            [1, "second"],
            [2, "second"],
            [5, "second"],
            [10, "second"],
            [30, "second"],
            [1, "minute"],
            [2, "minute"],
            [5, "minute"],
            [10, "minute"],
            [30, "minute"],
            [1, "hour"],
            [2, "hour"],
            [4, "hour"],
            [8, "hour"],
            [12, "hour"],
            [1, "day"],
            [2, "day"],
            [3, "day"],
            [0.25, "month"],
            [0.5, "month"],
            [1, "month"],
            [2, "month"]
          ],
          s = r.concat([[3, "month"], [6, "month"], [1, "year"]]),
          l = r.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);
        e.plot.plugins.push({
          init: function(a) {
            a.hooks.processOptions.push(function(a, r) {
              e.each(a.getAxes(), function(e, a) {
                var r = a.options;
                "time" == r.mode &&
                  ((a.tickGenerator = function(e) {
                    var n = [],
                      a = o(e.min, r),
                      c = 0,
                      d =
                        (r.tickSize && "quarter" === r.tickSize[1]) ||
                        (r.minTickSize && "quarter" === r.minTickSize[1])
                          ? l
                          : s;
                    null != r.minTickSize &&
                      (c =
                        "number" == typeof r.tickSize
                          ? r.tickSize
                          : r.minTickSize[0] * i[r.minTickSize[1]]);
                    for (
                      var u = 0;
                      u < d.length - 1 &&
                      !(
                        e.delta < (d[u][0] * i[d[u][1]] + d[u + 1][0] * i[d[u + 1][1]]) / 2 &&
                        d[u][0] * i[d[u][1]] >= c
                      );
                      ++u
                    );
                    var p = d[u][0],
                      h = d[u][1];
                    if ("year" == h) {
                      if (null != r.minTickSize && "year" == r.minTickSize[1])
                        p = Math.floor(r.minTickSize[0]);
                      else {
                        var f = Math.pow(10, Math.floor(Math.log(e.delta / i.year) / Math.LN10)),
                          m = e.delta / i.year / f;
                        (p = m < 1.5 ? 1 : m < 3 ? 2 : m < 7.5 ? 5 : 10), (p *= f);
                      }
                      p < 1 && (p = 1);
                    }
                    e.tickSize = r.tickSize || [p, h];
                    var g = e.tickSize[0];
                    h = e.tickSize[1];
                    var v = g * i[h];
                    "second" == h
                      ? a.setSeconds(t(a.getSeconds(), g))
                      : "minute" == h
                        ? a.setMinutes(t(a.getMinutes(), g))
                        : "hour" == h
                          ? a.setHours(t(a.getHours(), g))
                          : "month" == h
                            ? a.setMonth(t(a.getMonth(), g))
                            : "quarter" == h
                              ? a.setMonth(3 * t(a.getMonth() / 3, g))
                              : "year" == h && a.setFullYear(t(a.getFullYear(), g)),
                      a.setMilliseconds(0),
                      v >= i.minute && a.setSeconds(0),
                      v >= i.hour && a.setMinutes(0),
                      v >= i.day && a.setHours(0),
                      v >= 4 * i.day && a.setDate(1),
                      v >= 2 * i.month && a.setMonth(t(a.getMonth(), 3)),
                      v >= 2 * i.quarter && a.setMonth(t(a.getMonth(), 6)),
                      v >= i.year && a.setMonth(0);
                    var b,
                      w = 0,
                      y = Number.NaN;
                    do {
                      if (((b = y), (y = a.getTime()), n.push(y), "month" == h || "quarter" == h))
                        if (g < 1) {
                          a.setDate(1);
                          var k = a.getTime();
                          a.setMonth(a.getMonth() + ("quarter" == h ? 3 : 1));
                          var S = a.getTime();
                          a.setTime(y + w * i.hour + (S - k) * g),
                            (w = a.getHours()),
                            a.setHours(0);
                        } else a.setMonth(a.getMonth() + g * ("quarter" == h ? 3 : 1));
                      else "year" == h ? a.setFullYear(a.getFullYear() + g) : a.setTime(y + v);
                    } while (y < e.max && y != b);
                    return n;
                  }),
                  (a.tickFormatter = function(e, t) {
                    var a = o(e, t.options);
                    if (null != r.timeformat) return n(a, r.timeformat, r.monthNames, r.dayNames);
                    var s =
                        (t.options.tickSize && "quarter" == t.options.tickSize[1]) ||
                        (t.options.minTickSize && "quarter" == t.options.minTickSize[1]),
                      l = t.tickSize[0] * i[t.tickSize[1]],
                      c = t.max - t.min,
                      d = r.twelveHourClock ? " %p" : "",
                      u = r.twelveHourClock ? "%I" : "%H";
                    return n(
                      a,
                      l < i.minute
                        ? u + ":%M:%S" + d
                        : l < i.day
                          ? c < 2 * i.day
                            ? u + ":%M" + d
                            : "%b %d " + u + ":%M" + d
                          : l < i.month
                            ? "%b %d"
                            : (s && l < i.quarter) || (!s && l < i.year)
                              ? c < i.year
                                ? "%b"
                                : "%b %Y"
                              : s && l < i.year
                                ? c < i.year
                                  ? "Q%q"
                                  : "Q%q %Y"
                                : "%Y",
                      r.monthNames,
                      r.dayNames
                    );
                  }));
              });
            });
          },
          options: {
            xaxis: { timezone: null, timeformat: null, twelveHourClock: !1, monthNames: null }
          },
          name: "time",
          version: "1.0"
        }),
          (e.plot.formatDate = n),
          (e.plot.dateGenerator = o);
      })(e);
    }.call(this, n(1)));
  },
  function(e, t, n) {},
  ,
  ,
  ,
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.nl_NL = {
        Search: "Zoeken",
        Add: "Toevoegen",
        "By URIs": "met URI",
        "By Torrents": "met Torrents",
        "By Metalinks": "met Metalinks",
        Manage: "Beheren",
        "Pause All": "Alles pauzeren",
        "Resume Paused": "Hervatten",
        "Purge Completed": "Verwijder de voleindigden",
        Settings: "Instellingen",
        "Connection Settings": "Verbindingsinstellingen",
        "Global Settings": "Globale instellingen",
        "Server info": "Informatie over de server",
        "About and contribute": "Over het project en bijdragen",
        "Toggle navigation": "Navigatie omschakelen",
        Language: "Taal",
        Miscellaneous: "Overig",
        "Global Statistics": "Globale statistieken",
        About: "Over het project",
        Displaying: " ",
        of: "van",
        downloads: "downloads weergegeven",
        "Download Filters": "Download filters",
        Running: "Bezig",
        Active: "Actief",
        Waiting: "Wachtend",
        Complete: "Voleindigd",
        Error: "Foutief",
        Paused: "Gepauzeerd",
        Removed: "Verwijderd",
        "Hide linked meta-data": "Gekoppelde metadata verbergen",
        Toggle: "Omschakelen",
        "Reset filters": "Filters terugzetten",
        "Quick Access Settings": "Snelle-toegang instellingen",
        "Save settings": "Instellingen opslaan",
        "Currently no download in line to display, use the":
          "Momenteel geen downloads weer te geven, gebruik de ",
        "download button to start downloading files!": "knop om bestanden te gaan downloaden!",
        Peers: "Peers",
        "More Info": "Meer informatie",
        Remove: "Verwijderen",
        "# of": "Aantal",
        Length: "Lengte",
        "Add Downloads By URIs": "Downloads toevoegen met URI",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- Je kunt meerdere downloads (bestanden) tezelfdertijd toevoegen door de URIs voor elk bestand op een aparte regel te zetten.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Je kunt ook meerdere URIs (mirrors) voor *hetzelfde* bestand toevoegen. Scheidt hiervoor de URIs met een spatie.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- Een URI kan HTTP(S)/FTP/BitTorrent-Magnet zijn.",
        "Download settings": "Download instellingen",
        "Advanced settings": "Geavanceerde instellingen",
        Cancel: "Annuleren",
        Start: "Starten",
        Choose: "Kiezen",
        "Quick Access (shown on the main page)": "Snelle toegang (op de hoofdpagina)",
        "Add Downloads By Torrents": "Downloads toevoegen met torrents",
        "- Select the torrent from the local filesystem to start the download.":
          "- Selecteer de torrent van het locale bestandssysteem om de download te starten.",
        "- You can select multiple torrents to start multiple downloads.":
          "- Je kunt meerdere torrents selecteren voor meerdere downloads.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- Om een BitTorrent-Magnet URL toe te voegen, gebruik de Toevoegen met URI optie, en voeg het daar toe.",
        "Select Torrents": "Selecteer torrents",
        "Select a Torrent": "Selecteer een torrent",
        "Add Downloads By Metalinks": "Download toevoegen met Metalinks",
        "Select Metalinks": "Selecteer Metalinks",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Selecteer de Metalink van het locale bestandssysteem om de download te starten.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- Selecter meerdere Metalinks om meerdere downloads te starten.",
        "Select a Metalink": "Selecteer een Metalink",
        "Choose files to start download for":
          "Bestanden kiezen waarvoor het downloaden beginnen moet",
        "Select to download": "Selecteer om te downloaden",
        "Aria2 RPC host and port": "Aria2 RPC server en poort",
        "Enter the host": "Server invoeren",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Voer de IP of DNS naam van de server waarop de RPC van Aria2 loopt (standaard: localhost)",
        "Enter the port": "Poort invoeren",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Invoeren van de serverpoort waarop de RPC van Aria2 loopt (standaard: 6800)",
        "Enter the RPC path": "Invoeren van het RPC pad",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Invoeren van het eindpunt van het Aria2 RPC pad (standaard: /jsonrpc)",
        "SSL/TLS encryption": "SSL/TLS versleuteling",
        "Enable SSL/TLS encryption": "SSL/TLS versleuteling inschakelen",
        "Enter the secret token (optional)": "Invoeren van het wachtwoord (facultatief)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Invoeren van het Aria2 RPC wachtwoord (niet invullen als authenticatie niet is ingeschakeld)",
        "Enter the username (optional)": "Invoeren van de gebruikersnaam (facultatief)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Invoeren van de Aria2 RPC gebruikersnaam (niet invullen als authenticatie niet is ingeschakeld)",
        "Enter the password (optional)": "Invoeren van het wachtwoord (facultatief)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Invoeren van het Aria2 RPC wachtwoord (niet invullen als authenticatie niet is ingeschakeld)",
        "Enter base URL (optional)": "Invoeren van de basis URL (facultatief)",
        "Direct Download": "Direct downloaden",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Als ingevoerd dan worden links aangemaakt die het direct downloaden van de Aria2 server toestaan.",
        "(Requires appropriate webserver to be configurured.)":
          "Hiervoor moet een geschikte webserver worden ingericht.)",
        "Save Connection configuration": "Verbindingsconfiguratie opslaan",
        Filter: "Filter",
        "Aria2 server info": "Aria2 server informatie",
        "Aria2 Version": "Aria2 versie",
        "Features Enabled": "Geactiveerde kenmerken",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Om de nieuwste versie van het project te downloaden, problemen te rapporteren of bij te dragen, ga naar",
        "Or you can open the latest version in the browser through":
          "Of je kunt hier de nieuwste versie in je browser openen",
        Close: "Afsluiten"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.en_US = {
        Search: "Search",
        Add: "Add",
        "By URIs": "By URIs",
        "By Torrents": "By Torrents",
        "By Metalinks": "By Metalinks",
        Manage: "Manage",
        "Pause All": "Pause All",
        "Resume Paused": "Resume Paused",
        "Purge Completed": "Purge Completed",
        Settings: "Settings",
        "Connection Settings": "Connection Settings",
        "Global Settings": "Global Settings",
        "Server info": "Server info",
        "About and contribute": "About and contribute",
        "Toggle navigation": "Toggle navigation",
        Miscellaneous: "Miscellaneous",
        "Global Statistics": "Global Statistics",
        About: "About",
        Displaying: "Displaying",
        of: "of",
        downloads: "downloads",
        Language: "Language",
        "Download Filters": "Download Filters",
        Running: "Running",
        Active: "Active",
        Waiting: "Waiting",
        Complete: "Complete",
        Error: "Error",
        Paused: "Paused",
        Removed: "Removed",
        "Hide linked meta-data": "Hide linked meta-data",
        Toggle: "Toggle",
        "Reset filters": "Reset filters",
        Verifing: "Verifing",
        "Verify Pending": "Verify Pending",
        "Quick Access Settings": "Quick Access Settings",
        Save: "Save",
        "Save settings": "Save settings",
        "Currently no download in line to display, use the":
          "Currently no download in line to display, use the",
        "download button to start downloading files!":
          "download button to start downloading files!",
        Peers: "Peers",
        "More Info": "More Info",
        Remove: "Remove",
        "# of": "# of",
        Length: "Length",
        "Add Downloads By URIs": "Add Downloads By URIs",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "Download settings",
        "Advanced settings": "Advanced settings",
        Cancel: "Cancel",
        Start: "Start",
        Choose: "Choose",
        "Quick Access (shown on the main page)": "Quick Access (shown on the main page)",
        "Add Downloads By Torrents": "Add Downloads By Torrents",
        "- Select the torrent from the local filesystem to start the download.":
          "- Select the torrent from the local filesystem to start the download.",
        "- You can select multiple torrents to start multiple downloads.":
          "- You can select multiple torrents to start multiple downloads.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.",
        "Select Torrents": "Select Torrents",
        "Select a Torrent": "Select a Torrent",
        "Add Downloads By Metalinks": "Add Downloads By Metalinks",
        "Select Metalinks": "Select Metalinks",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Select the Metalink from the local filesystem to start the download.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- You can select multiple Metalinks to start multiple downloads.",
        "Select a Metalink": "Select a Metalink",
        "Choose files to start download for": "Choose files to start download for",
        "Select to download": "Select to download",
        "Aria2 RPC host and port": "Aria2 RPC host and port",
        "Enter the host": "Enter the host",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)",
        "Enter the port": "Enter the port",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)",
        "Enter the RPC path": "Enter the RPC path",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)",
        "SSL/TLS encryption": "SSL/TLS encryption",
        "Enable SSL/TLS encryption": "Enable SSL/TLS encryption",
        "Enter the secret token (optional)": "Enter the secret token (optional)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)",
        "Enter the username (optional)": "Enter the username (optional)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Enter the Aria2 RPC username (empty if authentication not enabled)",
        "Enter the password (optional)": "Enter the password (optional)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Enter the Aria2 RPC password (empty if authentication not enabled)",
        "Enter base URL (optional)": "Enter base URL (optional)",
        "Direct Download": "Direct Download",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "If supplied, links will be created to enable direct download from the Aria2 server.",
        "(Requires appropriate webserver to be configured.)":
          "(Requires appropriate webserver to be configured.)",
        "Save Connection configuration": "Save Connection configuration",
        Filter: "Filter",
        "Aria2 server info": "Aria2 server info",
        "Aria2 Version": "Aria2 Version",
        "Features Enabled": "Features Enabled",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "To download the latest version of the project, add issues or to contribute back, head on to",
        "Or you can open the latest version in the browser through":
          "Or you can open the latest version in the browser through",
        Close: "Close",
        "Download status": "Download status",
        "Download Speed": "Download Speed",
        "Upload Speed": "Upload Speed",
        "Estimated time": "Estimated time",
        "Download Size": "Download Size",
        Downloaded: "Downloaded",
        Progress: "Progress",
        "Download Path": "Download Path",
        Uploaded: "Uploaded",
        "Download GID": "Download GID",
        "Number of Pieces": "Number of Pieces",
        "Piece Length": "Piece Length",
        "Shutdown Server": "Shutdown Server",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "The last connection attempt was unsuccessful. Trying another configuration",
        "Oh Snap!": "Oh Snap!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Successfully connected to Aria2 through its remote RPC ???",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "Trying to connect to aria2 using the new connection configuration",
        "Remove {{name}} and associated meta-data?": "Remove {{name}} and associated meta-data?"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.th_TH = {
        Search: "???????????????",
        Add: "???????????????",
        "By URIs": "????????????????????????????????????",
        "By Torrents": "???????????????????????????????????????",
        "By Metalinks": "???????????????????????????????????????",
        Manage: "??????????????????",
        "Pause All": "?????????????????????????????????????????????",
        "Resume Paused": "????????????????????????",
        "Purge Completed": "??????????????????????????????",
        Settings: "?????????????????????",
        "Connection Settings": "????????????????????????????????????????????????",
        "Global Settings": "???????????????????????????????????????",
        "Server info": "????????????????????????????????????????????????",
        "About and contribute": "????????????????????????????????????????????????",
        "Toggle navigation": "???????????????????????????",
        Language: "????????????",
        Miscellaneous: "???????????????????????????",
        "Global Statistics": "?????????????????????????????????",
        About: "???????????????????????????",
        Displaying: "??????????????????????????????????????????",
        of: "???????????????",
        downloads: "??????????????????????????????",
        "Download Filters": "???????????????????????????????????????",
        Running: "??????????????????????????????",
        Active: "??????????????????????????????",
        Waiting: "?????????????????????",
        Complete: "???????????????",
        Error: "?????????????????????",
        Paused: "????????????????????????",
        Removed: "??????????????????",
        "Hide linked meta-data": "??????????????????????????????????????????????????????????????????????????????",
        Toggle: "????????????",
        "Reset filters": "????????????????????????????????????",
        "Quick Access Settings": "?????????????????????????????????????????????????????????",
        "Save settings": "????????????????????????????????????????????????",
        "Currently no download in line to display, use the":
          "??????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????",
        "download button to start downloading files!": "???????????????????????????????????????????????????????????????",
        Peers: "???????????????",
        "More Info": "?????????????????????????????????",
        Remove: "??????",
        "# of": "???????????????",
        Length: "?????????????????????",
        "Add Downloads By URIs": "??????????????????????????????????????????????????????????????????????????????",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "",
        "Download settings": "?????????????????????????????????????????????????????????",
        "Advanced settings": "??????????????????????????????????????????",
        Cancel: "??????????????????",
        Start: "????????????????????????",
        Choose: "???????????????",
        "Quick Access (shown on the main page)": "?????????????????????????????????????????????????????? (??????????????????????????????????????????)",
        "Add Downloads By Torrents": "?????????????????????????????????????????????????????????????????????????????????",
        "- Select the torrent from the local filesystem to start the download.": "",
        "- You can select multiple torrents to start multiple downloads.": "",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.": "",
        "Select Torrents": "??????????????????????????????????????????",
        "Select a Torrent": "??????????????????????????????????????????",
        "Add Downloads By Metalinks": "?????????????????????????????????????????????????????????????????????????????????",
        "Select Metalinks": "??????????????????????????????????????????",
        "- Select the Metalink from the local filesystem to start the download.": "",
        "- You can select multiple Metalinks to start multiple downloads.": "",
        "Select a Metalink": "??????????????????????????????????????????",
        "Choose files to start download for": "????????????????????????????????????????????????????????????????????????????????????",
        "Select to download": "???????????????????????????????????????????????????",
        "Aria2 RPC host and port": "???????????????????????????????????????????????? Aria2 RPC",
        "Enter the host": "???????????????????????????",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "",
        "Enter the port": "???????????????????????????",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)": "",
        "Enter the RPC path": "????????????????????????????????? RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)": "",
        "SSL/TLS encryption": "?????????????????????????????????????????? SSL/TLS",
        "Enable SSL/TLS encryption": "??????????????????????????????????????????????????????????????? SSL/TLS",
        "Enter the secret token (optional)": "???????????????????????????????????????????????????????????? (????????????????????????????????????)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)": "",
        "Enter the username (optional)": "??????????????????????????? (????????????????????????????????????)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)": "",
        "Enter the password (optional)": "???????????????????????????????????? (????????????????????????????????????)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)": "",
        "Enter base URL (optional)": "???????????? URL ???????????? (????????????????????????????????????)",
        "Direct Download": "?????????????????????????????????????????????",
        "If supplied, links will be created to enable direct download from the Aria2 server.": "",
        "(Requires appropriate webserver to be configured.)": "",
        "Save Connection configuration": "????????????????????????????????????????????????????????????????????????????????????",
        Filter: "????????????",
        "Aria2 server info": "???????????????????????????????????????????????? Aria2",
        "Aria2 Version": "???????????? Aria2",
        "Features Enabled": "??????????????????????????????????????????????????????????????????",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "??????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????? ????????????????????????????????????????????????????????????????????? ???????????????",
        "Or you can open the latest version in the browser through":
          "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
        Close: "?????????"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.zh_CN = {
        Search: "??????",
        Add: "??????",
        "By URIs": "????????????",
        "By Torrents": "????????????",
        "By Metalinks": "?????? Metalink",
        Manage: "??????",
        "Pause All": "????????????",
        "Resume Paused": "????????????",
        "Purge Completed": "???????????????",
        "Shutdown Server": "???????????????",
        Settings: "??????",
        "Connection Settings": "????????????",
        "Global Settings": "????????????",
        "Server info": "???????????????",
        "About and contribute": "???????????????",
        "Toggle navigation": "????????????",
        Miscellaneous: "??????",
        "Global Statistics": "????????????",
        About: "??????",
        Displaying: "????????????",
        of: "/",
        downloads: "??????",
        Language: "??????",
        "Download Filters": "???????????????",
        Running: "?????????",
        Active: "?????????",
        Waiting: "?????????",
        Complete: "?????????",
        Error: "?????????",
        Paused: "?????????",
        Removed: "?????????",
        "Hide linked meta-data": "????????????????????????",
        Toggle: "????????????",
        "Reset filters": "???????????????",
        Verifing: "????????????",
        "Verify Pending": "????????????",
        "Quick Access Settings": "??????????????????",
        Save: "??????",
        "Save settings": "????????????",
        "Currently no download in line to display, use the": "??????????????????????????????????????????",
        "download button to start downloading files!": "????????????????????????",
        Peers: "Peers",
        "More Info": "????????????",
        Remove: "??????",
        "# of": "??????",
        Length: "?????????",
        "Add Downloads By URIs": "??????????????????",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- ???????????????????????????????????????????????????????????????????????????",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- ????????????????????????????????????????????????????????????????????????????????????????????????????????????",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "- ??????????????? HTTP(S)???FTP ??????????????????",
        "Download settings": "????????????",
        "Advanced settings": "????????????",
        Cancel: "??????",
        Start: "??????",
        Choose: "??????",
        "Quick Access (shown on the main page)": "????????????????????????????????????",
        "Add Downloads By Torrents": "??????????????????",
        "- Select the torrent from the local filesystem to start the download.":
          "- ??????????????????????????????????????????????????????",
        "- You can select multiple torrents to start multiple downloads.":
          "- ?????????????????????????????????????????????????????????",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- ???????????????????????????????????????????????????????????????",
        "Select Torrents": "??????????????????",
        "Select a Torrent": "??????????????????",
        "Add Downloads By Metalinks": "?????? Metalink ??????",
        "Select Metalinks": "?????? Metalink ??????",
        "- Select the Metalink from the local filesystem to start the download.":
          "* ??????????????????????????? Metalink ?????????????????????",
        "- You can select multiple Metalinks to start multiple downloads.":
          "* ??????????????????????????? Metalink ??????????????????????????????",
        "Select a Metalink": "?????? Metalink ??????",
        "Choose files to start download for": "???????????????????????????",
        "Select to download": "???????????????",
        "Aria2 RPC host and port": "Aria2 RPC ???????????????",
        "Enter the host": "??????",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "?????? Aria2 RPC ?????????????????? IP ?????????????????????localhost???",
        "Enter the port": "??????",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "?????? Aria2 RPC ?????????????????????6800???",
        "Enter the RPC path": "RPC ??????",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "?????? Aria2 RPC ??????????????????/jsonrpc???",
        "SSL/TLS encryption": "SSL/TLS ??????",
        "Enable SSL/TLS encryption": "?????? SSL/TLS ??????",
        "Enter the secret token (optional)": "????????????????????????",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "?????? Aria2 RPC ??????????????????????????????????????????",
        "Enter the username (optional)": "?????????????????????",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "?????? Aria2 RPC ???????????????????????????????????????????????????",
        "Enter the password (optional)": "??????????????????",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "?????? Aria2 RPC ????????????????????????????????????????????????",
        "Enter base URL (optional)": "??????????????????????????????",
        "Direct Download": "????????????",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "??????????????????????????????????????????????????? Aria2 ????????????????????????????????????",
        "(Requires appropriate webserver to be configured.)": "????????? WEB ????????????????????????",
        "Save Connection configuration": "??????????????????",
        Filter: "??????",
        "Aria2 server info": "Aria2 ???????????????",
        "Aria2 Version": "Aria2 ??????",
        "Features Enabled": "???????????????",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "??????????????????????????????????????????????????????",
        "Or you can open the latest version in the browser through":
          "???????????????????????????????????????????????????",
        Close: "??????",
        "Download status": "??????????????????",
        "Download Speed": "??????????????????",
        "Upload Speed": "??????????????????",
        "Estimated time": "??????????????????",
        "Download Size": "???????????????",
        Downloaded: "???????????????",
        Progress: "??????????????????",
        "Download Path": "??????????????????",
        Uploaded: "???????????????",
        "Download GID": "????????? GID",
        "Number of Pieces": "???????????????",
        "Piece Length": "????????????",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "???????????????????????????????????????????????????????????????",
        "Oh Snap!": "?????????",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "??????????????? Aria2 RPC ??????????????????10???????????????????????????????????????????????????????????? ?????? > ????????????",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "????????? Aria2 RPC ?????????????????????????????????10???????????????????????????????????????????????????????????????????????? ?????? > ????????????",
        "Successfully connected to Aria2 through its remote RPC ???": "?????? RPC ????????? Aria2 ?????????",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "?????? RPC ????????? Aria2 ?????????????????????????????????????????????????????????????????????????????? Aria2 ?????????????????????????????????????????? --rpc-secret ?????????",
        "Trying to connect to aria2 using the new connection configuration":
          "???????????????????????????????????????????????? Aria2 ??????",
        "Remove {{name}} and associated meta-data?": "???????????? {{name}} ????????????????????????"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.zh_TW = {
        Search: "??????",
        Add: "??????",
        "By URIs": "????????????",
        "By Torrents": "????????????",
        "By Metalinks": "?????? Metalink",
        Manage: "??????",
        "Pause All": "????????????",
        "Resume Paused": "????????????",
        "Purge Completed": "???????????????",
        "Shutdown Server": "???????????????",
        Settings: "??????",
        "Connection Settings": "????????????",
        "Global Settings": "???????????????",
        "Server info": "???????????????",
        "About and contribute": "???????????????",
        "Toggle navigation": "????????????",
        Miscellaneous: "??????",
        "Global Statistics": "???????????????",
        About: "??????",
        Displaying: "????????????",
        of: "/",
        downloads: "??????",
        Language: "??????",
        "Download Filters": "???????????????",
        Running: "?????????",
        Active: "?????????",
        Waiting: "?????????",
        Complete: "?????????",
        Error: "?????????",
        Paused: "?????????",
        Removed: "?????????",
        "Hide linked meta-data": "????????????????????????",
        Toggle: "????????????",
        "Reset filters": "???????????????",
        Verifing: "????????????",
        "Verify Pending": "????????????",
        "Quick Access Settings": "??????????????????",
        Save: "??????",
        "Save settings": "????????????",
        "Currently no download in line to display, use the": "??????????????????????????????????????????",
        "download button to start downloading files!": "????????????????????????",
        Peers: "Peers",
        "More Info": "????????????",
        Remove: "??????",
        "# of": "??????",
        Length: "?????????",
        "Add Downloads By URIs": "??????????????????",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- ???????????????????????????????????????????????????????????????????????????",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- ????????????????????????????????????????????????????????????????????????????????????????????????????????????",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "- ??????????????? HTTP(S)???FTP ??????????????????",
        "Download settings": "????????????",
        "Advanced settings": "????????????",
        Cancel: "??????",
        Start: "??????",
        Choose: "??????",
        "Quick Access (shown on the main page)": "????????????????????????????????????",
        "Add Downloads By Torrents": "??????????????????",
        "- Select the torrent from the local filesystem to start the download.":
          "- ??????????????????????????????????????????????????????",
        "- You can select multiple torrents to start multiple downloads.":
          "- ?????????????????????????????????????????????????????????",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- ???????????????????????????????????????????????????????????????",
        "Select Torrents": "??????????????????",
        "Select a Torrent": "??????????????????",
        "Add Downloads By Metalinks": "?????? Metalink ??????",
        "Select Metalinks": "?????? Metalink ??????",
        "- Select the Metalink from the local filesystem to start the download.":
          "* ??????????????????????????? Metalink ?????????????????????",
        "- You can select multiple Metalinks to start multiple downloads.":
          "* ??????????????????????????? Metalink ??????????????????????????????",
        "Select a Metalink": "?????? Metalink ??????",
        "Choose files to start download for": "???????????????????????????",
        "Select to download": "???????????????",
        "Aria2 RPC host and port": "Aria2 RPC ????????????",
        "Enter the host": "??????",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "?????? Aria2 RPC ?????????????????? IP ?????????????????????localhost???",
        "Enter the port": "??????",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "?????? Aria2 RPC ??????????????????6800???",
        "Enter the RPC path": "RPC ??????",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "?????? Aria2 RPC ??????????????????/jsonrpc???",
        "SSL/TLS encryption": "SSL/TLS ??????",
        "Enable SSL/TLS encryption": "?????? SSL/TLS ??????",
        "Enter the secret token (optional)": "????????????????????????",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "?????? Aria2 RPC ??????????????????????????????????????????",
        "Enter the username (optional)": "???????????????????????????",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "?????? Aria2 RPC ?????????????????????????????????????????????????????????",
        "Enter the password (optional)": "??????????????????",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "?????? Aria2 RPC ????????????????????????????????????????????????",
        "Enter base URL (optional)": "??????????????????????????????",
        "Direct Download": "????????????",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "??????????????????????????????????????????????????? Aria2 ????????????????????????????????????",
        "(Requires appropriate webserver to be configured.)": "????????? WEB ????????????????????????",
        "Save Connection configuration": "??????????????????",
        Filter: "??????",
        "Aria2 server info": "Aria2 ???????????????",
        "Aria2 Version": "Aria2 ??????",
        "Features Enabled": "???????????????",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "??????????????????????????????????????????????????????",
        "Or you can open the latest version in the browser through":
          "???????????????????????????????????????????????????",
        Close: "??????",
        "Download status": "??????????????????",
        "Download Speed": "??????????????????",
        "Upload Speed": "??????????????????",
        "Estimated time": "??????????????????",
        "Download Size": "???????????????",
        Downloaded: "???????????????",
        Progress: "??????????????????",
        "Download Path": "??????????????????",
        Uploaded: "???????????????",
        "Download GID": "????????? GID",
        "Number of Pieces": "???????????????",
        "Piece Length": "????????????",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "???????????????????????????????????????????????????????????????",
        "Oh Snap!": "?????????",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "??????????????? Aria2 RPC ??????????????????10???????????????????????????????????????????????????????????? ?????? > ????????????",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "????????? Aria2 RPC ?????????????????????????????????10???????????????????????????????????????????????????????????????????????? ?????? > ????????????",
        "Successfully connected to Aria2 through its remote RPC ???": "?????? RPC ????????? Aria2 ?????????",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "?????? RPC ????????? Aria2 ?????????????????????????????????????????????????????????????????????????????? Aria2 ?????????????????????????????????????????? --rpc-secret ?????????",
        "Trying to connect to aria2 using the new connection configuration":
          "???????????????????????????????????????????????? Aria2 ??????",
        "Remove {{name}} and associated meta-data?": "???????????? {{name}} ????????????????????????"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.pl_PL = {
        Search: "Szukaj",
        Add: "Dodaj",
        "By URIs": "Przez URL",
        "By Torrents": "Przez Torrenty",
        "By Metalinks": "Przez Metalinki",
        Manage: "Zarz??dzaj",
        "Pause All": "Zatrzymaj wszystkie",
        "Resume Paused": "Wzn??w zatrzymane",
        "Purge Completed": "Czy???? zako??czone",
        Settings: "Ustawienia",
        "Connection Settings": "Ustawienia po????czenia",
        "Global Settings": "Ustawienia globalne",
        "Server info": "Informacje o serwerze",
        "About and contribute": "O projekcie",
        "Toggle navigation": "Prze????cz nawigacj??",
        Miscellaneous: "R????ne",
        "Global Statistics": "Statystyki globalne",
        About: "O",
        Displaying: "Wy??wietlanie",
        of: "z",
        downloads: "pobranych plik??w",
        Language: "J??zyk",
        "Download Filters": "Filtry ??ci??gania",
        Running: "Uruchomione",
        Active: "Aktywne",
        Waiting: "Oczekuj??ce",
        Complete: "Zako??czone",
        Error: "B????d",
        Paused: "Zatrzymane",
        Removed: "Usuni??te",
        "Hide linked meta-data": "Ukryj zalinkowane meta-dane",
        Toggle: "Prze????cz",
        "Reset filters": "Reset filtr??w",
        "Quick Access Settings": "Ustawienia szybkiego dost??pu",
        "Save settings": "Zapisz ustawienia",
        "Currently no download in line to display, use the":
          "Obecnie nie mo??na wy??wietli?? ??adnych pobieranych plik??w. U??yj przycisku",
        "download button to start downloading files!": "aby rozpocz???? ??ci??ganie plik??w!",
        Peers: "Peer??w",
        "More Info": "Wi??cej info",
        Remove: "Usu??",
        "# of": "# z",
        Length: "D??ugo????",
        "Add Downloads By URIs": "Dodaj pobieranie przez URI",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- Mo??esz doda?? wiele pobra?? (plik??w) w tym samym czasie przez wprowadzenie URI dla ka??dego w oddzielnej linii.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Mo??esz tak??e doda?? wiele URI (luster) dla tego *samego* pliku. Zr??b to, poprzez oddzielenie URI od siebie spacj??.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- URI mo??e by?? HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "Ustawienia pobierania",
        "Advanced settings": "Zaawansowane ustawienia",
        Cancel: "Anuluj",
        Start: "Rozpocznij",
        Choose: "Wybierz",
        "Quick Access (shown on the main page)": "Szybki dost??p (pokazywane na g????wnej stronie)",
        "Add Downloads By Torrents": "Dodaj pobierania przez Torrenty",
        "- Select the torrent from the local filesystem to start the download.":
          "- Wybierz torrent z lokalnego systemu plik??w, aby rozpocz???? pobieranie.",
        "- You can select multiple torrents to start multiple downloads.":
          "- Mo??esz wybra?? wiele torrent??w do rozpocz??cia wiele pobra??.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- Aby doda?? BitTorrent-URL Magnetyczny, u??yj opcji dodawania przez URI i dodaj to tutaj.",
        "Select Torrents": "Wybierz Torrenty",
        "Select a Torrent": "Wybierz Torrent",
        "Add Downloads By Metalinks": "Dodaj pobierania przez Metalinki",
        "Select Metalinks": "Wybierz Metalinki",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Wybierz Metalinki z lokalnego systemu plik??w, aby rozpocz???? pobieranie.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- Mo??esz wybra?? wiele Metalink??w, aby rozpocz???? wiele pobra??.",
        "Select a Metalink": "Wybierz Metalink",
        "Choose files to start download for": "Wybierz pliki, aby rozpocz???? pobieranie dla",
        "Select to download": "Wybierz do pobierania",
        "Aria2 RPC host and port": "Aria2 RPC host i port",
        "Enter the host": "Wprowad?? host",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Wprowad?? IP lub nazw?? DNS serwera, na kt??rym jest uruchomiona Aria2 z RPC (domy??lnie: localhost)",
        "Enter the port": "Wprowad?? port",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Wprowad?? port serwera, na kt??rym Aria2 z RPC jest uruchomiona (domy??lnie 6800)",
        "Enter the RPC path": "Wprowad?? ??cie??k?? RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Wprowad?? ??cie??k?? dla punktu ko??cowego Aria2 RPC (domy??lnie: /jsonrpc)",
        "SSL/TLS encryption": "szyfrowanie SSL/TLS",
        "Enable SSL/TLS encryption": "W????cz szyfrowanie SSL/TLS",
        "Enter the secret token (optional)": "Wprowad?? sekretny token (opcja dodatkowa)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Wprowad?? sekretny token Aria2 RPC (pozostaw puste, je??eli uwierzytelnienie nie jest w????czone)",
        "Enter the username (optional)": "Wprowad?? nazw?? u??ytkownika (opcja dodatkowa)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Wprowad?? nazw?? u??ytkownika Aria2 RPC (pozostaw puste, je??eli uwierzytelnienie nie jest w????czone)",
        "Enter the password (optional)": "Wprowad?? has??o (opcja dodatkowa)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Wprowad?? has??o Aria2 RPC (pozostaw puste, je??eli uwierzytelnienie nie jest w????czone)",
        "Enter base URL (optional)": "Wprowad?? podstawowy URL (opcja dodatkowa)",
        "Direct Download": "Bezpo??rednie pobieranie",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Je??eli zaznaczone, linki mog?? by?? utworzone do w????czenia bezpo??redniego pobierania z serwera Aria2",
        "(Requires appropriate webserver to be configured.)":
          "(Wymaga w??a??ciwej konfiguracji serwera WWW)",
        "Save Connection configuration": "Zapisz konfiguracj?? po????czenia",
        Filter: "Filtr",
        "Aria2 server info": "Info o serwerze Aria2",
        "Aria2 Version": "Wersja Aria2",
        "Features Enabled": "W????czone funkcje",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Aby ??ci??gn???? najnowsz?? wersj?? projektu, doda?? zg??odzenia lub wspomaga?? projekt, udaj si?? do",
        "Or you can open the latest version in the browser through":
          "Lub otw??rz najnowsz?? wersj?? przez przegl??dark??",
        Close: "Zamknij",
        "Download status": "Status pobierania",
        "Download Speed": "Szybko???? pobierania",
        "Upload Speed": "Szybko???? wysy??ania",
        "Estimated time": "Pozosta??y czas",
        "Download Size": "Rozmiar pobierania",
        Downloaded: "Pobrane",
        Progress: "Post??p",
        "Download Path": "??cie??ka pobierania",
        Uploaded: "Za??adowany",
        "Download GID": "GID pobierania",
        "Number of Pieces": "Liczba kawa??k??w",
        "Piece Length": "Rozmiar kawa??ka",
        "Shutdown Server": "Wy????cz serwer",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "Ostatnia pr??ba po????czenia nie powiod??a si??. Spr??buj innej konfiguracji",
        "Oh Snap!": "O kurcz??!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "Nie mo??na po????czy?? si?? z serwerem aria2 przez RPC. Kolejna pr??ba za 10 sekund. By?? mo??e potrzebujesz sprawdzi?? ustawienie po????czenia poprzez Ustawienia > Ustawienia po????czenia",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Pomy??lnie po????czono si?? z Aria2 przez RPC ...",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Pomy??lnie po????czono si?? z Aria2 przez RPC, jednak??e po????czenie nie jest bezpieczne. Aby zabezpieczy?? dodaj sekretny token autoryzacji podczas startu Aria2 (przez u??ycie flagi --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "Pr??ba po????czenia si?? z Aria2 poprzez u??ycie nowej konfiguracji po????czenia"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.fr_FR = {
        Search: "Rechercher",
        Add: "Ajouter",
        "By URIs": "Par URIs",
        "By Torrents": "Par Torrents",
        "By Metalinks": "Par Metaliens",
        Manage: "G??rer",
        "Pause All": "Tout suspendre",
        "Resume Paused": "Reprendre",
        "Purge Completed": "Nettoyer les fichiers compl??t??s",
        Settings: "Param??tres",
        "Connection Settings": "Param??tres de connexion",
        "Global Settings": "Param??tres globaux",
        "Server info": "Informations serveur",
        "About and contribute": "?? propos et contribuer",
        "Toggle navigation": "Basculer la navigation",
        Miscellaneous: "Autres",
        "Global Statistics": "Statistiques globales",
        About: "?? propos",
        Displaying: "Affichage de",
        of: "parmi",
        downloads: "t??l??chargements",
        Language: "Langue",
        "Download Filters": "Filtres de t??l??chargement",
        Running: "En cours",
        Active: "Actifs",
        Waiting: "En attente",
        Complete: "Compl??t??s",
        Error: "Erreurs",
        Paused: "En pause",
        Removed: "Supprim??s",
        "Hide linked meta-data": "Cacher les m??tadonn??es li??es",
        Toggle: "Basculer",
        "Reset filters": "R??initialiser les filtres",
        Verifing: "V??rification",
        "Verify Pending": "V??rification en attente",
        "Quick Access Settings": "Param??tres d'acc??s rapide",
        Save: "Sauvegarder",
        "Save settings": "Sauvegarder les param??tres",
        "Currently no download in line to display, use the":
          "Aucun t??l??chargement dans la file d'attente, utilisez le bouton de t??l??chargement",
        "download button to start downloading files!":
          "pour commencer ?? t??l??charger des fichiers !",
        Peers: "Pairs",
        "More Info": "Plus d'infos",
        Remove: "Supprimer",
        "# of": "# parmi",
        Length: "Longueur",
        "Add Downloads By URIs": "Ajouter des t??l??chargements depuis des URIs",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "Vous pouvez ajouter plusieurs t??l??chargements (fichiers) en m??me temps, en mettant une URI pour chaque fichier sur une nouvelle ligne",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "Vous pouvez aussi ajouter plusieurs URIs (mirroirs) pour le *m??me* fichier. Pour ce faire, s??parez les URIs par un espace.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "Une URI peut ??tre HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "Param??tres de t??l??chargement",
        "Advanced settings": "Param??tres avanc??s",
        Cancel: "Annuler",
        Start: "D??marrer",
        Choose: "Choisir",
        "Quick Access (shown on the main page)": "Acc??s rapide (affich?? sur la page principale",
        "Add Downloads By Torrents": "Ajouter des t??l??chargements ?? partir de fichiers Torrent",
        "- Select the torrent from the local filesystem to start the download.":
          "- S??lectionnez le torrent depuis votre syst??me de fichier local pour commencer le t??l??chargement.",
        "- You can select multiple torrents to start multiple downloads.":
          "Vous pouvez s??lectionner plusieurs torrents pour commencer plusieurs t??l??chargements.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "Pour ajouter une URL BitTorrent-Magnet, utilisez l'option Ajouter par URIs et ajoutez-la ?? ce niveau.",
        "Select Torrents": "S??lectionner des Torrents",
        "Select a Torrent": "S??lectionner un Torrent",
        "Add Downloads By Metalinks": "Ajouter des t??l??chargements par Metaliens",
        "Select Metalinks": "S??lectionner des M??taliens",
        "- Select the Metalink from the local filesystem to start the download.":
          "S??lectionner le M??talien depuis votre syst??me de fichier local pour commencer le t??l??chargement.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "Vous pouvez s??lectionner plusieurs M??taliens pour commencer plusieurs t??l??chargements.",
        "Select a Metalink": "S??lectionner un M??talien",
        "Choose files to start download for":
          "S??lectionner les fichiers pour lesquels commencer le t??l??chargement.",
        "Select to download": "S??lectionner pour t??l??charger",
        "Aria2 RPC host and port": "H??te et ports Aria2 RPC",
        "Enter the host": "Entrer l'h??te",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Entrer l'IP ou le nom DNS du serveur sur lequel est lanc?? le RPC pour Aria2 (d??faut : localhost)",
        "Enter the port": "Entrer le port",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Entrer le port du serveur sur lequel tourne le RPC pour Aria2 (d??faut : 6800)",
        "Enter the RPC path": "Entrer le chemin vers le RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Entrer le chemin final pour le RPC Aria2 (d??faut : /jsonrpc)",
        "SSL/TLS encryption": "Chiffrage SSL/TLS",
        "Enable SSL/TLS encryption": "Activer le chiffrage SSL/TLS",
        "Enter the secret token (optional)": "Entrer le token secret (optionnel)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Entrer le token secret pour le RPC Aria2 (laisser vide si l'authentification n'est pas activ??e)",
        "Enter the username (optional)": "Entrer le nom d'utilisateur (optionnel)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Entrer le nom d'utilisateur RPC Aria2 (laisser vide si l'authentification n'est pas activ??e)",
        "Enter the password (optional)": "Entrer le mot de passe (optionnel)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Entrer le mot de passe RPC Aria2 (laisser vide si l'authentification n'est pas activ??e)",
        "Enter base URL (optional)": "Entrez l'URL de base",
        "Direct Download": "T??l??chargement direct",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "S'ils sont fournis, les liens seront cr????s pour activer le t??l??chargement direct depuis le serveur Aria2",
        "(Requires appropriate webserver to be configured.)":
          "(N??cessite un serveur web appropri?? pour ??tre configur??)",
        "Save Connection configuration": "Sauvegarder la configuration de connexion",
        Filter: "Filtre",
        "Aria2 server info": "Infos serveur Aria2",
        "Aria2 Version": "Version Aria2",
        "Features Enabled": "Fonctionnalit??s activ??es",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Pour t??l??charger la derni??re version du projet, signaler des probl??mes ou pour contribuer, aller ?? l'adresse",
        "Or you can open the latest version in the browser through":
          "Ou vous pouvez ouvrir la derni??re version dans le navigateur depuis",
        Close: "Fermer",
        "Download status": "Statut de t??l??chargement",
        "Download Speed": "Vitesse de t??l??chargement",
        "Upload Speed": "Vitesse d'envoi",
        "Estimated time": "Temps estim??",
        "Download Size": "Taille du t??l??chargement",
        Downloaded: "T??l??charg??",
        Progress: "Avancement",
        "Download Path": "Chemin de t??l??chargement",
        Uploaded: "Envoy??",
        "Download GID": "GID du t??l??chargement",
        "Number of Pieces": "Nombre de pi??ces",
        "Piece Length": "Taille de la pi??ce",
        "Shutdown Server": "Arr??ter le serveur",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "La derni??re tentative de connexion a ??chou??. Essai d'une autre configuration",
        "Oh Snap!": "Oh non !",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "Impossible de se connecter au serveur RPC d'aria2. Nouvel essai dans 10 secondes. Vous voudrez peut-??tre v??rifier les param??tres de connexion en allant dans Param??tres > Param??tres de connexion",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "Erreur d'authentification lors de la connexion au serveur RPC d'aria2. Nouvel essai dans 10 secondes. Vous voudrez peut-??tre confirmer les renseignements d'authentification en allant dans Param??tres > Param??tres de connexion",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Connexion r??ussie ?? aria2 via son interface RPC ???",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Connexion r??ussie ?? aria2 via l'interface RPC, cependant la connexion n'est toujours pas s??curis??e. Pour une s??curit?? compl??te, essayez d'ajouter un token secret d'autorisation en lan??ant aria2 (?? l'aide de l'option --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "Tentative de connexion ?? aria2 avec la nouvelle configuration",
        "Remove {{name}} and associated meta-data?":
          "Supprimer {{name}} et les m??tadonn??es associ??es"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.de_DE = {
        Search: "Suche",
        Add: "Hinzuf??gen",
        "By URIs": "mit URIs",
        "By Torrents": "mit Torrents",
        "By Metalinks": "mit Metalinks",
        Manage: "Verwalten",
        "Pause All": "Alle anhalten",
        "Resume Paused": "Angehaltene fortsetzen",
        "Purge Completed": "Fertige entfernen",
        Settings: "Einstellungen",
        "Connection Settings": "Verbindungseinstellungen",
        "Global Settings": "Globale Einstellungen",
        "Server info": "Server Information",
        "About and contribute": "??ber webui-aria2",
        "Toggle navigation": "Navigation an/ausschalten",
        Miscellaneous: "Verschiedenes",
        "Global Statistics": "Globale Statistiken",
        About: "??ber",
        Displaying: "Anzeige",
        of: "von",
        downloads: "Downloads",
        Language: "Sprache",
        "Download Filters": "Download Filter",
        Running: "Laufende",
        Active: "Aktive",
        Waiting: "Wartende",
        Complete: "Fertige",
        Error: "Fehler",
        Paused: "Angehaltene",
        Removed: "Gel??schte",
        "Hide linked meta-data": "Blende verlinkte Meta-Daten aus",
        Toggle: "Umschalten",
        "Reset filters": "Filter zur??cksetzen",
        "Quick Access Settings": "Ausgew??hlte Einstellungen",
        "Save settings": "Einstellungen speichern",
        "Currently no download in line to display, use the":
          "Aktuell sind keine Downloads vorhanden, bitte benutz den",
        "download button to start downloading files!":
          "Download Link um den Download von Dateien zu beginnen!",
        Peers: "Peers",
        "More Info": "Mehr Infos",
        Remove: "Entfernen",
        "# of": "# von",
        Length: "L??nge",
        "Add Downloads By URIs": "Downloads anhand von URIs hinzuf??gen",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- Es k??nnen mehrere Downloads (Dateien) gleichzeitig hinzugef??gt werden, indem jede URI in eine separate Zeile eingegeben wird.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Es k??nnen auch mehrere URIs (Spiegelserver) f??r *dieselbe* Datei durch Leerzeichen getrennt angegeben werden.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- Eine URI kann folgende Protokolle besitzen: HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "Download Einstellungen",
        "Advanced settings": "Erweiterte Einstellungen",
        Cancel: "Abbrechen",
        Start: "Beginnen",
        Choose: "Ausw??hlen",
        "Quick Access (shown on the main page)": "Schnellzugriff (Anzeige auf der Hauptseite)",
        "Add Downloads By Torrents": "Downloads mit Torrents hinzuf??gen",
        "- Select the torrent from the local filesystem to start the download.":
          "- W??hle ein Torrent vom lokalen Dateisystem um den Download zu starten",
        "- You can select multiple torrents to start multiple downloads.":
          "- Es k??nnen mehrere Torrents ausgew??hlt werden um mehrere Downloads zu starten",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- F??r BitTorrent-Magnet URLs benutz die Option 'Mit URIs hinzuf??gen'",
        "Select Torrents": "W??hle Torrents",
        "Select a Torrent": "W??hle ein Torrent",
        "Add Downloads By Metalinks": "Download mit Metalinks hinzuf??gen",
        "Select Metalinks": "W??hle Metalinks",
        "- Select the Metalink from the local filesystem to start the download.":
          "- W??hle ein Metalink vom lokalen Dateisystem um den Download zu starten",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- Es k??nnen mehrere Metalinks ausgew??hlt werden um mehrere Downloads zu starten",
        "Select a Metalink": "W??hle einen Metalink",
        "Choose files to start download for": "W??hle Dateien f??r den Download aus",
        "Select to download": "W??hle zum Download",
        "Aria2 RPC host and port": "Aria2 RPC host und port",
        "Enter the host": "Host",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Gib die IP oder den DNS Namen des Servers ein, auf dem Aria2 l??uft und mit dem du eine RPC-Verbindung etablieren willst (Standard: localhost)",
        "Enter the port": "Port",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Gib den Port des Servers ein, auf dem der RPC-Dienst von Aria2 l??uft (Standard: 6800)",
        "Enter the RPC path": "RPC Pfad",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Gib den Pfad zum Aria2 RPC Endpunkt an (Standard: /jsonrpc)",
        "SSL/TLS encryption": "SSL/TLS",
        "Enable SSL/TLS encryption": "Aktiviere SSL/TLS Verschl??sselung",
        "Enter the secret token (optional)": "Secret Token (optional)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Gib den Aria2 RPC secret Token ein (leer lassen falls keine Authentifizierung aktiv)",
        "Enter the username (optional)": "Benutzername (optional)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Gib den Aria2 RPC Benutzernamen ein (leer lassen falls keine Authentifizierung aktiv)",
        "Enter the password (optional)": "Passwort (optional)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Gib das Aria2 RPC Passwort ein (leer lassen falls keine Authentifizierung aktiv)",
        "Enter base URL (optional)": "Base URL (optional)",
        "Direct Download": "Direkter Download",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Falls angegeben, werden Links erstellt um einen direkten Download vom Aria2 Server zu erm??glichen",
        "(Requires appropriate webserver to be configured.)":
          "(Es wird ein entsprechend konfigurierter WebServer ben??tigt.)",
        "Save Connection configuration": "Speichern der Verbindungseinstellung",
        Filter: "Filter",
        "Aria2 server info": "Aria2 Server Info",
        "Aria2 Version": "Aria2 Version",
        "Features Enabled": "Aktive Funktionen",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Um die neuste Version des Projects zu laden, Fehler zu melden oder sich zu beteiligen, besuch",
        "Or you can open the latest version in the browser through":
          "Oder du kannst die neueste Version direkt in deinem Browser verwenden",
        Close: "Schlie??en",
        "Download status": "Download Status",
        "Download Speed": "Download Geschwindigkeit",
        "Upload Speed": "Upload Geschwindigkeit",
        "Estimated time": "Gesch??tzte Zeit",
        "Download Size": "Download Gr????e",
        Downloaded: "Heruntergeladen",
        Progress: "Fortschritt",
        "Download Path": "Download Pfad",
        Uploaded: "Hochgeladen",
        "Download GID": "Download GID",
        "Number of Pieces": "Anzahl der St??cken",
        "Piece Length": "Gr????e der St??cken"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.es_ES = {
        Search: "Buscar",
        Add: "A??adir",
        "By URIs": "URIs",
        "By Torrents": "Torrents",
        "By Metalinks": "Metalinks",
        Manage: "Administrar",
        "Pause All": "Pausar Todos",
        "Resume Paused": "Reanudar Pausados",
        "Purge Completed": "Purgar Completados",
        "Shutdown Server": "Desactivar servidor",
        Settings: "Ajustes",
        "Connection Settings": "Ajustes de Conexi??n",
        "Global Settings": "Ajustes Globales",
        "Server info": "Info de Servidor",
        "About and contribute": "Acerca y Colaborar",
        "Toggle navigation": "Conmutar Navegaci??n",
        Miscellaneous: "Otros",
        "Global Statistics": "Estad??sticas Globales",
        About: "Acerca de",
        Displaying: "Mostrando",
        of: "de",
        downloads: "descargas",
        Language: "Idioma",
        "Download Filters": "Filtros de Descargas",
        Running: "Procesando",
        Active: "Activo",
        Waiting: "Esperando",
        Complete: "Completo",
        Error: "Error",
        Paused: "En Pausa",
        Removed: "Eliminado",
        "Hide linked meta-data": "Ocultar metadatos adjuntos",
        Toggle: "Conmutar",
        "Reset filters": "Restablecer Filtros",
        Verifing: "Verificando",
        "Verify Pending": "Pendiente de verificaci??n",
        "Quick Access Settings": "Ajustes R??pidos",
        Save: "Guardar",
        "Save settings": "Guardar Ajustes",
        "Currently no download in line to display, use the":
          "En este momento no hay descargas para mostrar. ??Use la opci??n",
        "download button to start downloading files!": "para empezar a descargar sus archivos!",
        Peers: "Pares",
        "More Info": "Mas Info",
        Remove: "Eliminar",
        "# of": "# de",
        Length: "Longitud",
        "Add Downloads By URIs": "A??adir descargas por URIs",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "A??ada varias descargas colocando la URI de cada descarga en una l??nea separada.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "Puede a??adir URIs de espejo para *el mismo* archivo. Separe cada URI con un espacio.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "Una URI puede ser HTTP(S), FTP, BitTorrent o Magnet.",
        "Download settings": "Ajustes de Descargas",
        "Advanced settings": "Ajustes Avanzados",
        Cancel: "Cancelar",
        Start: "Iniciar",
        Choose: "Escoja",
        "Quick Access (shown on the main page)": "Acceso R??pido (Se muestra en la p??g principal)",
        "Add Downloads By Torrents": "A??adir descargas Torrent",
        "- Select the torrent from the local filesystem to start the download.":
          "Seleccione el archivo Torrent de su equipo para iniciar la descarga",
        "- You can select multiple torrents to start multiple downloads.":
          "Puede seleccionar varios torrents",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "Para los enlaces Magnet, salga de este cuadro y use la opci??n A??adir  URI",
        "Select Torrents": "Escoja los Torrents",
        "Select a Torrent": "Escoja el Torrent",
        "Add Downloads By Metalinks": "A??adir descargas Metalink",
        "Select Metalinks": "Seleccione el Metalink",
        "- Select the Metalink from the local filesystem to start the download.":
          "Escoja el archivo Metalink de su equipo para iniciar la descarga",
        "- You can select multiple Metalinks to start multiple downloads.":
          "Puede escoger varios archivos Metalink",
        "Select a Metalink": "Escoja el archivo Metalink",
        "Choose files to start download for": "Escoja los archivos que desea descargar",
        "Select to download": "Escoja que descargar",
        "Aria2 RPC host and port": "Servidor Aria2 y puerto",
        "Enter the host": "Escriba la direcci??n",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Escriba la direcci??n o nombre DNS del servidor Aria2 (por defecto: localhost)",
        "Enter the port": "Escriba el puerto",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Escriba el n??mero del puerto del servidor Aria2 (por defecto: 6800)",
        "Enter the RPC path": "Escriba la ruta RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Escriba la ruta de acceso RPC de Aria2 (por defecto: /jsonrpc)",
        "SSL/TLS encryption": "Cifrado SSL/TLS",
        "Enable SSL/TLS encryption": "Habilitar Cifrado SSL/TLS",
        "Enter the secret token (optional)": "Escriba la frase Token (opcional)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Escriba la frase Token secreta (vac??o si la autenticaci??n est?? deshabilitada)",
        "Enter the username (optional)": "Usuario (opcional)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Escriba el nombre de usuario (vac??o si la autenticaci??n est?? deshabilitada)",
        "Enter the password (optional)": "Escriba la contrase??a",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Escriba la contrase??a RPC (vac??o si la autenticaci??n est?? deshabilitada)",
        "Enter base URL (optional)": "Escriba la URL base (opcional)",
        "Direct Download": "Descarga Directa",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Esto permite crear enlaces de descarga de los archivos desde el servidor Aria2",
        "(Requires appropriate webserver to be configured.)":
          "(Requiere configuraci??n apropiada del servidor web)",
        "Save Connection configuration": "Guardar Configuraci??n",
        Filter: "Filrar",
        "Aria2 server info": "Informaci??n de servidor Aria2",
        "Aria2 Version": "Aria2 versi??n",
        "Features Enabled": "Funcionalidad disponible",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Para obtener la ??ltima versi??n del proyecto, reportar problemas o colaborar, vaya a",
        "Or you can open the latest version in the browser through":
          "Puede abrir la ??ltima versi??n en su navegador, directamente",
        Close: "Cerrar",
        "Download status": "Estado de descarga",
        "Download Speed": "Velocidad de descarga",
        "Upload Speed": "Vel. Subida",
        "Estimated time": "Tiempo estimado",
        "Download Size": "Tama??o de descarga",
        Downloaded: "Descargado",
        Progress: "Progreso",
        "Download Path": "Carpeta de descarga",
        Uploaded: "Subido",
        "Download GID": "GID de Descarga",
        "Number of Pieces": "N?? de Piezas",
        "Piece Length": "Tama??o de pieza",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "El ??ltimo intento de conexi??n fall??. Probando otra configuraci??n",
        "Oh Snap!": "Rayos???",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "No se pudo establecer una conexi??n al servidor Aria2. Reintentando en 10 segundos. Pruebe revisando la configuraci??n en Ajustes > Ajustes de Conexi??n",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "Autenticaci??n fallida con el servior Aria2 RPC. Reintentando en 10 segundos. Puede que sea necesario revisar su info de autenticaci??n en Ajustes > Ajustes de Conexi??n",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Conexi??n exitosa con el servidor Aria2 mediante la interfaz RPC",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Conexi??n exitosa con el servidor Aria2 mediante la interfaz RPC, sin embargo la conexi??n no es segura. Para mejorar la seguridad, a??ada un token de autorizaci??n al iniciar Aria2 (con la opci??n --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "Intentando conectar con el servidor Aria2 usando los nuevos Ajustes de Conexi??n"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.ru_RU = {
        Search: "??????????",
        Add: "????????????????",
        "By URIs": "URL-????????????",
        "By Torrents": "Torrent-??????????",
        "By Metalinks": "Metalink-??????????",
        Manage: "????????????????????",
        "Pause All": "?????????????????????????? ??????",
        "Resume Paused": "?????????????????????? ??????",
        "Purge Completed": "?????????????? ??????????????????????",
        Settings: "??????????????????",
        "Connection Settings": "?????????????????? ????????????????????",
        "Global Settings": "???????????????????? ??????????????????",
        "Server info": "???????????????????? ?? ??????????????",
        "About and contribute": "???????????????????? ?? ????????????????????????????",
        "Toggle navigation": "???????????????????????? ??????????????????",
        Miscellaneous: "????????????",
        "Global Statistics": "???????????????????? ????????????????????",
        About: "????",
        Displaying: "????????????????",
        of: "????",
        downloads: "????????????????",
        Language: "????????",
        "Download Filters": "???????????? ????????????????",
        Running: "????????????????????",
        Active: "????????????????",
        Waiting: "??????????????????",
        Complete: "??????????????????????",
        Error: "?? ????????????????",
        Paused: "????????????????????????????????",
        Removed: "??????????????????",
        "Hide linked meta-data": "???????????? ?????????????????? ????????????????????",
        Toggle: "??????????????????????",
        "Reset filters": "???????????????? ??????????????",
        "Quick Access Settings": "?????????????????? ???????????????? ??????????????",
        "Save settings": "?????????????????? ??????????????????",
        "Currently no download in line to display, use the":
          "???? ???????????? ???????????? ???????????? ???? ??????????????????????, ?????????????????????? ????????????",
        "download button to start downloading files!": "?????????? ???????????? ???????????????? ??????????!",
        Peers: "????????",
        "More Info": "????????????????????",
        Remove: "??????????????",
        "# of": "# ????",
        Length: "????????????",
        "Add Downloads By URIs": "???????????????? ???????????????? ???? URL-??????????????",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- ???? ???????????? ???????????????? ?????????????????? ???????????????? (????????????) ????????????????????????, ?????????????? URL-???????????? ?????? ?????????????? ?????????? ???? ?????????????????? ????????????.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- ?????????? ?????????? ???????????????? ?????????????????? URL-?????????????? (????????????) ?????? *????????????* ??????????. ?????? ?????????? ???????????????? URL-???????????? ????????????????.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- URL-?????????? ?????????? ???????? HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "?????????????????? ????????????????",
        "Advanced settings": "?????????????????????? ??????????????????",
        Cancel: "????????????",
        Start: "????????????",
        Choose: "??????????????",
        "Quick Access (shown on the main page)": "?????????????? ???????????? (???????????????? ???? ?????????????? ????????????????)",
        "Add Downloads By Torrents": "???????????????? ???????????????? ???? Torrent-????????????",
        "- Select the torrent from the local filesystem to start the download.":
          "- ???????????????? Torrent-?????????? ???? ?????????????????? ???????????????? ?????????????? ?????? ???????????? ????????????????.",
        "- You can select multiple torrents to start multiple downloads.":
          "- ???? ???????????? ?????????????? ?????????????????? Torrent-?????????? ?????? ?????????????? ???????????????????? ????????????????.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- ?????? ???????????????????? BitTorrent-Magnet ???????????? ???????????????????????????? ?????????????? ???????? *???????????????? ???? URL-????????????*",
        "Select Torrents": "???????????????? ????????????????",
        "Select a Torrent": "???????????????? ??????????????",
        "Add Downloads By Metalinks": "???????????????? ???????????????? ???? Metalink-????????????",
        "Select Metalinks": "?????????????? Metalink-??????????",
        "- Select the Metalink from the local filesystem to start the download.":
          "- ???????????????? Metalink-?????????? ???? ?????????????????? ???????????????? ?????????????? ?????? ???????????? ????????????????",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- ???? ???????????? ?????????????? ?????????????????? Metalink-???????????? ?????? ?????????????? ???????????????????? ????????????????.",
        "Select a Metalink": "???????????????? Metalink",
        "Choose files to start download for": "???????????????? ?????????? ?????????? ???????????? ???????????????? ??????",
        "Select to download": "???????????????? ?????? ????????????????",
        "Aria2 RPC host and port": "Aria2 RPC ???????? ?? ????????",
        "Enter the host": "?????????????? ????????",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "?????????????? IP ?????? DNS-?????? ??????????????, ???? ?????????????? ???????????????? Aria2 ???? ???????????????????? RPC (???? ??????????????????: localhost)",
        "Enter the port": "?????????????? ????????",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "?????????????? ???????? ??????????????, ???? ?????????????? ???????????????? Aria2 ???? ???????????????????? RPC (???? ??????????????????: 6800)",
        "Enter the RPC path": "?????????????? ???????? RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "?????????????? ???????????????? ???????? ?????? Aria2 RPC (???? ??????????????????: /jsonrpc)",
        "SSL/TLS encryption": "SSL/TLS ????????????????????",
        "Enable SSL/TLS encryption": "?????????????????? SSL/TLS ????????????????????",
        "Enter the secret token (optional)": "?????????????? ?????????????????? ?????????? (??????????????????????????)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "?????????????? ?????????????????? ?????????? Aria2 RPC (???????????????? ????????????, ???????? ?????????????????????? ???? ????????????????)",
        "Enter the username (optional)": "?????????????? ?????? ???????????????????????? (??????????????????????????)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "?????????????? ?????? ???????????????????????? Aria2 RPC (???????????????? ????????????, ???????? ?????????????????????? ???? ????????????????)",
        "Enter the password (optional)": "?????????????? ???????????? (??????????????????????????)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "?????????????? ???????????? ?????? Aria2 RPC (???????????????? ????????????, ???????? ?????????????????????? ???? ????????????????)",
        "Enter base URL (optional)": "?????????????? ?????????????? URL-?????????? (??????????????????????????)",
        "Direct Download": "???????????? ????????????????",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "???????????? (?????? ??????????????) ?????????? ?????????????? ?????? ???????????????? ?????????????????????????????? ?? ?????????????? Aria2.",
        "(Requires appropriate webserver to be configured.)":
          "(?????????????????? ?????????????????????????????? ??????-???????????? ?????? ??????????????????.)",
        "Save Connection configuration": "?????????????????? ?????????????????? ????????????????????",
        Filter: "????????????",
        "Aria2 server info": "???????????????????? ?? ?????????????? Aria2",
        "Aria2 Version": "???????????? Aria2",
        "Features Enabled": "?????????????????? ????????????????????",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "?????????? ?????????????????? ?????????????????? ???????????? ??????????????, ???????????????? ?????????????? ?????? ???????????? ???????? ??????????, ???????????????? ????",
        "Or you can open the latest version in the browser through":
          "?????? ???? ???????????? ?????????????? ?????????????????? ???????????? ?? ???????????????? ??????????",
        Close: "??????????????",
        "Download status": "???????????? ????????????????",
        "Download Speed": "???????????????? ????????????????",
        "Upload Speed": "???????????????? ????????????",
        "Estimated time": "???????????????????? ??????????",
        "Download Size": "???????????? ????????????????",
        Downloaded: "??????????????????",
        Progress: "????????????????",
        "Download Path": "???????? ?? ?????????????????????? ????????????",
        Uploaded: "????????????",
        "Download GID": "???????????????????? GID",
        "Number of Pieces": "???????????????????? ????????????",
        "Piece Length": "???????????? ????????????",
        "Shutdown Server": "?????????????????? ????????????",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "?????????????????? ?????????????? ?????????????????????? ???????? ??????????????????. ???????????????????? ???????????? ????????????????????????",
        "Oh Snap!": "??????????????!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "???? ?????????????? ???????????????????????? ?? ?????????????? Aria2 RPC. ?????????????? ?????????? ?????????????????? ?? ?????????????? 10 ????????????. ???? ???????????? ?????????????????? ?????????????????? ??????????????????????, ?????????????? ?? ???????? ?????????????????? > ?????????????????? ????????????????????",
        "Successfully connected to Aria2 through its remote RPC ???":
          "???????????????? ?????????????????????? ?? Aria2 ?????????? ?????????????????? RPC ???",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "???????????????? ?????????????????????? ?? Aria2 ?????????? ?????????????????? RPC, ???????????? ???????????????????? ?????? ?????? ??????????????????????. ?????? ?????????????????????? ???????????? ???????????????????????? ???????????????? ?????????????????? ?????????? ?????????????????????? ?????? ?????????????? aria2 (?????????? ???????? --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "?????????????? ???????????????????????? ?? aria2 ?? ???????????????????????????? ?????????? ????????????????????????"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.it_IT = {
        Search: "Cerca",
        Add: "Aggiungi",
        "By URIs": "Da URIs",
        "By Torrents": "Da Torrent",
        "By Metalinks": "Da Metalink",
        Manage: "Gestione",
        "Pause All": "Ferma tutto",
        "Resume Paused": "Riprendi fermati",
        "Purge Completed": "Togli i completi",
        Settings: "Impostazioni",
        "Connection Settings": "Impostazioni di connessione",
        "Global Settings": "Impostazioni globali",
        "Server info": "Informazioni sul server",
        "About and contribute": "Crediti e informazioni",
        "Toggle navigation": "Cambia navigazione",
        Miscellaneous: "Varie",
        "Global Statistics": "Statistiche globali",
        About: "Info",
        Displaying: "Mostra",
        of: "di",
        downloads: "downloads",
        Language: "Lingua",
        "Download Filters": "Filtri download",
        Running: "In corso",
        Active: "Attivi",
        Waiting: "In attesa",
        Complete: "Completi",
        Error: "Errore",
        Paused: "In pausa",
        Removed: "Rimossi",
        "Hide linked meta-data": "Nascondi i meta-data collegati",
        Toggle: "Cambia",
        "Reset filters": "Reimposta filtri",
        "Quick Access Settings": "Accesso rapido",
        "Save settings": "Salva impostazioni",
        "Currently no download in line to display, use the":
          "Attualmente non c'?? nessun download da mostrare, usa il pulsante ",
        "download button to start downloading files!": "dowload per cominciare a scaricare!",
        Peers: "Peers",
        "More Info": "Altre informazioni",
        Remove: "Rimuovi",
        "# of": "# di",
        Length: "Lunghezza",
        "Add Downloads By URIs": "Aggiungi Downloads da URIs",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- Puoi aggungere pi?? download(files) allo stesso tempo mettendo un'URI per riga.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Puoi anche aggiungere pi?? URI di download(mirror) per uno *stesso* file separando i vari mirror da uno spazio.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- Un URI pu?? essere un indirizzo HTTP(S)/FTP o un BitTorrent Magnet link.",
        "Download settings": "Impostazioni download",
        "Advanced settings": "Impostazioni avanzate",
        Cancel: "Cancella",
        Start: "Aggiungi",
        Choose: "Scegli",
        "Quick Access (shown on the main page)":
          "Accesso rapido (mostrato nella pagina principale)",
        "Add Downloads By Torrents": "Aggiungi Torrent",
        "- Select the torrent from the local filesystem to start the download.":
          "- Seleziona il file torrent dal tuo computer per iniziare a scaricare.",
        "- You can select multiple torrents to start multiple downloads.":
          "- Puoi aggiungere anche pi?? file contemporaneamente per iniziare pi?? dowload insieme.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- Per aggiungere un  Magnet Link BitTorrent utilizza l'opzione Aggiungi da URI.",
        "Select Torrents": "Seleziona Torrents",
        "Select a Torrent": "Seleziona un Torrent",
        "Add Downloads By Metalinks": "Aggiungi Torrent da Metalink",
        "Select Metalinks": "Seleziona Metalink",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Seleziona un Metalink dal tuo computer per iniziare il download.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- Puoi iniziare anche pi?? download selezionando pi?? Metalink.",
        "Select a Metalink": "Seleziona un Metalink",
        "Choose files to start download for": "Scegli i file da scaricare",
        "Select to download": "Seleziona per scaricare",
        "Aria2 RPC host and port": "Host e porta del server RPC di Aria2",
        "Enter the host": "Inserisci l'host",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Inserisci l'IP o il nome DNS del server dov'?? in esecuzione l'RPC per Aria2 (default: localhost)",
        "Enter the port": "Inserisci la porta",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Inserisci la porta del server dov'?? in esecuzione l'RPC per Aria2  (default: 6800)",
        "Enter the RPC path": "Inserisci la path RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Inserisci la path per l'endpoint RPC di Aria2 (default: /jsonrpc)",
        "SSL/TLS encryption": "Cifratura SSL/TLS",
        "Enable SSL/TLS encryption": "Abilita la cifratura SSL/TLS",
        "Enter the secret token (optional)": "Inserisci il token segreto (opzionale)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Inserisci il token segreto per Aria2 (lascia vuoto se non ?? abilitato)",
        "Enter the username (optional)": "Inserisci l'username (opzionale)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Inserisci l'username per l'RPC di Aria2 (lascia vuoto se non ?? abilitato)",
        "Enter the password (optional)": "Inserisci la password (opzionale)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Inserisci la password per l'RPC di Aria2 (vuota se l'autenticazione non ?? abilitata)",
        "Enter base URL (optional)": "Inserisci l'URL di base(opzionale)",
        "Direct Download": "Downaload diretto",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Se inserito, verrano creati dei link per scaricare direttamente i file dal server Aria2.",
        "(Requires appropriate webserver to be configured.)":
          "(Richiede un webserver correttamente configurato)",
        "Save Connection configuration": "Salva la configurazione di connessione",
        Filter: "Filtro",
        "Aria2 server info": "Informazioni sul server Aria2",
        "Aria2 Version": "Versione di Aria2",
        "Features Enabled": "Funzionalit?? abilitate",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Per scaricare l'ultima versione del progetto, aggiungere problemi o contribuire, visita ",
        "Or you can open the latest version in the browser through":
          "Oppure puoi aprire l'ultima versione direttamente nel browser",
        Close: "Chiudi",
        "Download status": "Stato download",
        "Download Speed": "Velocit?? download",
        "Upload Speed": "Velocit?? upload",
        "Estimated time": "Tempo stimato",
        "Download Size": "Dimensione del download",
        Downloaded: "Scaricato",
        Progress: "Progresso",
        "Download Path": "Percorso di download",
        Uploaded: "Caricato",
        "Download GID": "GID Download",
        "Number of Pieces": "Numero di segmenti",
        "Piece Length": "Lunghezza segmenti",
        "Shutdown Server": "Spegni Server",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "L'ultimo tentativo di connessione non ?? riuscito. Provo un'altra connessione",
        "Oh Snap!": "Mannaggia!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "Non riesco a connettermi al server RPC di Aria2. Riprovo tra 10 secondi. Forse vuoi controllare le impostazioni di connessione in Impostazioni > Impostazioni di connessione",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Connesso con successo a Aria2 mediante RPC remoto ???",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Correttamente connesso al server Aria2 mediante RPC, ma in modo non sicuro. Per una completa sicurezza prova ad aggiungere un token di autorizzazione segreto all'avvio di Aria2 (mediante il flag --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "Provo a connettermi a Aria2 attraverso le nuove impostazioni"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.tr_TR = {
        Search: "Arama",
        Add: "Ekle",
        "By URIs": "URI ile",
        "By Torrents": "Torrent ile",
        "By Metalinks": "Metalink ile",
        Manage: "Y??net",
        "Pause All": "Hepsini Duraklat",
        "Resume Paused": "Devam Et",
        "Purge Completed": "Temizleme Tamamland??",
        Settings: "Ayarlar",
        "Connection Settings": "Ba??lant?? Ayarlar??",
        "Global Settings": "Genel Ayarlar",
        "Server info": "Sunucu bilgisi",
        "About and contribute": "Hakk??nda ve katk??da bulunanlar",
        "Toggle navigation": "Gezinmeyi a?? / kapat",
        Miscellaneous: "??e??itli",
        "Global Statistics": "Genel ??statistikler",
        About: "Hakk??nda",
        Displaying: "G??steriliyor",
        of: " / ",
        downloads: "Indirme",
        Language: "Dil",
        "Download Filters": "??ndirme Filtreleri",
        Running: "??al??????yor",
        Active: "Aktif",
        Waiting: "Bekliyor",
        Complete: "Tamamland??",
        Error: "Hata",
        Paused: "Duraklat??ld??",
        Removed: "Silindi",
        "Hide linked meta-data": "Ba??l?? meta verileri gizle",
        Toggle: "a??/kapat",
        "Reset filters": "Filtreleri s??f??rla",
        "Quick Access Settings": "H??zl?? Eri??im Ayarlar??",
        "Save settings": "Ayarlar?? kaydet",
        "Currently no download in line to display, use the":
          "??u anda g??r??nt??lenebilecek bir indirme yok,",
        "download button to start downloading files!":
          "butonu arac??l?????? ile dosya indirebilirsiniz!",
        Peers: "Peers",
        "More Info": "Daha fazla bilgi",
        Remove: "Kald??r",
        "# of": "# dan",
        Length: "Uzunluk",
        "Add Downloads By URIs": "URI kullanarak indirmelere ekle",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- Ayr?? bir sat??ra her dosya i??in URI koyarak ayn?? anda birden fazla dosya indirebilirsiniz.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Ayn?? dosyalar i??in birden fazla URI (ayna) da ekleyebilirsiniz. Bunu yapmak i??in URIlar?? bir bo??lukla ay??r??n.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- Bir URI, HTTP(S)/FTP/BitTorrent-Magnet olabilir.",
        "Download settings": "??ndirme ayarlar??",
        "Advanced settings": "Geli??mi?? Ayarlar",
        Cancel: "??ptal et",
        Start: "Ba??lat",
        Choose: "Se??iniz",
        "Quick Access (shown on the main page)": "H??zl?? Eri??im (ana sayfada g??sterilir)",
        "Add Downloads By Torrents": "Torrent kullanarak indirmelere ekle",
        "- Select the torrent from the local filesystem to start the download.":
          "- ??ndirmeyi ba??latmak i??in yerel dosya sisteminden torrenti se??in.",
        "- You can select multiple torrents to start multiple downloads.":
          "- Birden ??ok indirmeyi ba??latmak i??in birden ??ok torrent se??ebilirsiniz.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- BitTorrent-Magnetli bir URL eklemek i??in, ??stek ??zerine Ekle se??ene??ini kullan??n ve oraya ekleyin.",
        "Select Torrents": "Torrentleri se??in",
        "Select a Torrent": "Bir Torrent se??in",
        "Add Downloads By Metalinks": "Metalink kullanarak indirmelere ekle",
        "Select Metalinks": "Metalinkleri se??in",
        "- Select the Metalink from the local filesystem to start the download.":
          "- ??ndirmeyi ba??latmak i??in yerel dosya sisteminden Metalinki se??in.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- Birden fazla y??klemeye ba??lamak i??in birden fazla Metalink se??ebilirsiniz.",
        "Select a Metalink": "Bir Metalink Se??",
        "Choose files to start download for": "I??in indirmeye ba??lamak i??in dosyalar?? se??in",
        "Select to download": "Indirmek i??in se??in",
        "Aria2 RPC host and port": "Aria2 RPC ana bilgisayar ve ba??lant?? noktas??",
        "Enter the host": "Ana bilgisayar(host) girin",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Aria2 i??in RPC'nin ??al????t?????? sunucunun IP veya DNS ad??n?? girin (varsay??lan: localhost)",
        "Enter the port": "Ba??lant?? noktas??n?? gir",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Aria2 i??in RPC'nin ??al????t?????? sunucunun ba??lant?? noktas??n?? girin (varsay??lan: 6800)",
        "Enter the RPC path": "RPC yolunu girin",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Aria2 RPC biti?? noktas?? i??in yolu girin (varsay??lan: / jsonrpc)",
        "SSL/TLS encryption": "SSL / TLS ??ifreleme",
        "Enable SSL/TLS encryption": "SSL / TLS ??ifrelemeyi etkinle??tir",
        "Enter the secret token (optional)": "Gizli simge girin (iste??e ba??l??)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Aria2 RPC gizli simgesini girin (kimlik do??rulama etkin de??ilse bo?? b??rak??n)",
        "Enter the username (optional)": "Kullan??c?? ad??n?? girin (iste??e ba??l??)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Aria2 RPC kullan??c?? ad??n?? girin (kimlik do??rulama etkin de??ilse bo?? b??rak??n)",
        "Enter the password (optional)": "Parolay?? girin (iste??e ba??l??)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Aria2 RPC ??ifresini girin (kimlik do??rulama etkin de??ilse bo?? b??rak??n)",
        "Enter base URL (optional)": "Temel URL'yi girin (iste??e ba??l??)",
        "Direct Download": "Direkt indirme",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Verilen, ba??lant??lar?? aria2 sunucudan do??rudan indirmeyi etkinle??tirmek i??in olu??turulur.",
        "(Requires appropriate webserver to be configured.)":
          "(Uygun web sunucusunun yap??land??r??lmas??n?? gerektirir.)",
        "Save Connection configuration": "Ba??lant?? yap??land??rmas??n?? kaydedin",
        Filter: "Filtre",
        "Aria2 server info": "Aria2 sunucu bilgisi",
        "Aria2 Version": "Aria2 S??r??m??",
        "Features Enabled": "A??a????daki ??zellikler Etkin",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Projenin en son s??r??m??n?? indirmek i??in sorun ekleyin veya katk??da bulunun;",
        "Or you can open the latest version in the browser through":
          "Veya en son s??r??m?? taray??c??n??z arac??l??????yla a??abilirsiniz.",
        Close: "Kapat",
        "Download status": "??ndirme durumu",
        "Download Speed": "??ndirme h??z??",
        "Upload Speed": "Y??kleme h??z??",
        "Estimated time": "Tahmini s??re",
        "Download Size": "??ndirme Boyutu",
        Downloaded: "??ndirildi",
        Progress: "??lerleme",
        "Download Path": "??ndirme Yolu",
        Uploaded: "Y??klendi",
        "Download GID": "GID'yi indirin",
        "Number of Pieces": "Par??a say??s??",
        "Piece Length": "Par??a Uzunlu??u",
        "Shutdown Server": "Sunucuyu Kapat",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "Son ba??lant?? giri??imi ba??ar??s??z oldu. Ba??ka bir yap??land??rma deneyin",
        "Oh Snap!": "HAydaaaaa!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "Aria2 RPC sunucusuna ba??lan??lamad??. 10 saniye i??inde tekrar deneyecek. Ba??lant?? ayarlar??n??, Ayarlar> Ba??lant?? Ayarlar?? b??l??m??ne giderek kontrol etmek isteyebilirsiniz.",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Uzak RPC arac??l??????yla Aria2'ye ba??ar??yla ba??land?? ...",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Uzak RPC arac??l??????yla Aria2'ye ba??ar??yla ba??land?? ancak ba??lant?? hala g??vende de??il. Tam g??venlik i??in, Aria2'yi ba??lat??rken (--rpc-secret bayra????n?? kullan??n) ve bir yetkilendirme gizli simgesi eklemeyi deneyin.",
        "Trying to connect to aria2 using the new connection configuration":
          "Yeni ba??lant?? yap??land??rmas??n?? kullanarak aria2'ye ba??lanmaya ??al??????l??yor"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.cs_CZ = {
        Search: "Hledat",
        Add: "P??idat",
        "By URIs": "Z URI",
        "By Torrents": "Z torrentu",
        "By Metalinks": "Z metalinku",
        Manage: "Spravovat",
        "Pause All": "Zastavit v??e",
        "Resume Paused": "Obnovit zastaven??",
        "Purge Completed": "Odstranit hotov??",
        "Shutdown Server": "Vypnout server",
        Settings: "Nastaven??",
        "Connection Settings": "Nastaven?? p??ipojen??",
        "Global Settings": "Obecn?? nastaven??",
        "Server info": "Informace o serveru",
        "About and contribute": "Informace",
        "Toggle navigation": "P??epnout ovl??d??n??",
        Miscellaneous: "R??zn??",
        "Global Statistics": "Glob??ln?? statistika",
        About: "Informace",
        Displaying: "Zobrazuji",
        of: "z",
        downloads: "stahov??n??",
        Language: "Jazyk",
        "Download Filters": "Filtry stahov??n??",
        Running: "Stahuj?? se",
        Active: "Aktivn??",
        Waiting: "??ekaj??c??",
        Complete: "Hotov??",
        Error: "Chyba",
        Paused: "Zastaven??",
        Removed: "Odstran??n??",
        "Hide linked meta-data": "Skr??t p??ipojen?? meta-data",
        Toggle: "Prohodit",
        "Reset filters": "Smazat filtry",
        Verifing: "Ov????ov??n??",
        "Verify Pending": "??ek??n?? na ov????en??",
        "Quick Access Settings": "Rychl?? nastaven??",
        Save: "Ulo??it",
        "Save settings": "Ulo??it nastaven??",
        "Currently no download in line to display, use the": "Nen?? co zobrazit, pou??ijte",
        "download button to start downloading files!": "tla????tko pro st??hnut?? soubor??!",
        Peers: "Zdroje",
        "More Info": "V??c informac??",
        Remove: "Odstranit",
        "# of": "# z",
        Length: "D??lka",
        "Add Downloads By URIs": "P??idat stahov??n?? z URI",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- M????ete za????t stahovat v??ce soubor?? v jeden okam??ik, tak ??e na ka??d?? ????dek d??te jinou URI",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Tak?? m????ete p??idat v??ce URI (Zrcadel) pro *stejn??* soubor, tak ??e je d??te na jeden ????dek odd??len?? mezerou ",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- URI m????e b??t HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "Nastaven?? stahov??n??",
        "Advanced settings": "Pokro??il?? nastaven??",
        Cancel: "Zru??it",
        Start: "Spustit",
        Choose: "Zvolit",
        "Quick Access (shown on the main page)": "Rychl?? p????stup (Zobrazen?? na hlavn?? str??nce)",
        "Add Downloads By Torrents": "P??idat stahov??n?? z torrentu",
        "- Select the torrent from the local filesystem to start the download.":
          "- Pro stahov??n?? vyberte torrent soubor z disku",
        "- You can select multiple torrents to start multiple downloads.":
          " - M????ete zvolit v??c torrent?? pro spu??t??n?? v??ce stahov??n??",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          '- Pro stahov??n?? pomoc?? BitTorrent-Magnet URL, pou??ijte mo??nost "Z URI"',
        "Select Torrents": "Vyberte torrenty",
        "Select a Torrent": "Vyberte torrent",
        "Add Downloads By Metalinks": "P??idat stahovn?? pomoc?? metalinku",
        "Select Metalinks": "V??b??r metalink??",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Pro stahov??n?? vyberte metalink soubor z disku",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- M????ete zvolit v??c mentalink?? pro spu??t??n?? v??ce stahov??n??",
        "Select a Metalink": "Vyberte metalink",
        "Choose files to start download for": "Vyberte soubory pro sta??en??",
        "Select to download": "Vyberte ke sta??en??",
        "Aria2 RPC host and port": "Aria2 RPC host a port",
        "Enter the host": "Zadejte hosta",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Zadejte IP nebo DNS jm??no serveru na kter??m b?????? Aria2 RPC (v??choz??: localhost)",
        "Enter the port": "Zadejte port",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Zadejte port serveru na kter??m b?????? Aria2 RPC (v??choz??: 6800)",
        "Enter the RPC path": "Zadejte cestu k RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Zadejte cestu k endpointu Aria2 RPC (v??choz??: /jsonrpc)",
        "SSL/TLS encryption": "SSL/TLS ??ifrov??n??",
        "Enable SSL/TLS encryption": "Zapnout SSL/TLS ??ifrov??n??",
        "Enter the secret token (optional)": "Zadejte bezpe??nostn?? token (voliteln??)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Zadejte bezpe??nostn?? token k Aria2 RPC (nechte pr??zn?? pokud autentifikace nen?? nastavena)",
        "Enter the username (optional)": "Zadejte u??ivatelsk?? jm??no (voliteln??)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Zadejte u??ivatelsk?? jm??no pro Aria2 RPC (nechte pr??zn?? pokud autentifikace nen?? nastavena)",
        "Enter the password (optional)": "Zadejte heslo (voliteln??)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Zadej heslo k Aria2 RPC (nechte pr??zn?? pokud autentifikace nen?? nastavena)",
        "Enter base URL (optional)": "Zadejte ko??enovou URL serveru (voliteln??)",
        "Direct Download": "P????m?? sta??en??",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Jestli??e je nastaveno, je mo??n?? st??hnout soubor p????mo z Aria2 serveru.",
        "(Requires appropriate webserver to be configured.)":
          "(Je t??eba ud??lat pat??i??nou konfiguraci webserveru)",
        "Save Connection configuration": "Ulo??it nastaven??",
        Filter: "Filtr",
        "Aria2 server info": "Informace o Aria2 serveru",
        "Aria2 Version": "Verze Aria2",
        "Features Enabled": "Zapnut?? funkce",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Ke sta??en?? aktu??ln?? verze, nahl????en?? probl??mu ??i p??isp??n??, zami??te na",
        "Or you can open the latest version in the browser through":
          "Nebo m????ete spustit aktu??ln?? verzi pomoc??:",
        Close: "Zav????t",
        "Download status": "Stav stahov??n??",
        "Download Speed": "Rychlost stahov??n??",
        "Upload Speed": "Rychlost nahr??v??n??",
        "Estimated time": "Odhadovan?? ??as",
        "Download Size": "Velikost",
        Downloaded: "Sta??eno",
        Progress: "Pr??b??h",
        "Download Path": "Cesta",
        Uploaded: "Nahr??no",
        "Download GID": "GID",
        "Number of Pieces": "Po??et fragment??",
        "Piece Length": "D??lka fragmentu",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "Posledn?? pokus o p??ipojen?? se nezda??il. Zkuste jin?? nastaven??",
        "Oh Snap!": "A sakra!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "Nemohu se p??ipojit k Aria2 RPC serveru. Zkus??m to znovu za 10 sekund. Mo??n?? by se to cht??lo pod??vat do Nastaven?? > Nastaven?? p??ipojen??",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "B??hem p??ipojov??n?? k Aria2 RPC serveru selhala autentifikace. Zkus??m to znovu za 10 sekund. Mo??n?? by se to cht??lo pod??vat do Nastaven?? > Nastaven?? p??ipojen??",
        "Successfully connected to Aria2 through its remote RPC ???":
          "??sp????n?? p??ipojeno k Aria2 pomoc?? RPC...",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "??sp????n?? p??ipojeno k Aria2 pomoc?? RPC, ale p??ipojen?? nen?? zabezpe??en??. Pro ??pln?? zabezpe??en?? p??idejte bezpe??nostn?? token p??i spu??t??n?? Aria2 (pomoc?? mo??nosti --rpc-secret) ",
        "Trying to connect to aria2 using the new connection configuration":
          "Zkou????m se p??ipojit k Aria2 za pomoc?? nov??ho nastaven??",
        "Remove {{name}} and associated meta-data?": "Odstranit {{name}} a p????slu??n?? meta-data?"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.fa_IR = {
        Search: "??????????",
        Add: "?????????? ????????",
        "By URIs": "???? ???????? ???????? ????????",
        "By Torrents": "???? ???????? ??????????",
        "By Metalinks": "???? ???????? ?????? ????????",
        Manage: "????????????",
        "Pause All": "???????? ??????",
        "Resume Paused": "?????????? ?????????? ?????? ????",
        "Purge Completed": "?????? ?????????? ?????? ????",
        "Shutdown Server": "?????????? ???????? ????????",
        Settings: "??????????????",
        "Connection Settings": "?????????????? ????????????",
        "Global Settings": "?????????????? ????????????",
        "Server info": "?????????????? ????????",
        "About and contribute": "???????????? ?? ????????????",
        "Toggle navigation": "?????????? ????????????",
        Miscellaneous: "????????????",
        "Global Statistics": "???????? ????????????",
        About: "????????????",
        Displaying: "??????????",
        of: "????",
        downloads: "????????????????",
        Language: "????????",
        "Download Filters": "???????????? ??????????????",
        Running: "???? ?????? ????????",
        Active: "????????",
        Waiting: "???? ????????????",
        Complete: "???????? ??????",
        Error: "??????",
        Paused: "?????????? ??????",
        Removed: "?????? ??????",
        "Hide linked meta-data": "???????? ???????? ?????? ???????? ??????????",
        Toggle: "?????????? ??????????",
        "Reset filters": "?????? ??????????????",
        Verifing: "?????????? ????????",
        "Verify Pending": "?????????? ???????? ???? ????????????????",
        "Quick Access Settings": "?????????????? ???????????? ????????",
        Save: "??????????",
        "Save settings": "?????????? ??????????????",
        "Currently no download in line to display, use the":
          "???? ?????? ???????? ?????? ?????????????? ???????? ?????????? ???????? ???????????? ?????????????? ????",
        "download button to start downloading files!": "???????? ???????????? ???????? ???????? ???????????? ???????? ????!",
        Peers: "??????????????",
        "More Info": "?????????????? ??????????",
        Remove: "??????",
        "# of": "???? #",
        Length: "??????",
        "Add Downloads By URIs": "?????????? ???????? ???????????? ???????? ???????? ????",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- ?????? ???? ???????????? ?????? ?????? ???????????? (???????? ????) ???? ???????????? ???? ???????? ???????? URI ???? ???????? ???? ???????? ???? ???? ???? ?????????????? ?????????? ????????.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- ?????? ???????????? ???? ???????????? URI ?????? ?????????? (???????? ????) ???? ???????? ???????? *????????* ?????????? ????????. ???????? ?????????? ?????? ???????? URI ???? ???? ???? ???? ???????? ?????????????? ?????? ????????.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- ???? URI ???? ?????????? HTTP (S) / FTP / BitTorrent-Magnet ????????.",
        "Download settings": "?????????????? ????????????",
        "Advanced settings": "?????????????? ??????????????",
        Cancel: "??????",
        Start: "????????",
        Choose: "????????????",
        "Quick Access (shown on the main page)": "???????????? ???????? (???????? ???????? ?????? ???? ???????? ????????)",
        "Add Downloads By Torrents": "?????????? ???????? ???????????? ???????? ??????????",
        "- Select the torrent from the local filesystem to start the download.":
          "- ?????????? ???? ???? ?????????? ???????? ???????? ???????????? ???????? ???? ???????????? ???? ???????? ????????.",
        "- You can select multiple torrents to start multiple downloads.":
          "- ?????? ???? ???????????? ?????????? ?????????? ???? ???????? ???????? ?????????????? ?????????????? ???????????? ????????.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- ???????? ?????????? ???????? URL BitTorrent-Magnet?? ???? ?????????? ???? ???????? ???????? ???????? ?????????????? ???????? ?? ???? ???? ???? ???????? ?????????? ????????.",
        "Select Torrents": "?????????? ???? ???? ???????????? ????????",
        "Select a Torrent": "???????????? ???? ???????????? ????????",
        "Add Downloads By Metalinks": "?????????????? ???? ???? ???????????? ????????",
        "Select Metalinks": "Metalinks ???? ???????????? ????????",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Metalink ???? ???? ?????????? ???????? ???????? ???????????? ???????? ???? ???????????? ???? ???????? ????????.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- ?????? ???? ???????????? ?????????? Metalinks ???? ???????? ???????? ?????????? ?????? ???????????? ????????.",
        "Select a Metalink": "Metalink ???? ???????????? ????????",
        "Choose files to start download for": "???????? ???? ???????? ???????? ???????????? ???????????? ????????",
        "Select to download": "???????? ???????????? ???????????? ????????",
        "Aria2 RPC host and port": "???????????? ?? ???????? Aria2 RPC",
        "Enter the host": "???????????? ???? ???????? ????????",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "?????? IP ???? DNS ???????? ???? RPC ???????? Aria2 ???? ?????? ???????? ?????? ???? ???????? ???????? (???? ?????? ?????? ??????: localhost)",
        "Enter the port": "???????? ???? ???????? ????????",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "???????? ???????? ???? RPC ???????? Aria2 ???????? ???? ?????? ???? ???????? ???????? (???? ?????? ?????? ??????: 6800)",
        "Enter the RPC path": "???????? RPC ???? ???????? ????????",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "???????? ???????? ???????????? Aria2 RPC ???? ???????? ???????? (default: / jsonrpc)",
        "SSL/TLS encryption": "SSL / TLS ????????????????",
        "Enable SSL/TLS encryption": "SSL / TLS ???????????????? ???? ???????? ????????",
        "Enter the secret token (optional)": "?????? ?????????? (??????????????) ???? ???????? ????????",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "???? ???????? Aria2 RPC ???? ???????? ???????? (?????? ?????????? ???????? ???????? ?????? ?????? ???????? ??????????????)",
        "Enter the username (optional)": "?????? ???????????? (??????????????) ???? ???????? ????????",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "?????? ???????????? Aria2 RPC ???? ???????? ???????? (???????? ?????? ?????????? ???????? ?????? ???????? ??????)",
        "Enter the password (optional)": "?????? ???????? ???? ???????? ???????? (??????????????)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "?????????????? Aria2 RPC ???? ???????? ???????? (?????? ?????????? ???????? ???????? ?????? ?????? ???????? ??????????????)",
        "Enter base URL (optional)": "URL ???????? ???? ???????? ???????? (??????????????)",
        "Direct Download": "???????????? ????????????",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "???? ???????? ?????????? ???????? ???????? ?????????? ???????????? ???????????? ???? ???????? Aria2 ?????????? ?????????? ????.",
        "(Requires appropriate webserver to be configured.)":
          "(???????? ???? ???? ???????? ?????????? ???????? ????????????????.)",
        "Save Connection configuration": "?????????? ???????????????? ??????????",
        Filter: "??????????",
        "Aria2 server info": "???????????? ???????? Aria2",
        "Aria2 Version": "???????? Aria2",
        "Features Enabled": "?????????? ?????? ????????",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "???????? ???????????? ?????????? ???????? ???????????? ?????????? ???? ?????????? ???????? ???? ???? ???????????????? ???????????????? ?????????? ????",
        "Or you can open the latest version in the browser through":
          "???? ?????? ???? ???????????? ?????????? ???????? ???? ???? ???????? ???????????? ?????? ????????",
        Close: "????????",
        "Download status": "?????????? ????????????",
        "Download Speed": "???????? ????????????",
        "Upload Speed": "???????? ??????????",
        "Estimated time": "???????? ?????????? ?????? ??????",
        "Download Size": "???????????? ????????????",
        Downloaded: "???????????? ??????",
        Progress: "????????????",
        "Download Path": "???????? ????????????",
        Uploaded: "?????????? ??????",
        "Download GID": "???????????? GID",
        "Number of Pieces": "?????????? ??????????",
        "Piece Length": "?????? ????????",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "?????????? ???????? ?????????? ???????????? ??????. ???????? ???????? ?????????? ????????",
        "Oh Snap!": "?????? ????!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "?????? ???????? ???? ???????? aria2 RPC ???????? ????. ???? 10 ?????????? ???????????? ???????? ???????????? ?????? ???????? ?????? ?????????????? ?????????????? ?????????? ???? ???? ???????? ???? ?????????????? > ?????????????? ?????????? ?????????? ????????",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "???? ?????????? ?????????? ???? ???????? Aria2 RPC ?????????????? ???????? ????????. ???? 10 ?????????? ???????????? ???????? ???????????? ?????? ???????? ?????? ?????????????? ???????????? ?????????? ???????? ?????? ???? ???? ???????? ???? ?????????????? > ?????????????? ?????????? ?????????? ????????",
        "Successfully connected to Aria2 through its remote RPC ???":
          "???? ???????????? ???? ???????? RPC ???? ?????? ?????? ???? Aria2 ???????? ???? ...",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "???? ???????????? ???? Aria2 ???? ???????? RPC ?????? ?????? ???????? ?????? ?????? ?????????? ???????? ?????????? ??????. ???????? ?????????? ???????? ?????? ???????? ???????? ?????????? ???????? ???? ???? ?????????? ???????? Aria2 (???? ???????? ???????? --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "???????? ???????? ?????????? ???? aria2 ???? ?????????????? ???? ???????????????? ?????????? ????????",
        "Remove {{name}} and associated meta-data?": "?????? {{name}} ?? ?????? ???????? ?????? ??????????"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.id_ID = {
        Search: "Telusuri",
        Add: "Tambah",
        "By URIs": "Dari URI",
        "By Torrents": "Dari Torrent",
        "By Metalinks": "Dari Metalink",
        Manage: "Kelola",
        "Pause All": "Jeda Semua",
        "Resume Paused": "Lanjut yang Dijeda",
        "Purge Completed": "Hapus yang Terunduh",
        "Shutdown Server": "Matikan Peladen",
        Settings: "Pengaturan",
        "Connection Settings": "Pengaturan Koneksi",
        "Global Settings": "Pengaturan Global",
        "Server info": "Info peladen",
        "About and contribute": "Tentang dan kontribusi",
        "Toggle navigation": "Alihkan navigasi",
        Miscellaneous: "Lain-lain",
        "Global Statistics": "Statistik Global",
        About: "Tentang",
        Displaying: "Tampilan",
        of: "dari",
        downloads: "unduhan",
        Language: "Bahasa",
        "Download Filters": "Saring Unduhan",
        Running: "Berjalan",
        Active: "Aktif",
        Waiting: "Menunggu",
        Complete: "Selesai",
        Error: "Galat",
        Paused: "Dijeda",
        Removed: "Dihapus",
        "Hide linked meta-data": "Sembunyikan tautan meta-data",
        Toggle: "Tombol alihan",
        "Reset filters": "Reset penyaring",
        Verifing: "Memverifikasi",
        "Verify Pending": "Verifikasi Ditunda",
        "Quick Access Settings": "Pengaturan Akses Cepat",
        Save: "Simpan",
        "Save settings": "Simpan pengaturan",
        "Currently no download in line to display, use the":
          "Sekarang tak ada unduhan yang ditampilkan, gunakan",
        "download button to start downloading files!": "tombol unduh untuk mulai mengunduh berkas!",
        Peers: "Peer",
        "More Info": "Info Lengkap",
        Remove: "Hapus",
        "# of": "# dari",
        Length: "Ukuran",
        "Add Downloads By URIs": "Unduh dari URI",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- Anda dapat menambah banyak unduhan (berkas) sekali waktu dg menaruh URI setiap berkas dlm baris terpisah.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Anda juga dapat menambah banyak URI (cermin) untuk berkas yang *sama*. Pisahkan URI dengan spasi.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- URI dapat berbentuk HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "Pengaturan unduhan",
        "Advanced settings": "Pengaturan mahir",
        Cancel: "Batal",
        Start: "Mulai",
        Choose: "Pilih",
        "Quick Access (shown on the main page)": "Akses Cepat (terlihat di laman utama)",
        "Add Downloads By Torrents": "Unduh dari Torrent",
        "- Select the torrent from the local filesystem to start the download.":
          "- Pilih torrent dari sistem berkas lokal untuk mulai mengunduh.",
        "- You can select multiple torrents to start multiple downloads.":
          "Anda dapat memilih banyak torrent untuk memulai multi unduh.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "Untuk menambah BitTorrent-Magnet URL, pakai opsi Tambah dari URI dan tambahkan di situ.",
        "Select Torrents": "Pilih Torrent",
        "Select a Torrent": "Pilih Torrent",
        "Add Downloads By Metalinks": "Unduh dari Metalink",
        "Select Metalinks": "Pilih Metalink",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Pilih Metalink dari sistem berkas lokal untuk mulai mengunduh.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- Anda dapat memilih banyak Metalink untuk mulai multi unduh.",
        "Select a Metalink": "Pilih Metalink",
        "Choose files to start download for": "Pilih berkas untuk mulai mengunduh",
        "Select to download": "Pilih untuk mengunduh",
        "Aria2 RPC host and port": "Port dan host RPC Aria2",
        "Enter the host": "Masukkan host",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Masukkan IP atau nama DNS peladen tempat RPC Aria2 berjalan (asali: localhost)",
        "Enter the port": "Masukkan porta",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Masukkan porta peladen tempat RPC Aria2 berjalan (asali: 6800)",
        "Enter the RPC path": "Masukkan path RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Masukkan path untuk endpoint RPC Aria2 (asali: /jsonrpc)",
        "SSL/TLS encryption": "Enkripsi SSL/TLS",
        "Enable SSL/TLS encryption": "Aktifkan enkripsi SSL/TLS",
        "Enter the secret token (optional)": "Masukkan token rahasia (opsional)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Masukkan token rahasia RPC Aria2 (kosongkan jika otentifikasi tidak aktif)",
        "Enter the username (optional)": "Masukkan username (opsional)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Masukkan username RPC Aria2 (kosongkan jika otentifikasi tidak aktif)",
        "Enter the password (optional)": "Masukkan kata sandi (opsional)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Masukkan kata sandi RPC Aria2 (kosongkan jika otentifikasi tidak aktif)",
        "Enter base URL (optional)": "Masukkan URL dasar (opsional)",
        "Direct Download": "Unduh Langsung",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Jika tersedia, tautan akan dibuat untuk mengaktifkan unduhan langsung dari peladen Aria2.",
        "(Requires appropriate webserver to be configured.)":
          "(Mewajibkan webserver yang perlu dikonfigurasi)",
        "Save Connection configuration": "Simpan konfigurasi Koneksi",
        Filter: "Saring",
        "Aria2 server info": "Info peladen Aria2",
        "Aria2 Version": "Versi Aria2",
        "Features Enabled": "Fitur yang Aktif",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Untuk mengunduh versi terkini proyek, tambahkan isu atau kontribusi balik ke",
        "Or you can open the latest version in the browser through":
          "Atau Anda dapat membuka versi terkini via peramban lewat",
        Close: "Tutup",
        "Download status": "Status unduh",
        "Download Speed": "Kecepatan unduh",
        "Upload Speed": "Kecepatan unggah",
        "Estimated time": "Waktu estimasi",
        "Download Size": "Ukuran unduh",
        Downloaded: "Terunduh",
        Progress: "Proses",
        "Download Path": "Path unduh",
        Uploaded: "Terunggah",
        "Download GID": "GID unduh",
        "Number of Pieces": "Jumlah Bagian",
        "Piece Length": "Ukuran Bagian",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "Usaha koneksi terakhir gagal. Coba konfigurasi lain",
        "Oh Snap!": "Oh Sial!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "Tak dapat terkoneksi ke peladen RPC aria2. Akan diulang dalam 10 detik. Anda mungkin ingin menguji pengaturan koneksi melalui Pengaturan > Pengaturan Koneksi",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "Otentifikasi gagal saat membuka koneksi ke peladen RPC Aria2. Akan diulang dalam 10 detik. Anda mungkin ingin mengonfirmasi detail otentifikasi di Pengaturan > Pengaturan Koneksi",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Sukses terkoneksi ke Aria2 melalui remot RPC ???",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Sukses terkoneksi ke Aria2 melalui remot RPC, bagaimanapun koneksi masih tidak aman. Untuk melengkapi keamanan coba tambahkan token rahasia otorisasi saat memulai Aria2 (lewat flag --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "Mencoba koneksi ke aria2 menggunakan konfigurasi koneksi baru",
        "Remove {{name}} and associated meta-data?":
          "Hapus {{name}} dan meta-data yang berhubungan?"
      });
  },
  function(e, t) {
    "undefined" == typeof translations && (translations = {}),
      (translations.pt_BR = {
        Search: "Buscar",
        Add: "Adicionar",
        "By URIs": "Por URIs",
        "By Torrents": "Por Torrents",
        "By Metalinks": "Por Metalinks",
        Manage: "Gerenciar",
        "Pause All": "Pausar Todos",
        "Resume Paused": "Retomar Pausados",
        "Purge Completed": "Remover Completados",
        "Shutdown Server": "Desligar Servidor",
        Settings: "Configura????es",
        "Connection Settings": "Configura????es de Conex??o",
        "Global Settings": "Configura????es Globais",
        "Server info": "Informa????es do Servidor",
        "About and contribute": "Sobre e contribui????es",
        "Toggle navigation": "Alternar navega????o",
        Miscellaneous: "Miscel??nia",
        "Global Statistics": "Estat??sticas Globais",
        About: "Sobre",
        Displaying: "Mostrando",
        of: "de",
        downloads: "downloads",
        Language: "Linguagem",
        "Download Filters": "Filtros de Download",
        Running: "Rodando",
        Active: "Ativo",
        Waiting: "Esperando",
        Complete: "Completo",
        Error: "Erro",
        Paused: "Pausado",
        Removed: "Removido",
        "Hide linked meta-data": "Esconder metadados ligados",
        Toggle: "Alternar",
        "Reset filters": "Limpar filtros",
        Verifing: "Verificando",
        "Verify Pending": "Verifica????o Pendente",
        "Quick Access Settings": "Acesso R??pido ??s Configura????es",
        Save: "Salvar",
        "Save settings": "Salvar configura????es",
        "Currently no download in line to display, use the":
          "No momento n??o existem downloads para mostrar, utilize bot??o",
        "download button to start downloading files!": "pra iniciar a transfer??ncia de arquivos!",
        Peers: "Peers",
        "More Info": "Mais informa????es",
        Remove: "Remover",
        "# of": " de",
        Length: "Tamanho",
        "Add Downloads By URIs": "Adicionar Downloads por URIs",
        "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
          "- Voc?? pode adicionar m??ltiplos downloads (arquivos) ao mesmo tempo inserindo a URI de cada arquivo em uma linha separada.",
        "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
          "- Voc?? tamb??m pode adicionar m??ltiplas URIs (mirrors) para o *mesmo* arquivo. Para fazer isto, separe as URIs por um espa??o.",
        "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
          "- Uma URI pode ser HTTP(S)/FTP/BitTorrent-Magnet.",
        "Download settings": "Configura????es de download",
        "Advanced settings": "Configura????es avan??adas",
        Cancel: "Cancelar",
        Start: "Iniciar",
        Choose: "Escolher",
        "Quick Access (shown on the main page)": "Acesso R??pido (exibido na p??gina principal)",
        "Add Downloads By Torrents": "Adicionar Downloads por Torrents",
        "- Select the torrent from the local filesystem to start the download.":
          "- Selecione o torrent de seu sistema de arquivos local para iniciar o download.",
        "- You can select multiple torrents to start multiple downloads.":
          "- Voc?? pode selecionar m??ltiplos torrents para iniciar m??ltiplos downloads.",
        "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
          "- Para adicionar uma URL BitTorrent-Magnet, utilize a op????o Adicionar por URI.",
        "Select Torrents": "Selecione Torrents",
        "Select a Torrent": "Selecione um Torrent",
        "Add Downloads By Metalinks": "Adicionar Downloads por Metalinks",
        "Select Metalinks": "Selecione Metalinks",
        "- Select the Metalink from the local filesystem to start the download.":
          "- Selecione o Metalink do seu sistema de arquivos local para iniciar o download.",
        "- You can select multiple Metalinks to start multiple downloads.":
          "- Voc?? pode selecionar m??ltiplos Metalinks para iniciar m??ltiplos downloads.",
        "Select a Metalink": "Selecione um Metalink",
        "Choose files to start download for": "Selecione os arquvos para serem baixados",
        "Select to download": "Selecione para baixar",
        "Aria2 RPC host and port": "Host e porta do RPC Aria2",
        "Enter the host": "Informe o host",
        "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
          "Informe o IP ou nome DNS do servidor no qual o RPC do Aria2 est?? rodando (default: localhost)",
        "Enter the port": "Informe a porta",
        "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
          "Informe a porta do servidor no qual o RPC do Aria2 est?? rodando (default: 6800)",
        "Enter the RPC path": "Informe o caminho RPC",
        "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
          "Informe o caminho para o endpoint RPC do Aria2 (default: /jasonrpc)",
        "SSL/TLS encryption": "Criptografia SSL/TLS",
        "Enable SSL/TLS encryption": "Habilita criptografia SSL/TLS",
        "Enter the secret token (optional)": "Informe o token secreto (opcional)",
        "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
          "Informe o token secreto do RPC Aria2 (deixe vazio se a autentica????o n??o estiver habilitada)",
        "Enter the username (optional)": "Informe o usu??rio (opcional)",
        "Enter the Aria2 RPC username (empty if authentication not enabled)":
          "Informe o usu??rio RPC do Aria2 (vazio se a autentica????o n??o estiver habilitada)",
        "Enter the password (optional)": "Informe a senha (opcional)",
        "Enter the Aria2 RPC password (empty if authentication not enabled)":
          "Informe a senha RPC do Aria2 (vazio se a autentica????o n??o estiver habilitada)",
        "Enter base URL (optional)": "Informe a URL base (opcional)",
        "Direct Download": "Download Direto",
        "If supplied, links will be created to enable direct download from the Aria2 server.":
          "Se fornecido, links ser??o criados para permitir download direto do servidor Aria2.",
        "(Requires appropriate webserver to be configured.)":
          "(Requer servidor web apropriado a ser configurado.)",
        "Save Connection configuration": "Salvar Configura????o de conex??o",
        Filter: "Filtrar",
        "Aria2 server info": "Informa????es do servidor Aria2",
        "Aria2 Version": "Ver??o do Aria2",
        "Features Enabled": "Op????es Habilitadas",
        "To download the latest version of the project, add issues or to contribute back, head on to":
          "Para baixar a ??ltima vers??o do projeto, reportar problemas ou contribuir, acesse",
        "Or you can open the latest version in the browser through":
          "Ou voc?? pode acessar a ??ltima vers??o pelo navegador atrav??s",
        Close: "Fechar",
        "Download status": "Status do download",
        "Download Speed": "Velocidade de download",
        "Upload Speed": "Velocidade de upload",
        "Estimated time": "Tempo estimado",
        "Download Size": "Tamanho do download",
        Downloaded: "Baixado",
        Progress: "Progresso",
        "Download Path": "Caminho do download",
        Uploaded: "Enviado",
        "Download GID": "GID do download",
        "Number of Pieces": "N??mero de partes",
        "Piece Length": "Tamanho das partes",
        "The last connection attempt was unsuccessful. Trying another configuration":
          "A ??ltima tentativa de conex??o n??o teve sucesso. Tentando outra configura????o",
        "Oh Snap!": "Ah Droga!",
        "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
          "N??o foi poss??vel conectar no servidor RPC aria2. Tententando em 10 seg. Voc?? pode querer verificar as configura????es da conex??o em Configura????es > Configura????es de Conex??o",
        "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
          "Autentica????o falhou enquanto conectando ao servidor RPC Aria2. Tentando em 10 seg. Voc?? pode querer confirmar os detalhes de autentica????o acessando Configura????es > Configura????es de Conex??o",
        "Successfully connected to Aria2 through its remote RPC ???":
          "Conectado com sucesso ao Aria2 atrav??s de seu RPC remoto ???",
        "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
          "Conectado com sucesso ao Aria2 atrav??s de seu RPC remoto, contudo a conex??o ?? insegura. Para uma completa seguran??a tente adicionar um token secreto de autoriza????o quando iniciar o Aria2 (atrav??s da op????o --rpc-secret)",
        "Trying to connect to aria2 using the new connection configuration":
          "Tentando conectar-se ao aria2 utilizando a nova configura????o de conex??o",
        "Remove {{name}} and associated meta-data?": "Remover {{name}} e os metadados associados?"
      });
  }
]);
