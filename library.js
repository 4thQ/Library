const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("N Gurung", "GoodNight", 10, "read");
const book2 = new Book("H Jan", "GoodMorning", 20, "read");

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
  console.log(myLibrary);
}

addBookToLibrary(book1);
addBookToLibrary(book2);

function displayBook(myLibrary) {
  for (const book of myLibrary) {
    const div = document.createElement("div");
    div.innerHTML = book.title;
    document.body.appendChild(div);
  }
}

displayBook(myLibrary);
