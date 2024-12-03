const myLibrary = [
  { name: "J Miguel", title: "Remeber me", pages: 102, read: "not read" },
  { name: "G Nirajan", title: "Masterjan", pages: 0, read: "reading" },
];

function Book() {}

function addBookToLibrary() {}

function displayBooks(myLibrary) {
  for (let book of myLibrary) {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    container.appendChild(div);

    const p = document.createElement("p");
    p.textContent = "Author: " + book.name;
    div.appendChild(p);

    const p1 = document.createElement("p");
    p1.textContent = "Title: " + book.title;
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Pages: " + book.pages;
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "Read: " + book.read;
    div.appendChild(p3);

    readStatusButton = document.createElement("button");
    readStatusButton.textContent = "Status";
    div.appendChild(readStatusButton);

    removeButton = document.createElement("button");
    removeButton.textContent = "Remove!";
    div.appendChild(removeButton);
  }
}

displayBooks(myLibrary);

const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".closeButton");

addButton.onclick = () => {
  dialog.showModal();
};

closeButton.onclick = () => {
  dialog.close();
  console.log("Closed");
};

const bookForm = document.querySelector(".bookForm");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector('[name="name"]').value;
});
// const name = document.querySelector('[name="name"]').value;
//   myLibrary.push(name);
//   console.log(myLibrary);
