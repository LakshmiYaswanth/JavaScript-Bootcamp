let print = (msg) => {
    console.log(msg);
};
const arr1=[30,40,50];
console.log(arr1);
const arr2=new Array(30,40,50);
console.log(arr2);
const users=['Nani','nehuru','neli','rami'];
console.log(users);
const kilo=['Nellore',{
    name:"yaswanth",
    age :18
},new Date()];
console.log(kilo);
console.log(kilo.length);
console.log(Array.isArray(kilo));
arr1[4]="lastname";
console.log(arr1);
//manipulating the array
//Add to the end
arr1.push(200,3000,"yashwanth");
console.log(arr1);
//add from front
arr1.unshift(4555);
console.log(arr1);
//remove from end
arr1.pop();
console.log(arr1);
//remove from front
arr1.shift();
console.log(arr1);
/**
 * Delete element based on index and add also add element in same posotion
 * @method splice
 * @param startIndex 
 * @param deleteItems
 * @param items It is optional one
 */
arr1.splice(0,1,'tree'); 
print('splice=>'+arr1);

//reverse
arr1.reverse();
print(arr1);
//concat array
var arr3=arr1.concat(arr2);
print(arr3);
print(arr3.sort());
//sort with compare function.
print(arr3.sort(function(a,b){
    return a - b; 
}))
//reverse sort with compare function.
print(arr3.sort(function(a,b){
    return b-a;
}))
//print(arr3.find(5));
print(arr3.filter(4));





