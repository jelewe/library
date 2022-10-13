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
   console.log(read.id)
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

function readToggle () {

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

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  let newBook = new Book(author, title, read);
  console.log(newBook);
  myLibrary.push(newBook);
   let div = document.createElement('div');
   div.classList.add('book');
   div.setAttribute("data-index", myLibrary.indexOf(newBook));
   div.innerText = `${(newBook.title)}

   ${(newBook.author)}
   `;
  createReadBtn(newBook, div);
  createDelBtn(div);
   shelf.appendChild(div);
  document.querySelector('form').reset();
});

function displayLibrary() {
  myLibrary.forEach(function (b) {
    let div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute("data-index", myLibrary.indexOf(b))
    div.innerText = `${(b.title)}

    ${(b.author)}
    `;
    createReadBtn(b, div);
    createDelBtn(div);
    shelf.appendChild(div);
    return div;
  })
  
};

displayLibrary()