package main

import (
    "fmt"
    "net/http"
    // "os"
    "io/ioutil"
    "encoding/json"
)

type UserCredentials struct {
    Username string
    Password string
}

type User struct {
    Id int
    Role string
}

type UserSesson struct {
    Id int
    User User
}

func main() {
    // p := fmt.Printf
    http.HandleFunc("/", handler)
    http.HandleFunc("/js/", SourceHandler)
    http.HandleFunc("/imgs/", SourceHandler)
    http.HandleFunc("/css/", SourceHandler)
    http.HandleFunc("/fonts/", SourceHandler)
    http.HandleFunc("/tpls/", SourceHandler)

    http.HandleFunc("/login", login)
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

func login(w http.ResponseWriter, r *http.Request){
    p := fmt.Printf
    _ = p
    body, _ := ioutil.ReadAll(r.Body)
    var u UserCredentials
    json.Unmarshal(body, &u)

    if u.Username == "max" && u.Password == "111" {
        var user UserSesson
        user.Id = 1
        user.User.Id = 1
        user.User.Role = "admin"
        // r.StatusCode = 200
        b, _ := json.Marshal(user)
        fmt.Fprintf(w, "%s", b)
    }else{
        // r.StatusCode = 403
        fmt.Fprintf(w, string("User not Found"))
    }

}
