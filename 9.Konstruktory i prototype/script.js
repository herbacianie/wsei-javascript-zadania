// zadanie 1

function Person(firstname, lastname, age, country, city, language) {
    this.firstname = firstname, 
    this.lastname = lastname, 
    this.age = age,
    this.country = country,
    this.city = city,
    this.language = language
}

const user1 = new Person('Imie', 'Nazwisko', 20, 'Polska', 'Krakow', 'polski');
const user2 = new Person('Imie', 'Nazwisko', 22, 'Polska', 'Krakow', 'polski');
console.log(user1)
console.log(user2)

// zadanie 2


function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    },
    this.clearMemory = function() {
        this.memory = [];
    },
    this.showMemory = function() {
        console.log(this.memory);
    }
    this.sub = function(c,d) {
        this.memory.push('Odejmowanie');
        console.log(c -d);
    };
    this.mul = function(e,f) {
        this.memory.push('Mnożenie');
        console.log(e *f);
    };
        this.div = function(g,h) {
        this.memory.push('Dzielenie');
        console.log(g/h);
    };
    
}

const calc1 = new Calculator();
calc1.sum(2,2)
calc1.sub(2,3)
calc1.mul(3,3)
calc1.div(12,3)
calc1.showMemory()

// zadanie 3
