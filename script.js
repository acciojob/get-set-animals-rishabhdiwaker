//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}

	getSpecies(){
		return this.species;
	}

	makeSound(){
		console.log(`The ${species} makes a sound`);
		myCat.purr();
	}
}

class Dog extends Animal {
	
	bark(){
		console.log("woof");
	}
	 makeSound() {
    console.log(`The ${this.species} makes a sound`);
    this.bark();
  }
}

class Cat extends Animal {
	
	purr(){
		console.log("purr");
	}

	 makeSound() {
    console.log(`The ${this.species} makes a sound`);
    this.purr();
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;