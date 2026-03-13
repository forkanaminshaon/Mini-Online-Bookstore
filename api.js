const API = "http://localhost:8080/api/books";

function getBooks(){

return fetch(API)
.then(res=>res.json());

}

function getBook(id){

return fetch(`${API}/${id}`)
.then(res=>res.json());

}

function searchBooks(keyword){

return fetch(`${API}/search?keyword=${keyword}`)
.then(res=>res.json());

}