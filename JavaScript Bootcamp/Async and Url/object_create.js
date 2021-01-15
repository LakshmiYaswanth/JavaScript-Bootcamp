const profileprototype={
    message : function(){
        return `hello ${this.lastname} ${this.firstname}`;
    },
    setNewlastName : function (newlastname){
      this.lastname=newlastname;
    }   
}

const peter=Object.create(profileprototype);
peter.firstname='master';
peter.lastname='vijay';
peter.setNewlastName('hero');
  

console.log(peter.message());
