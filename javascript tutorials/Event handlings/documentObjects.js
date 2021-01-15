let doc;
doc = document
doc = document.all[1];
doc = document.head;
doc = document.body;
doc = document.doctype;
doc = document.domain;
doc = document.URL;
doc = document.characterSet;
doc = document.contentType;
doc = document.links;
doc = document.links[0].classList;
doc = document.links[0].className;
doc = document.images;
doc = document.scripts;
let scripts = document.scripts;
let scriptsArray = Array.from(scripts)
scriptsArray.forEach(function (script, index) {
    console.log(index + script.getAttribute('src'))
});
console.log(doc);

let title;
// title=document.getElementById('title').style.background="red";
// title=document.getElementById('title').style.color='green';
// title=document.getElementById('title').style.padding="1px";
// title=document.getElementById('title').innerText=('Another Title');

title=document.querySelector('#title');
title=document.querySelector('.collection-item');
title=document.querySelector('.collection');
title=document.querySelector('h1');
title=document.querySelector(".collection-item").
style.backgroundColor='red';
title=document.querySelector(".collection-item:last-child").
style.backgroundColor='green';
title=document.querySelector(".collection-item:nth-child(3)").
style.backgroundColor='yellow';
title=document.querySelector(".collection-item:nth-child(2)").
style.backgroundColor='blue';
title=document.querySelector('.material-icons').
style.backgroundColor='green';
console.log(title);

const list=document.querySelector(".collection");
const listitem=document.querySelector(".collection-item");
console.log('list :',list);
console.log('listitems:',listitem);

const nodes=document.querySelector('.collection-item').
childNodes
console.log('nodes',nodes);
console.log('nodetype',nodes[0].nodeType);
console.log('nodetype',nodes[1].nodeType);
const children=document.querySelector('.collection').children[0].children[0].id["special-id"];
console.log('children:',children)

