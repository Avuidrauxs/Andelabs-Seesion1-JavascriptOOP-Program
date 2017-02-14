//Funtion constructor
function Person (firstname,lastname,height,age,sex){
  
  //Exhibition of encapsulation
    this.firstname = firstname || 'John';
    this.lastname = lastname ||'Abanga';
    this.height = height || 180;
    this.age = age || 30;
    this.sex = sex || 'Male';
    
  
}

//Example of Abstraction
Person.prototype.walk = function(stepps){
  
  return this.firstname + " is walking "+stepps+" steps";
  
};


Person.prototype.getBirthdayAge = function(){
  	
  		this.age+=1
      return this.age;
  
};

//Prototypical Inheritance
var ben = new Person('Ben','Beans',140,'Male',50);
var man = new Person();
var tyler = man.getBirthdayage;


//Example of Polymorphism
 ben.getBirthdayAge = function(sp){
  
   return "Ben is not that old"
}

module.exports = Person;