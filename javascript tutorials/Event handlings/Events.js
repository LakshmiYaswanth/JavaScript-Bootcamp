document.querySelector('#submit-btn').
addEventListener('click',hello);
// addEventListener('click',function(e){
//     e.preventDefault();
//     window.alert('hello');

// })

function hello(e){
    e.preventDefault();
    let item;
    item= e.target.classList;
    item=e.type;
    item=e.timeStamp;
    item=e.clientX;
    item=e.clientY;
    item=e.offsetX;
    item=e.offsetY;

    console.log(item);
    window.alert('hiii')
}