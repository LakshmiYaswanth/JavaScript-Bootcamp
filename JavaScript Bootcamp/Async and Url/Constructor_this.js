const names={
    "names" : "yaswanth",
    "age" : 18
}
console.log(names);


function person(name,ageof,dob){
    this.name=name;
    this.ageof=ageof;
    this.dob=dob;
    var getAge=function() {
        var today = new Date();
        var birthDate = new Date(this.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    
    }
    console.log(this);
}
console.log(this);


const sai=new person('saitony','18','1980/08/10');
const tony=new person('saibhaii','23','1980/08/10');

const temper1=new String('temple');
const temper2="temple";
temple2=18;

console.log(temper1,typeof temper1);

console.log(temper2,typeof temper2);


if (temper2 ==='temple'){
    console.log('equal');
}else{
    console.log('different');
}
  

const num1=8;
const num2=new Number(5);
console.log(num1);
console.log(num2);

const bool1=true;
const bool2=new Boolean(true);
console.log(bool1);
console.log(bool2);


const obj1={
    'text':'master',
    'age':18
}
const obj2=new Object({
    'text':'master',
    'age':18
})

console.log(obj1);
console.log(obj2);


const arr1=[1,3,5,7];
const arr2=new Array(1,2,3,4,5);
console.log(arr1);
console.log(arr2);

const fun1=function(x,y){
    return x+y;
}
const fun2=new Function('x','y','return x+y');
console.log(fun1(2,3));
console.log(fun2(3,4));


