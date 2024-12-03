const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("N Gurung", "GoodNight", 10, "Read");
const book2 = new Book("H Jan", "GoodMorning", 20, "Not Read");
const book3 = new Book("H Jan", "GoodMorning", 20, "Not Read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary({});

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
  console.log(myLibrary);
}

function displayBook(myLibrary) {
  for (const book of myLibrary) {
    const container = document.querySelector(".container");
    const div = document.createElement("div");

    container.appendChild(div);

    const p = document.createElement("p");
    p.textContent = "Title: " + book.title;

    const p1 = document.createElement("p");
    p1.textContent = "Author: " + book.author;

    const p2 = document.createElement("p");
    p2.textContent = "Pages:" + book.pages;

    const p3 = document.createElement("p");
    p3.textContent = "Status:" + book.read;

    div.append(p, p1, p2, p3);

    const statusButton = document.createElement("button");
    statusButton.textContent = "Status";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    div.appendChild(statusButton);
    div.appendChild(deleteButton);
  }
}

displayBook(myLibrary);
