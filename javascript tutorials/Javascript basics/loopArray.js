const array=['Array','binary','nelli','nellore'];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//for of
for(const arr of array){
    console.log(arr);
}
//forEach
array.forEach(arr1=>{
    console.log(arr1);
})

array.forEach(function(arr1,index)
{
    console.log(arr1,index);
})
const user=array.map((arr1)=>{
    return `hi, ${arr1}`;
})
console.log(user);

const users={
    name : 'aswanth',
    age:18,
    mail:'taj@mailinator.com'

}
for (const user in users ){
    console.log( `${user} in ${users[user]}`);
}
