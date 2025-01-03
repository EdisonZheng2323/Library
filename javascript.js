const myLibrary = [];
let numOfBooks = 0;

class Book {
  constructor(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }

  hasRead() {
    if(this.read == "true"){
      this.read = "false";
    }
    else{
      this.read = "true";
    }
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
  card.classList.add(`card${numOfBooks}`);
  card.textContent = `Title: ${book.title} \n Author: ${book.author} \n Total Pages Read: ${book.pages} \n Finished: ${book.read}`; 
  card.style.whiteSpace = "pre-line";
  let readButton = document.createElement("button");
  readButton.classList.add("readButton");
  readButton.textContent = "Change Status?";
  readButton.addEventListener("click", () => {
    book.hasRead();
    card.textContent = `Title: ${book.title} \n Author: ${book.author} \n Total Pages Read: ${book.pages} \n Finished: ${book.read}`; 
    card.appendChild(readButton);
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Delete Book?";
    deleteButton.addEventListener("click", () => {
    myLibrary.pop();
    numOfBooks--;
    card.remove();
  })
  card.appendChild(deleteButton);
  });
  card.appendChild(readButton);
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Delete Book?";
  deleteButton.addEventListener("click", () => {
    myLibrary.pop();
    numOfBooks--;
    card.remove();
  })
  card.appendChild(deleteButton);
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
  const finished = data.get("book_finished")
  addBookToLibrary(author, title, pages, finished);
});
