let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    start: function() {
        console.log("Car started");
    },
    stop: function() {
        console.log("Car stopped");
    }
};

console.log(car.brand);
car.year = 2022;
console.log(car.year);

car.start();
car.stop();

car.color = "Red";
console.log(car.color);

delete car.model;
console.log(car.model);

function Animal (name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.sound = function() {
    console.log(`${this.name} makes a sound.`);
}

let dog = new Animal("Buddy", "Dog");
dog.sound();

dog.bark = function() {
    console.log("왈왈!");
}

dog.bark();

console.log(dog.hasOwnProperty('name'));
console.log(dog.hasOwnProperty('sound'));
console.log('sound' in dog); 