package main

import (
    "fmt"
    "net/http"
    // "os"
    "io/ioutil"
)

func main() {
    // p := fmt.Printf
    http.HandleFunc("/", handler)
    http.HandleFunc("/js/", SourceHandler)
    http.HandleFunc("/imgs/", SourceHandler)
    http.HandleFunc("/css/", SourceHandler)
    http.HandleFunc("/fonts/", SourceHandler)
    // http.Handle("/imgs/", http.StripPrefix("/imgs/", http.FileServer(http.Dir("imgs"))))

    http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
    // fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
    dat, err := ioutil.ReadFile("index.html")
    if err != nil {

    }

    fmt.Fprintf(w, string(dat))
}

func SourceHandler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, r.URL.Path[1:])
}
