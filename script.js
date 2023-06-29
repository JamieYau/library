let myLibrary = [new Book("book1", "author1", 100, true)];

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
  // Prompt user for book details
  let title = prompt("Enter the book title:");
  let author = prompt("Enter the author's name:");
  let pages = prompt("Enter the number of pages:");
  let isRead = confirm("Has the book been read?");

  // Create new book object
  let newBook = new Book(title, author, pages, isRead);

  // Add book to library
  myLibrary.push(newBook);

  console.log(myLibrary);
}

function displayLibrary() {

}

console.log(myLibrary);
addBookToLibrary();
