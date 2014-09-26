
$(document).ready(function(){
	
});

// Each of the following way will create objects

var newObject = {};

var newObject2 = Object.create( Object.prototype );
var newObject3 = new Object();


// There are then four ways in which keys and values can be assigned to the object:

// 1. Dot Syntax

// 	Set properties
newObject.someKey = "Hello World";

// 	Get properties
var value = newObject.someKey;

// 2. Square bracket syntax

newObject["someKey"] = "Hello World!";
var value = newObject["someKey"];

var defineProperties = function(obj, key, value){
	
	var config = {
			value: value,
			writable: true,
			enumerable: true,
			configurable: true
	};
	
	Object.defineProperty(obj, key, config);
};

//To use, we then create a new empty "person" object


var person = Object.create( Object.prototype );

// Populate the object with properties

//Populate the object with properties
defineProp( person, "car",  "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
 
console.log(person);

// Constructors with prototypes

function Car(model, year, miles){
	
	this.model = model;
	this.year = year;
	this.miles = miles;
}


Car.prototype.toString = function(){
	return "This model "+this.model+"has done "+this.miles;
};

// Usage

var mondeo = new Car("Ford Mondeo", 2013, 23000);
var civic = new Car("Honda Civic", 2009, 120000);

console.log(mondeo.toString());



















