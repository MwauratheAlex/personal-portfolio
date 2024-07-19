package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/mwaurathealex/static-generator/views/home"
)

func main() {
	f, err := os.Create("../index.html")
	fmt.Println("Hello")
	fmt.Println(os.Getenv("env"))
	if err != nil {
		log.Fatalf("failed to create output file: %v", err)
	}

	err = home.Index().Render(context.Background(), f)
	if err != nil {
		log.Fatalf("failed to write output file: %v", err)
	}

	indexPath := filepath.Join("..", "index.html")
	assetPath := filepath.Join("..", "assets")

	// Handler to serve the index.html file
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		http.ServeFile(w, r, indexPath)
	})

	// File server to serve static files from the assets directory
	fs := http.FileServer(http.Dir(assetPath))
	http.Handle("/assets/", http.StripPrefix("/assets/", fs))

	http.ListenAndServe(":3000", nil)
}
