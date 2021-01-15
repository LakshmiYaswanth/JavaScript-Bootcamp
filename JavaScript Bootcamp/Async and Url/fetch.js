document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getJSONAPI);

function getText(){
    fetch('data.txt').then(function(res){
return (res.text());
    }).then(function(data){
        document.getElementById('output').innerHTML=data;
    }).catch(function(err){
        console.log('error');
    })
}
function getJSON(){
    fetch('user.json').then(function(res){
return (res.json());
    }).then(function(user){
        let output = '';
        user.forEach(element => {
            output+=`<li>${element.color}</li>`; 
            output+=`<li>${element.name}</li>`;
        });
        document.getElementById('output').innerHTML= output;
    }).catch(function(err){
        console.log('error');
    })
}
function getJSONAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(function(res){
return (res.json());
    }).then(function(user){
        let output = '';
        user.forEach(element => {
            output+=`<li>${element.title}</li>`; 
            output+=`<li>${element.body}</li>`;
        });
        document.getElementById('output').innerHTML= output;
    }).catch(function(err){
        console.log('error');
    })
}