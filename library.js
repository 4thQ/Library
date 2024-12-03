const myLibrary = [
  { name: "J Miguel", title: "Remeber me", pages: 102, read: "Read" },
  { name: "G Nirajan", title: "Masterjan", pages: 0, read: "Reading" },
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
    p3.textContent = "Status: " + book.read;
    div.appendChild(p3);

    readStatusButton = document.createElement("button");
    readStatusButton.textContent = "Status";
    div.appendChild(readStatusButton);

    readStatusButton.addEventListener("click", () => {
      if (p3.innerText === "Status: Read") {
        p3.innerText = "Status: Reading";
      } else {
        p3.innerText = "Status: Read";
      }
    });

    removeButton = document.createElement("button");
    removeButton.textContent = "Remove!";
    div.appendChild(removeButton);

    removeButton.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  }
}

displayBooks(myLibrary);

const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".closeButton");

addButton.onclick = (event) => {
  dialog.showModal();
  event.stopPropagation();
  event.preventDefault();
};

closeButton.onclick = (event) => {
  dialog.close();
  console.log("Closed");
  event.stopPropagation();
  event.preventDefault();
};

const bookForm = document.querySelector(".bookForm");

bookForm.addEventListener("submit", (event) => {
  let bookStatus = "";
  event.stopPropagation();
  event.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const title = document.querySelector('[name="title"]').value;
  const pages = document.querySelector('[name="pages"]').value;
  const status = document.querySelector('[name="read"]');

  var isChecked = status.checked;

  if (isChecked == true) {
    bookStatus = "Read";
  } else {
    bookStatus = "Not read";
  }

  const container = document.querySelector(".container");
  const div = document.createElement("div");
  container.appendChild(div);

  const p = document.createElement("p");
  p.textContent = "Author: " + name;
  div.appendChild(p);

  const p1 = document.createElement("p");
  p1.textContent = "Title: " + title;
  div.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "Pages: " + pages;
  div.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = "Status: " + bookStatus;
  div.appendChild(p3);

  readStatusButton = document.createElement("button");
  readStatusButton.textContent = "Status";
  div.appendChild(readStatusButton);

  readStatusButton.addEventListener("click", () => {
    if (p3.innerText === "Status: Read") {
      p3.innerText = "Status: Reading";
    } else {
      p3.innerText = "Status: Read";
    }
  });

  removeButton = document.createElement("button");
  removeButton.textContent = "Remove!";
  div.appendChild(removeButton);

  removeButton.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
});
