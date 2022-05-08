package main

import (
	"flag"
	"log"
	"net/http"
	"time"

	"github.com/zyxar/argo/rpc"
)

var (
	addr      string
	rpcURI    string
	rpcSecret string
)

func init() {
	flag.StringVar(&addr, "addr", ":8080", "Address, where is HTTP server listening.")
	flag.StringVar(&rpcURI, "uri", "http://localhost:6800/jsonrpc", "set rpc address")
	flag.StringVar(&rpcSecret, "secret", "", "set --rpc-secret for aria2c")
	flag.Parse()
}

func main() {
	http.HandleFunc("/api/adduri", func(w http.ResponseWriter, r *http.Request) {
		if err := r.ParseForm(); err != nil {
			log.Println(err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		rpcc, err := rpc.New(r.Context(), rpcURI, rpcSecret, time.Second, nil)
		if err != nil {
			log.Println(err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer rpcc.Close()

		opts := map[string]string{}
		if val := r.PostFormValue("out"); val != "" {
			opts["out"] = val
		}
		if val := r.PostFormValue("dir"); val != "" {
			opts["dir"] = val
		}

		url := r.PostFormValue("url")
		gid, err := rpcc.AddURI([]string{url}, opts)
		if err != nil {
			log.Println(err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Write([]byte(gid))
	})

	log.Println("Starting proxy server on", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Println("ListenAndServe error:", err)
	}
}
