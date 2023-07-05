let javascriptClass = "welcome to javascript class"
let reversed= javascriptClass.split(" ").reverse().join(" ")
console.log(reversed);

// // write a function that prints all the odd numbers between 1  to 100
function oddNum(){
    for(let i = 1 ; i<100; i++){
        if (i%2 !==0) {
            console.log(i);
        }
    //   console.log(i);
    }
}
oddNum()
// write a function that accepts a string as a parameter and counts the number of vowels in the string.
    // let word = "Mara"
    // function countVowel(String) {
    //     let vowels = ['a','e','i','o','u']
    //     findVowel = word.find(vowels)
    //     console.log(findVowel);
        
    // }
    // function countVowel (){
    //     let vowel =['a','e','i','o','u']
        
    // }

        // let countVowel =function(str){
        //     return str.match(/[aeiou]/gi)
            
        // }
        // console.log(countVowel(str("Gisemba")));

            // function countVowel(words){
            //     let total=words.match(/[aeiou]/gi)
            //     console.log(total.length());

            // }
            // let names="Gisemba"
            // countVowel(name)

            
            // function countVowel(str) {
            //     let x = str.split("")
            //     let arr = ['a','e','i','o','u']
            //     let y = x.filter(i => i.includes(arr))
            //     return y
                
            // }
            // console.log(countVowel("Gisemba"));

function countVowel(word) {
    let count =0
    let vowels = ['a','e','i','o','u']
    for (v of vowels){    
    if (word.includes(v)) {
        count++
    }
    }
    return count
}
let words ="beautiful"
console.log(countVowel(words));


function counting(wordy) {
    let count =1
    let vowels = ['a','e','i','o','u']
    let x=wordy.split(" ")
    for (v of x){    
    if (v.includes(vowels)) {
        count++
    }
    }
    return count
}
let wordy ="beautiful"
console.log(countVowel(wordy));

// calculate the sum of digis in a Number
let value=3456
sum = value
.toString()
.split('')
.map(Number)
.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sum);

function add(num) {
    let sum = 0
    let numstring = num.toString();
    for (let i = 0; i < numstring.length; i++){
        sum += parseInt(numstring[i])
    }
    return sum
    
}
let num = 25
console.log(add(num));

// given an array of unsorted intergers return the target 5 if found or else none
function divide(arr) {
    if (arr.length<=1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return(sortedArr(divide(left), divide(right)))
    
}

function sortedArr(left, right){
    let emtyArr = []
    while (left.length && right.length) {
        if (right[0]<left[0]){
        emtyArr.push(left.shift())
    }
    else{
        emtyArr.push(right.shift())
    }
}
return[...emtyArr,...left,...right]
        
}

function search(arr, target) {
    let left = 0;
    let  right = arr.length-1;
    while (left<right) {
        let middle = Math.floor((left+right)/2)
        if (arr[middle]===target) {
            return arr[middle]
        }
        else if (nums[middle]<target) {
            left= middle+1
            
        }
        else
        right= middle-1

        
    }
    
}
    

