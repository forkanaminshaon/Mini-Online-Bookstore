const container = document.getElementById("bookContainer");
const searchBox = document.getElementById("searchBox");

loadBooks();

function loadBooks(){

getBooks().then(showBooks);

}

function showBooks(books){

container.innerHTML="";

books.forEach(book=>{

container.innerHTML+=`

<div class="book">

<h3>${book.title}</h3>
<p>${book.author}</p>
<p>$${book.price}</p>

<button onclick="viewBook(${book.id})">
View Details
</button>

<button onclick="addToCart(${book.id})">
Add to Cart
</button>

</div>

`;

});

}

function viewBook(id){

window.location="book.html?id="+id;

}

searchBox.addEventListener("keyup",()=>{

searchBooks(searchBox.value).then(showBooks);

});