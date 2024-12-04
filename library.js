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
  p.innerHTML = "<strong>Title: </strong" + book.title;

  const p1 = document.createElement("p");
  p1.innerHTML = "<strong>Author: </strong>" + book.author;

  const p2 = document.createElement("p");
  p2.innerHTML = "<strong>Pages: </strong>" + book.pages;

  const p3 = document.createElement("p");
  p3.innerHTML = "<strong>Status: </strong>" + book.read;

  div.append(p, p1, p2, p3);

  const statusButton = document.createElement("button");
  statusButton.classList.add("status-button");
  statusButton.textContent = "Status";
  statusButton.addEventListener("click", (e) => {
    if (p3.innerHTML === "<strong>Status: </strong>Read") {
      p3.innerHTML = "<strong>Status: </Strong>Not Read";
    } else {
      p3.innerHTML = "<strong>Status: </strong>Read";
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
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
