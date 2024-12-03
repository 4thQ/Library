const myLibrary = [];

function Book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBook(myLibrary) {
  const book = myLibrary.pop();

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
  statusButton.addEventListener("click", (e) => {
    if (p3.innerText === "Status:Read") {
      p3.innerText = "Status:Not Read";
    } else {
      p3.innerText = "Status:Read";
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", (e) => {
    container.removeChild(div);
  });

  div.appendChild(statusButton);
  div.appendChild(deleteButton);
}

const addButton = document.querySelector(".addButton");
const dialog = document.querySelector("dialog");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closeButton");

addButton.addEventListener("click", () => {
  dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let form = new FormData(document.querySelector("form"));
  let userTitle = form.get("book-title");
  let userAuthor = form.get("author");
  let userPages = form.get("pages");
  let userStatus = form.get("status");

  addBookToLibrary(userTitle, userAuthor, userPages, userStatus);
  displayBook(myLibrary);
  dialog.close();
  document.querySelector("form").reset();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
