const user = {
    id: 7,
    email: "michael.lawson@reqres.in",
    dob: 1987,
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    department: {
        name: 'IT',
        position: 'programmer'
    },
    tasks: ['creating apps', 'meetings'],
    getAge: function () {
 
        return new Date().getFullYear() - this.dob
    }
}
console.log(user.avatar,user.getAge,user.tasks);

