package main

import (
	"frp-port-manager/server"
	"log"
)

func main() {
	s := server.NewServer()

	log.Fatal(s.Serve())
}
