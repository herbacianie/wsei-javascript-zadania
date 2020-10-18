// zad 1
let  sayHi = () => {
  console.log("Udało się!");
};

sayHi();

// zad 2

function nameFunction(nr) {
    console.log(nr)
}
nameFunction(2console);

// zad 3

let txt = 'omg';
function returnString = (txt) => {
return txt;
}
console.log(returnString(txt));

// zad 3
 

function myString(paramStr) {
  
  let counter = 0;
  
  let myInterval = setInterval(()=>{
    counter ++;
    if(counter == 5){
      console.log('Koniec');
      clearInterval(myInterval);
    }
    else{
        console.log(paramStr);
    }
    
  },3000;
}

myString('Jakiś string');
