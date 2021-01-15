document.getElementById('button').addEventListener('click',getjson);
function getjson(){
const xhr = new XMLHttpRequest();
 xhr.open('GET','data.json',true)
 xhr.onload=function(){
     if(this.status='200'){
         const user= JSON.parse(this.responseText);
         const output=`   <ul class="collection">
         <li class="collection-item avatar">
         <img src="${user.avatar}" alt="" class="circle">
         <span class="title">Title</span>
         <p>'${user.first_name}' <br>
         '${user.last_name}'
         </p>
         <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
       </li>
       </ul>`

       document.getElementById('output').innerHTML=output;
     }
 }
 xhr.send();

 
}