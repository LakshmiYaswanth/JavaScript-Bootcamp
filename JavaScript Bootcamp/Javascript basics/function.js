function value(name,age){
    if(typeof name=== 'undefined'){
        name='jhon';
    }
    if(typeof age === 'undefined'){
        age=18;
    }
    return `My is my ${name} and my age is ${age}`;
}
console.log(value());

const sum = function(a,b){
    return (a+b);
}
console.log(sum(3,4));
var num = 60;
(function(){
    var num = 3;
    console.log(num);
})
console.log(num);
const person ={
    hello :function(){
        console.log("hello");
    },
    master :function(){
        console.log("master");
    }
}
person.hello();
person.master();