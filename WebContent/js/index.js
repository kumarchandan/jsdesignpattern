

// Javascript is a class-less language, but we can use function as classes.

// A Car class

function Car(model){
		
		this.model = model;
		this.color = "Silver";
		this.year = "2014";
		
		this.getInfo = function(){
			return this.model+" "+this.year;
		};
		
	};
	
$(document).ready(function(){
	var myCar = new Car("ford");

	myCar.year = "2010";

	console.log(myCar.getInfo());
	
	var yourCar = new Car("Audi");
	yourCar.year = "2014";
	
	console.log(yourCar.year);
});
