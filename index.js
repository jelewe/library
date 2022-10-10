const shelf = document.querySelector('#content');

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', addBookToLibrary);

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

function Book() {
  // the constructor...
    this.author = author;
    this.title = title;
    this.read = read;
    return Book;
};

function addBookToLibrary(event) {
  // do stuff here
  event.preventDefault(); 
  let newBook = {
    author: document.getElementById('author').value,
    title:document.getElementById('title').value,
    read: document.getElementById('read').value
  }
   myLibrary.push(newBook);
   console.log(myLibrary);
   let div = document.createElement('div');
   div.classList.add('book');
   div.innerText = `${(newBook.title)}

   ${(newBook.author)}
   
   ${(newBook.read)}`;
   shelf.appendChild(div);
  document.querySelector('form').reset();
};

function displayLibrary() {
  myLibrary.forEach(function (b) {
    let div = document.createElement('div');
    div.classList.add('book');
    div.innerText = `${(b.title)}

    ${(b.author)}
    
    ${(b.read)}`;
    shelf.appendChild(div);
  })
};

displayLibrary()