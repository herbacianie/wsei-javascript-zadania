// zadanie 1

var x=1;
var y=2;

if(x>y) {
   console.log("x jest wieksze"); 
} else {
    console.log("x jest mniejsze");
} 

// zadanie 2

let num1 = 112;
let num2 = 115;
let num3 = 20;

if(num1 > num2 && num1 > num3) {
    console.log('num1 jest największe');
} else if(num2 > num3) {
    console.log('num2 jest największe');
} else {
    console.log('num3 jest największe');
}

// zadanie 3

for (let i=0; i<11; i++) {
	console.log("Lubię JavaScript");
}

// zadanie 4

var result = 0;

for(var i = 0; i<11; i++){
	result += i;
	console.log(result);
}

// zadanie 5 

var n = 5;
for(let i = 0; i <= n; i++){
    console.log(`${i} - ${i%2 === 0 ? 'parzysta' : 'nieparzysta'}`); // warunek ? true : false 
    
}



// zadanie 6


for (var i = 0; i < 3; i++) {
    for (var j= 0; j < 4; j++) {
        console.log("i=" + i +", j=" +j);
    }
}

// zadanie 7

for(let i = 0; i <= 100; i++){
    if(i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");  // musi być pierwszy by późniejsze już się nie wykonały w tym miejscu
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// zadanie 8
// a

let stars = '*';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 0; j <= i; j++) {
        
        result += stars;
        
    }
    console.log(result)
}

// b
	

let stars = '*';
let spacer = ' ';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 0; j < i; j--) {
        result += spacer;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + spacer;
    }
    console.log(result);
}

// c 

let star="*";
let space=" ";
var j=4;
var l=1;
for(var i=0; i<5; i++){

result1="";
result2="*";

  for(var k=j; k>0; k--){
   result1+=space;
}
j--;
for(var n=1; n<l; n++){
result2+=(star+star);
}
l++;
console.log(result1+result2);

}

