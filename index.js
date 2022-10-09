const shelf = document.querySelector('#content');

let myLibrary = [
   {
    author: 'Vladimir Nabokov',
    title: 'Pale Fire'
   },
   {
    author: 'Kurt Vonnegut',
    title: 'Slaughterhouse Five'
   },
   {
    author: 'Cormac McCarthy',
    title: 'The Road'
   }

];

function Book() {
  // the constructor...
  Object.create 
    this.author = author
    this.title = title
};

function addBookToLibrary() {
  // do stuff here
    myLibrary.push(Book);
    return myLibrary;
};

function displayLibrary() {
  myLibrary.forEach(function (b) {
    let div = document.createElement('div');
    div.classList.add('book');
    div.innerText = `${(b.title)}

    ${(b.author)}`;
    shelf.appendChild(div);
  })
};

displayLibrary()