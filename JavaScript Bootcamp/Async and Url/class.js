class master{
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob=new Date(dob);
    }

    message(){
        return `Hi ${this.firstname} ${this.lastname}`;
    }
    calculate_age(){
        var diffage=Date.now()-this.dob.getTime();
        var agedt= new Date(diffage);
        return Math.abs(agedt.getFullYear()-1978);
    }
    setlastName(newlastname){
        this.lastname=newlastname;

    }

}

const blog=new master('lakshmi','yaswanth','11-13-1990');
blog.setlastName('rajesh');
console.log(blog.calculate_age());
console.log(blog);
