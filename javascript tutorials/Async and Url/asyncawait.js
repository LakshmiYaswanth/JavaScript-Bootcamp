async function master(){
   return console.log("hello hii wait.")
}
master();

const message = async() => "this is message";
message().then(res => console.log(res));


const todoapp = async() => {
   const res= await fetch('https://jsonplaceholder.typicode.com/posts');
   if(res.ok){
   const response =await (res.json())
   return response;
   }
   else{
      throw new Error('somthing went wrong');
   }
}
todoapp().then(app => console.log(app)).catch(err => console.log(err));