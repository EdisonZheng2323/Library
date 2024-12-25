const myLibrary = [];
let numOfBooks = 0;

function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}


Book.prototype.hasRead = function () {
  if(this.read === true){
    this.read = false;
  }
  else{
    this.read = true;
  }
}

function addBookToLibrary(author, title, pages, read){
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
  numOfBooks++;
  displayBook();
}

function displayBook(){
  let book = myLibrary[numOfBooks - 1];
  let card = document.createElement("div");
  card.classList.add("card");
  card.textContent = `Title: ${book.title} \n Author: ${book.author} \n Total Pages Read: ${book.pages} \n Finished: ${book.read}`; 
  card.style.whiteSpace = "pre-line";
  let container = document.querySelector(".container");
  container.appendChild(card);
}

const form = document.querySelector(".sidebar");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(form);
  const title = data.get("book_title");
  const author = data.get("book_author");
  const pages = data.get("book_pages_read");
  const finished = document.querySelector("#hasRead").checked;
  addBookToLibrary(author, title, pages, finished);
});

