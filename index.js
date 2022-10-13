const shelf = document.querySelector('#content');

const form = document.querySelector('.form');

const author = form.author;
const title = form.title;
const read = form.status;

let myLibrary = [
   {
    author: 'Vladimir Nabokov',
    title: 'Pale Fire',
    read: 'Unread'
   },
   {
    author: 'Kurt Vonnegut',
    title: 'Slaughterhouse Five',
    read: 'Read'
   },
   {
    author: 'Cormac McCarthy',
    title: 'The Road',
    read: 'Read'
   }

];

function Book(author, title, read) {
  // the constructor...
   this.author= author.value;
   this.title= title.value;
   this.read= read.value;
};

function readToggle() {
  let index = this.parentElement.getAttribute("data-index");
  i = Number(index);
  if (myLibrary[i].read == "Read") {
    this.innerText= "Unread";
    myLibrary[i].read = 'Unread';
    return myLibrary[i].read;
  } else {
    this.innerText="Read";
    myLibrary[i].read = 'Read';
    return myLibrary[i].read;
  }
  
};

function removeBook() {
  let index = this.parentElement.getAttribute("data-index");
  shelf.removeChild(this.parentElement);
  myLibrary.splice(index, 1);
  let children = document.getElementsByClassName('book');
  Array.from(children).forEach(function (c) {
  c.setAttribute("data-index", Array.from(children).indexOf(c));
  })
  return myLibrary;
};

function createReadBtn(b, div) {
  let readBtn = document.createElement("button");
   readBtn.classList.add('readBtn');
   readBtn.innerText= b.read;
   readBtn.addEventListener('click', readToggle);
    div.appendChild(readBtn);
    return readBtn;
};

function createDelBtn(div) {
  let btn = document.createElement("button");
  btn.classList.add('removeBtn');
  btn.innerText="Remove";
  btn.addEventListener('click', removeBook);
  div.appendChild(btn);
  return btn;
};

function createBookCard(b) {
  let div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute("data-index", myLibrary.indexOf(b))
    div.innerText = `${(b.title)}

    ${(b.author)}
    `;
    shelf.appendChild(div);
    createReadBtn(b, div);
    createDelBtn(div);
    return div;
};

//adds new book based on form input
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  let newBook = new Book(author, title, read);
  myLibrary.push(newBook);
   createBookCard(newBook);
  document.querySelector('form').reset();
});

function displayLibrary() {
  myLibrary.forEach(function (b) {
    createBookCard(b);
  })
};

displayLibrary()