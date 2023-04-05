const fruits = ["mango", "Apples", "Pears"];
// converting an array to a string using commas
console.log(fruits.toString());

// converting array to a string using any other separator
console.log(fruits.join("*"));

// remove the last element from an array; it returns the element that has been popped out
console.log(fruits.pop());

// add an elemnt at the end an array; it returns the length of the new array
console.log(fruits. push("Water melon"));

// remove the first element in an array and returns the shifted value 
// and  all the other elements to a lower index
console.log(fruits.shift());

// add a new element to the beginning of an array and unshift all other elements, 
// returns the length of the new array
console.log(fruits.unshift("Grapes", "Oranges"));

// finding the index of an element in an array
console.log(fruits[2]);

// length of an array
console.log(fruits.length);

// concatination/ merging 2 or more  arrays
const fruits2 = ["Tree tomato", "Lemon"]
const fruits3 = ["passion","Pears"]
console.log(fruits.concat(fruits2));
console.log(fruits.concat(fruits2, fruits3));

// slice a piece of an array to a new array
console.log(fruits.slice(1));
const names = ["leila", "Mercy", "Ann","Mary"]
console.log(names.slice(1));
console.log(names.slice(0,3));