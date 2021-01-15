let x=10;
let y=x;
let name='18';
console.log(Number(name));
console.log(x>y);

const object={
    name:"yaswanth",
    age: 23
}
let user = { name: "Alan" }
function message(user) {
    user.name = "Peter"
    console.log("user inside function: ", user.name)
}
message(user)
console.log(user.name)