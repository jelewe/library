const shelf = document.querySelector('#content');

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', addBookToLibrary);

const author = document.querySelector('#author');
const title = document.querySelector('#title');
const read = document.querySelector('#read');

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

function removeBook() {
  let index = this.parentElement.getAttribute("data-index");
  shelf.removeChild(this.parentElement);
  myLibrary.splice(index, 1);
  console.log(myLibrary);
  return myLibrary;
}


function addBookToLibrary(event) {
  event.preventDefault(); 
  let newBook = new Book(author, title, read);
  myLibrary.push(newBook);
   let div = document.createElement('div');
   div.classList.add('book');
   div.setAttribute("data-index", myLibrary.indexOf(newBook));
   div.innerText = `${(newBook.title)}

   ${(newBook.author)}
   
   ${(newBook.read)}
   
   `;
   let btn = document.createElement("button");
   btn.classList.add('removeBtn');
   btn.innerText="Remove";
   btn.addEventListener('click', removeBook);
   div.appendChild(btn);
   shelf.appendChild(div);
  document.querySelector('form').reset();
};

function displayLibrary() {
  myLibrary.forEach(function (b) {
    let div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute("data-index", myLibrary.indexOf(b))
    div.innerText = `${(b.title)}

    ${(b.author)}
    
    ${(b.read)}
    
    `;
    let btn = document.createElement("button");
    btn.classList.add('removeBtn');
    btn.innerText="Remove";
    btn.addEventListener('click', removeBook);
    div.appendChild(btn);
    shelf.appendChild(div);
    return div;
  })
  
};

displayLibrary()