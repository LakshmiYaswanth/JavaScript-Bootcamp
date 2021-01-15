// const ul=document.querySelector('.collection')
// let item=ul.firstChild;
// item=ul.firstElementChild;
// item=ul.childElementCount;

// let il=ul.firstElementChild;
// item=il.parentElement;
// item=il.parentNode;
// item=il.nextSibling;
// item=il.nextElementSibling;
// item=il.nextElementSibling.nextElementSibling;
// item=il.nextElementSibling.nextElementSibling;
// item=il.nextElementSibling.previousElementSibling;
// console.log('item',item);



//<li class="collection-item">Alvin <a href="#!" class="secondary-content special-link"><i
//                      class="material-icons">grade</i></a></li>

const li=document.createElement('li');
li.className="collection-item"
li.id='new-item'
li.appendChild(document.createTextNode('Yaswanth'))


const link=document.createElement('a');
link.className="secondary-content";

link.innerHTML='<i class="material-icons">grade</i>'
li.appendChild(link);
document.querySelector('.collection').appendChild(li)



const oldtitle=document.getElementById('title');
const newtitle=document.createElement('h2')
newtitle.id='new-title';
newtitle.appendChild(document.createTextNode('Hii'));
const header=document.querySelector('.collection-header');
header.replaceChild(newtitle,oldtitle);
