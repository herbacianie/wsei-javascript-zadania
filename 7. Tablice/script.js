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


//zad 4
function myTable(paramTable){
    let result = 0;
    for(i=0; i<paramTable.length; i++){

        result = result + paramTable[i];
    }
    console.log(result)
};

myTable([1,2,3,4]);

//zad 5

function myTable(paramTable){
  var sum = 0;
  for(i=0; i<paramTable.length; i++){
    sum = sum + paramTable[i];
    }
  var average = sum /paramTable.lenght;
  
  for(i=0, i<paramTable.length, i++){
    console.log(paramTable[i]*average);
};

myTable([1,2,3,4]);
  
// zad 6
  
  myTable([1,2,3,4]);

function myTable(paramTable){
    var sum =0;
    var length = 0;
    for (i=0; i<paramTable.length; i++){
        if(paramTable[i] % 2 == 0){
            
            sum = sum + paramTable[i];
            length++;
        }
            
    }
    let avg = sum / length;
    console.log(avg)
};
  
//zad 7

const nums = [2, 7, 5, 34, 1, 65];
function compareNumbers(a, b) {
    return a - b;
}
console.log(nums.sort(compareNumbers));


//zad 8


const arr1 = [1, 5, 8, 44, 56, 39];
const arr2 = [9, 0, 21, 78, 8, 4];
const newArr = [];

function addIndexes(arr1, arr2) {
    arr1.forEach((num1, i) => {
        newArr.push(num1 + arr2[i]);
    });
    return newArr;
}

console.log(addIndexes(arr1, arr2));

//zad 9

function excludeGivenElementFromArray(arr, element) {
    let el = arr.indexOf(element);
    arr.splice(el, 1);
    return arr;
}

console.log(excludeGivenElementFromArray(nums, nums[2]));
  
  //zad 10
  function reserveSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(reserveSing([1,2,3,4,6,-6]));
  
