class Person{
    constructor(firstname,lastname){
       
        this.firstname=firstname;
        this.lastname=lastname;
       

    }
    message(){
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}

class Students extends Person{
    constructor(firstname,lastname,age,degree){
   super(firstname,lastname);
    this.degree=degree;
    this.age=age;
    }
    static getitem(item){
        return item*100;
    }
}

const students=new Students('yaswanth','lakshmi','18','ECE');
console.log(students);
console.log(students.message());
console.log(Students.getitem(2000));