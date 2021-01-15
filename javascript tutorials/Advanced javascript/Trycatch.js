const person ={
    name :"yaswanth"
}
try{
    //somthing()
    //null.name;
    if(!person.email){
        throw new TypeError('this my error');
    }
    decodeURIComponent("%r");
}catch(error){
    console.log('This was my error');
}finally{
    console.log('this my bad');
}
console.log('match')