const myLibrary = ["Harri Putor", "Tingled", "Twolight"];

function Book() {}

function addBookToLibrary() {}

function displayBooks(myLibrary) {
  for (i = 0; i < myLibrary.length; i++) {
    container = document.querySelector(".container");
    div = document.createElement("div");
    div.innerHTML = myLibrary[i];
    container.appendChild(div);
  }
}

displayBooks(myLibrary);
