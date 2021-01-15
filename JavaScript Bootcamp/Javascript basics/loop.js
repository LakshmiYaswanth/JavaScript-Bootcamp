let array= new Array(30,49,89,"ram","bhoom");
for(let i=0;i<array.length;i++){
    console.log(array[i]);
    
}
for (let i=0;i<10;i++){
  
    if(i===3){
        console.log("three");
        continue;
    }
    
    if(i===6){
        console.log(i);
        break;
    }
    console.log(i);
}

let i=0;
while(i<10){
    console.log(i);
    i++;
}


do{
    console.log(i);
    i++;
}while(i<10);

