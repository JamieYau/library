let myLibrary = [
  new Book("book1", "author1", 100, true),
  new Book("book2", "author2", 400, false),
  new Book("book3", "author3", 120, true),
  new Book("book4", "author4", 200, false),
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      isRead ? "read" : "not read yet"
    }`;
  };

  this.toggleReadStatus = function () {
    this.isRead = !this.isRead;
  };
}

function handleFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("is-read").checked;

  // Create new book object
  let newBook = new Book(title, author, pages, isRead);

  // Add book to library
  myLibrary.push(newBook);
  toggleModal();
  displayLibrary();

  // Reset form values
  form.reset();
}

function displayLibrary() {
  const bookGrid = document.getElementById("book-grid");

  // Clear book grid
  bookGrid.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book-card");

    // Add data-index attribute to book card
    newBook.setAttribute("data-index", index);

    // create book info and book actions divs
    const newBookInfo = document.createElement("div");
    newBookInfo.classList.add("book-info");

    const newBookActions = document.createElement("div");
    newBookActions.classList.add("book-actions");

    const createBookElement = (tagName, className, textContent) => {
      const element = document.createElement(tagName);
      element.classList.add(className);
      element.textContent = textContent;
      return element;
    };

    const newBookTitle = createBookElement("div", "book-title", book.title);
    const newBookAuthor = createBookElement("div", "book-author", book.author);
    const newBookPages = createBookElement("div", "book-pages", book.pages);
    const newBookReadStatus = createBookElement(
      "div",
      "book-read-status",
      book.isRead ? "Read" : "Not Read"
    );

    const newBookReadStatusButton = createBookElement(
      "button",
      "book-read-status-button",
      "Change Read Status"
    );
    const newBookDeleteButton = createBookElement(
      "button",
      "book-delete-button",
      "Delete Book"
    );

    newBookInfo.appendChild(newBookTitle);
    newBookInfo.appendChild(newBookAuthor);
    newBookInfo.appendChild(newBookPages);
    newBookInfo.appendChild(newBookReadStatus);
    newBookActions.appendChild(newBookReadStatusButton);
    newBookActions.appendChild(newBookDeleteButton);

    newBook.appendChild(newBookInfo);
    newBook.appendChild(newBookActions);

    // Add event listener to delete button
    newBookDeleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayLibrary();
    });

    // Add event listener to read status button
    newBookReadStatusButton.addEventListener("click", () => {
      book.toggleReadStatus();
      displayLibrary();
    });

    bookGrid.appendChild(newBook);
  });
}

// function to remove .hidden class from #overlay and #modal
function toggleModal() {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("hidden");
}

// event listener that will toggle the modal when button is clicked
const addBookButton = document.getElementById("add-book-btn");
addBookButton.addEventListener("click", toggleModal);

// event listener for form submit
const form = document.getElementById("add-book-form");
form.addEventListener("submit", handleFormSubmit);

displayLibrary();
