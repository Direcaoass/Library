let myLibrary = [];

const libraryGrid = document.querySelector('.libraryGrid');
const addBtn = document.querySelector('.addBtn');
const popUpGrid = document.querySelector('.popUp');

const bookTitle = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');
const bookPages = document.querySelector('.pages');
const readCheck = document.querySelector('.readCheck');
const submitBtn = document.querySelector('.submit');
const canceltBtn = document.querySelector('.cancel');
let readStatus;
let id = 0;


//events

addBtn.addEventListener('click', () => {
    popUpGrid.style.setProperty('display', 'block')
})

canceltBtn.addEventListener('click', () => {
    popUpGrid.style.setProperty('display', 'none')

})

addNewBook();

function addNewBook() {
    submitBtn.addEventListener('click', e => {
        if (bookTitle.value && bookAuthor.value && bookPages.value) {
            
            readCheck.checked ? readStatus = 'readed' : readStatus = 'unread';
            id++;
            const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatus, id)
            myLibrary.push(newBook);
            clearAddBookField();
            e.preventDefault();
            popUpGrid.style.setProperty('display', 'none')
            createBook(newBook.title, newBook.author, newBook.pages, readStatus, id)

        }
    })
}

function clearAddBookField() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    readStatus.value = '';
}

function createBook(title, author, pages, readStatus, id) {
    const bookElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const authorElem = document.createElement('p');
    const pagesElem = document.createElement('p');
    const readElem = document.createElement('div');
    const removeElem = document.createElement('div');
    titleElem.innerText = title;
    authorElem.innerText = author;
    pagesElem.innerText = `${pages} pages`;
    readElem.innerText = readStatus;
    removeElem.innerText = 'remove';
    bookElem.appendChild(titleElem);
    bookElem.appendChild(authorElem);
    bookElem.appendChild(pagesElem);
    bookElem.appendChild(readElem);
    bookElem.appendChild(removeElem);
    libraryGrid.appendChild(bookElem);
    bookElem.classList.add('book');
    removeElem.classList.add('removeBtn');
    (readStatus==='readed')?readElem.classList.add('readBtn'):readElem.classList.add('unreadBtn');
    elementEvents(id, bookElem,readElem)
}

function elementEvents(id, bookElem,readElem) {

    bookElem.querySelector('.removeBtn').addEventListener('click', () => removeBook(id, bookElem));

    readElem.addEventListener('click', () =>styleReadBtn(readElem))
        
}

function styleReadBtn(readElem){
    if (readElem.innerText === 'unread') {
        readElem.innerText = 'read';
        readElem.style.backgroundColor ='green';
    }
    else {
        readElem.innerText = 'unread';
        readElem.style.backgroundColor ='burlywood';
    }

}



function removeBook(id, element) {
    libraryGrid.removeChild(element)
    myLibrary = myLibrary.filter(book => book.id != id)

}










function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}