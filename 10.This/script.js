// zad 1 i zad 2
function Person(firstName, lastName, age, country, city) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
         this.country = country;
         this.city = city;
         this.favDishes = [];

         this.showDetails = function () {
            console.log(`name: ${this.firstName} ${this.lastName} age: ${this.age} country: ${this.country}, ${this.city}`);
        }
        this.addOneYear = function () {
            ++this.age;
        }
     }



const person1 = new Person("Jan", "Kowalski", 50, "Poland", "Cracow");
const person2 = new Person("Monika", "Lewiński", 34, "USA", "Washington");

person1.addOneYear();
person2.addOneYear();
person2.addOneYear();
person1.showDetails();

Person.prototype.addNewFavDishes = function (name) {
    this.favDishes.push(name);
}

Person.prototype.showFavDishes = function () {
    console.log("("+this.firstName +" "+ this.lastName + ")"+ " Favourite dishes: " + this.favDishes.join(', '))
}

person1.addNewFavDishes('Lody');
person1.addNewFavDishes('Pampuchy');
person1.showFavDishes();

person1.addNewFavDishes('Jajecznica');
person1.showFavDishes();
