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
}

function addBookToLibrary() {
  toggleModal();

  // Prompt user for book details
  let title = prompt("Enter the book title:");
  let author = prompt("Enter the author's name:");
  let pages = prompt("Enter the number of pages:");
  let isRead = confirm("Has the book been read?");

  // Create new book object
  let newBook = new Book(title, author, pages, isRead);

  // Add book to library
  myLibrary.push(newBook);
}

function displayLibrary() {
  const bookGrid = document.getElementById("book-grid");

  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book-card");

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

    bookGrid.appendChild(newBook);
  });
}

// function to remove .hidden class from #overlay and #modal
function toggleModal() {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
}

// event listener that will call addBookToLibrary() when button is clicked
const addBookButton = document.getElementById("add-book-btn");
addBookButton.addEventListener("click", addBookToLibrary);
displayLibrary();
