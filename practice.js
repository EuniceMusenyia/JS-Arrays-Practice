// square root of an array
const numbers = [3, 7, 4, 5, 9];
const newNums = numbers.map(Math.sqrt);
console.log(newNums);



const names = ["Eunice","Musenyia","Mutunga"];
console.log(names.toString());

console.log(names.join(" "));

console.log(names.unshift("Senyia"));

console.log(names.shift());

console.log(names.pop());

console.log(names.push("Nice"));

function fruitsArr(array) {
    let uppercaseArr = array.map(i => i.touppercase());
    console.log(uppercaseArr);
    
}
