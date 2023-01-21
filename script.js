let myLibrary = [];

const libraryGrid = document.querySelector('.libraryGrid');
const addBtn = document.querySelector('.addBtn');
const popUpGrid = document.querySelector('.popUp');

const bookTitle = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');
const bookPages = document.querySelector('.pages');
const bookRead = document.querySelector('.readed');
const submitBtn = document.querySelector('.submit');
const canceltBtn = document.querySelector('.cancel');
const removeBtn=document.querySelector('.removeBtn');
const readBtn=document.querySelector('readBtn');


let readed;

//events

addBtn.addEventListener('click', e => {
    popUpGrid.style.setProperty('display', 'block')
    })

canceltBtn.addEventListener('click', e => {
    popUpGrid.style.setProperty('display', 'none')
})

// removeBtn.addEventListener('click', e => {
//     removeBook(e.dataset.removed)??
   
// })

addNewBook();
showBooks();

//functions

// function removeBook(book){
//     if(item.)
// }



function addNewBook() {
    submitBtn.addEventListener('click', e => {
        if (bookTitle.value && bookAuthor.value && bookPages.value) {
            bookRead.checked ? readed = 'readed' : readed = 'unread';
            const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readed, false)
            myLibrary.push(newBook);
            clearAddBookField();
            e.preventDefault();
            popUpGrid.style.setProperty('display', 'none')
            showBooks();
        }
    })
}

function clearAddBookField() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    readed.value = '';
}


function showBooks() {
    libraryGrid.innerText='';
    for (let item of myLibrary) {
        if(!item.remove){
        const book = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read= document.createElement('div');
        const remove= document.createElement('div');
        title.innerText = item.title;
        author.innerText = item.author;
        pages.innerText = `${item.pages} pages`;
        read.innerText = item.read;
        remove.innerText='remove';
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(remove);
        libraryGrid.appendChild(book);
        book.classList.add('book')
        remove.classList.add('removeBtn')
        read.classList.add('readBtn')
        }
    }
}


function Book(title, author, pages, read, remove) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.remove = remove;
}