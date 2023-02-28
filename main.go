package main

import (
	"flag"
	"frp-port-manager/server"
	"log"
)

var (
	listenPtr = flag.String("l", ":8080",
		"Listen on `host:port`")
)

func main() {
	s := server.NewServer()

	log.Printf("Server running on: %s", *listenPtr)
	log.Fatal(s.Serve(*listenPtr))
}
