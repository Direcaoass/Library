let myLibrary = [];
let id = 0;

const libraryGrid = document.querySelector('.libraryGrid');
const addBtn = document.querySelector('.addBtn');
const popUpGrid = document.querySelector('.popUp');
const overlayBack = document.querySelector('.overlay');

const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookPages = document.querySelector('.pages');
const readCheck = document.querySelector('.readCheck');
const submitBtn = document.querySelector('.submit');
const canceltBtn = document.querySelector('.cancel');



//functions

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}


function addNewBook() {
    submitBtn.addEventListener('click', (e) => {
        if (bookTitle.value && bookAuthor.value && bookPages.value) {
            e.preventDefault();
            overlayBack.classList.toggle('overlayActive')
            popUpGrid.classList.toggle('popUpActive')
            const readStatus = readCheck.checked ? true : false;
            id++;
            const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatus, id)
            myLibrary.push(newBook);
            createBook(newBook.title, newBook.author, newBook.pages, readStatus, id)
            clearAddBookField();

        }
    })
}

function clearAddBookField() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    readCheck.checked = false;


}

function createBook(title, author, pages, readStatus, id) {
    const bookElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const authorElem = document.createElement('p');
    const pagesElem = document.createElement('p');
    const readElem = document.createElement('button');
    const removeElem = document.createElement('button');

    titleElem.innerText = title;
    authorElem.innerText = author;
    pagesElem.innerText = `${pages} pages`;
    removeElem.innerText = 'remove';

    bookElem.appendChild(titleElem);
    bookElem.appendChild(authorElem);
    bookElem.appendChild(pagesElem);
    bookElem.appendChild(readElem);
    bookElem.appendChild(removeElem);
    libraryGrid.appendChild(bookElem);

    bookElem.classList.add('book');
    removeElem.classList.add('removeBtn');
    readElem.classList.add('readBtn');

    setInitialReadStatus(readStatus, readElem);
    elementEvents(id, bookElem, readElem)
}

function elementEvents(id, bookElem, readElem) {

    bookElem.querySelector('.removeBtn').onclick = () => removeBook(id, bookElem);
    readElem.onclick = () => toggleReadStatus(id, readElem)

}

function setInitialReadStatus(readStatus, readElem) {
    readElem.innerText = readStatus ? 'read' : 'unread';
    readElem.classList.add(readStatus ? 'read' : 'unread');
}

function toggleReadStatus(id, readElem) {

    const book = myLibrary.find(b => b.id === id);
    book.read = !book.read;
    readElem.innerText = book.read ? 'read' : 'unread';
    readElem.classList.toggle('unread', !book.read);
    readElem.classList.toggle('read', book.read);

}

function removeBook(id, element) {
    libraryGrid.removeChild(element)
    myLibrary = myLibrary.filter(book => book.id != id)

}

//events

addBtn.onclick = () => {
    popUpGrid.classList.toggle('popUpActive')
    overlayBack.classList.toggle('overlayActive')
}

canceltBtn.onclick = () => {
    popUpGrid.classList.toggle('popUpActive')
    overlayBack.classList.toggle('overlayActive')
}

addNewBook();


