// zad 1

let myTable = [1, 2, 3, 4];

console.log(myTable)

// zad 2

let myTable = [1, 2, 3, 4, 'aaa', 'bbbb'];

console.log(myTable[0]);
console.log(myTable[myTable.lenght -1]);
console.log(myTable);
for(i=0; i<myTable; i+=){
  if(i%2 == 0){
    console.log(myTable[i])
  }
  if(typeof(myTable[i]) == 'string'){
    console.log(myTable[i])
  }
  if(typeof(myTable[i]) == 'number') {
        console.log(myTable[i])
    }
}


// zad 3

const arr = [13, 51, 3,  -2, 5, 6, 8];

//1
console.log(arr.reduce((a,b)=> a + b));
//2
console.log(arr.reduce((a,b)=> a - b));
//3
console.log(arr.reduce((a, b) => a + b / 
arr.length));
//4

arr.filter((v,i) => v % 2 === 0).forEach(v => {
  console.log(v);
});
//5
arr.filter((v, i) => v% 2 !== 0).forEach(v=> {
  console.log(v);
});

//6
let biggest = 0;
arre.forEach(V  =>{
  if(v>biggest) [
  biggest = v;
  }
})
console.log(biggest);
// 7
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
// 8
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
    console.log(arr[arrLength - i]);
});
