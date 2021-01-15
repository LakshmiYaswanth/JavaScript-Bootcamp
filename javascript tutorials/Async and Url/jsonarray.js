document.getElementById('button2').addEventListener('click',getjson);
function getjson(){
const xhr = new XMLHttpRequest();
 xhr.open('GET','user.json',true)
 xhr.onload=function(){
     if(this.status='200'){
         const user= JSON.parse(this.responseText);
         let output=`   <ul class="collection">`;
         user.forEach(users => {
             output +=`<li class="collection-item avatar">
             <img src="${users.color}" alt="" class="circle">
             <span class="title">Title</span>
             <p>'${users.name}' <br>
             '${users.pantone_value}'
             </p>
             <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
           </li>`
             
         });
         output +=`</ul>`;
       document.getElementById('users').innerHTML=output;
     }
     
 }
 xhr.send();

 
}