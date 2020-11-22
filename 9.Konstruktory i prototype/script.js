// zadanie 1

function Person(name, lastName, age, country, city, language) {
    this.name = name;
    this.lastname = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.changeCity = function (newCity) {
        return (this.city = newCity);
    };
    this.changeAge = function (newAge) {
        return (this.age = newAge);
    };
}
const p1 = new Person('Janusz', 'Korwin', 52, 'Poland', 'Krakow', 'polish');
const p2 = new Person('Grażyna', 'Dziewczyna', 30, 'Poland', 'Gdansk', 'Polish');
const p3 = new Person('Jan', 'Szczecina', 40, 'Germany', 'Hamm', 'german');
const p4 = new Person('Antoni', 'Macierewicz', 58, 'Poland', 'Warszawa', 'polish');
const p5 = new Person('Martin', 'Muller', 78, 'Germany', 'Berlin', 'german');

p1.changeAge(53);
p1.changeCity('Lębork');
console.log(p1, p2, p3, p4, p5);
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
function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();


//lub 
function Game(){
    
   this.lastNumber = 0;
   this.number = 0;
   this.generator = null;
    
    this.startGenerator = () => {
        this.generator = setInterval(() => {
            this.lastNumber = this.number;
            this.number = Math.floor((Math.random() * 10) + 1);
            
            console.log(this.number);
            this.checkWin();
        }, 1000)
    }
    
    this.checkWin = () => {
        if(this.lastNumber + 5 === this.number){
            console.log("Wygrałeś");
            clearInterval(this.generator);
        }
    }
}

let game1 = new Game();
game1.startGenerator();


