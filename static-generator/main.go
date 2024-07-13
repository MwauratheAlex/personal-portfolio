package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/mwaurathealex/static-generator/views/home"
)

func main() {
    f, err := os.Create("../index.html")
    if err != nil {
        log.Fatalf("failed to create output file: %v", err)
    }

    err = home.Index().Render(context.Background(), f)
    if err != nil {
        log.Fatalf("failed to write output file: %v", err)
    }
    http.ListenAndServe(":3000", nil)
}

