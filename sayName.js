//Create a Person constructor that accepts name and age as parameters and 
//sets those properties accordingly in the Constructor.

  //code here
function Person(name, age) {
	this.name = name;
	this.age = age;
  }


//Now create three instances of Person with data you make up

  //code here

  var me = new Person ('Ben', 99);
  var me2 = new Person ('Connor', -99);
  var me3 = new Person ('Mike', 999);


//Now add a sayName method on your Person class that will alert the name of 
//whatever Person instance called it.

  //code here

Person.prototype.sayName = function () {
	alert(this.name);
}
 me.sayName();