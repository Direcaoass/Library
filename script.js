let myLibrary = [];

const libraryGrid=document.querySelector('.libraryGrid');
const addBtn= document.querySelector('.addBtn');

const bookTitle = document.querySelector('#titleInput');
const bookAuthor = document.querySelector('#authorInput');
const bookPages = document.querySelector('#pagesInput');
const bookRead = document.querySelector('#readInput');


function Book(title, author, pages, read, deleted) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.deleted=deleted;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showBooks(){
    for(let i of myLibrary){
        
    }
}

const newBook =  new Book(bookTitle);
addBookToLibrary(newBook);
addBookToLibrary(newBook)


console.log(myLibrary);