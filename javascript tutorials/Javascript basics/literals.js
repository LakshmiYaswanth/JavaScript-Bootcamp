let name="yashwanth";
let beer="beer";
let cococola="pepsi";
let age=45;
let message;
message='My name is '+ name + " My age is "+ age ;
message=`My name is ${name} age is ${age} and i drink ${drink()}`;
console.log(message);

function drink(){
    if( age < 18){
        return beer;
    }else{
        return cococola;
    }
}


