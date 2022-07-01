
// задание 1


let result = +prompt('Enter the number');

if (typeof result === "number" && !Number.isNaN(result)){
  if (result % 2 === 0){
    console.log('even');
  
} else{
    console.log('odd');}

 } else {
    console.log('ups')
}

      // задание2

      let x= true;

      if(typeof x === "number"){
        console.log (x + " is number")
       
      } else if(typeof x === "boolean"){
        console.log(x + " is a boolean type")
      }else if(typeof x === "string"){
        console.log(x + " is a string type")
      }else{
        console.log(x + " is not identified")
      }

      // задание 3
      let str = "Hello";
      let reverse = str.split("").reverse().join("");
      console.log(reverse)


      // задание 4
      let x = Math.random()*101;

      console.log(Math.ceil(x))

      // задание 5
      let arr = ['I', 'struggle', 'with','JS'];
      console.log(arr.length);
      arr.forEach(function(item,index,array){
      console.log(item);
      });
      // или
// arr.forEach(alert);

// задание 6
let arr = [null, 3, 0, 'ups'];
let result = true;
for (let i=0; i < arr.length; i++){
  if(i>0){
    if(arr[i]!=arr[i-1]) {
      result = false
    }
  }
}
console.log(result);


// задание 7
let arr = [null, 2, 4, 3, 0,'ups'];
let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++){
  if(typeof(arr[i]) === 'number'){
    if(arr[i] === 0){
      console.log('it is zero');
      zero+=1
      
    }
    else if(arr[i]%2 == 0){
      console.log('even');
      even+=1
    }
    else{
      console.log('odd');
      odd+=1 
    }
  }
    else{
      console.log(`not a number: ${arr[i]}`)
    }
  }
   

console.log(`${zero}- нулей`)
console.log(`${even}- вот столько чётных`)
console.log(`${odd}- вот столько нечётных`)
   

// задание 8
let Familymap = new Map();
Familymap.set(1, 'мама');
Familymap.set(2, 'папа');
Familymap.set(3, 'сын');
Familymap.set(4, 'доча');
 for(let name of Familymap.keys()){
   console.log(`${name} - ${Familymap.get(name)}`);
 }

