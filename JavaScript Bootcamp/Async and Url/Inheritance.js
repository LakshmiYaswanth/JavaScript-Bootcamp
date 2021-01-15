function Employee(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
   Employee.prototype.message=function(){
       return `Hii ${this.firstname} ${this.lastname}`;

   }
const emp=new Employee("yaswanth","lakshmi");
console.log(emp.message());


function Student(firstname,lastname,classname,year){
    Employee.call(this,firstname,lastname);
    this.classname=classname;
    this.year=year;
}
Student.prototype=Object.create(Employee.prototype);
Student.prototype.constructor=Student;
const student=new Student('lakshmi','yaswanth','inter',1998);
console.log(student.message());
console.log(student)