// sort an array alphabetically
const names = ["leila", "Mercy", "Ann","Mary"]
console.log(names.sort());

// reverse the elements/ sort arrays in descending order 
console.log(names.reverse());

const nems = [2, 7, 3, 90, 8, 6,20]
console.log (nems.sort(function(a,b) {return a -b}))

function divideNums(nums) {
    if(nums.length<=1){
        return nums
    }
    let middle = Math.floor(nums.length/2);
    let left = nums.slice(0, middle);
    let right = nums.slice(middle);
    return sortedNums(divideNums(left),divideNums(right));
    
}
function sortedNums(left, right){
    let emptyNumsArray = [];
    while(left.length && right.length){
        if (left[0]<right[0]){
            emptyNumsArray.push(left.shift())
        }
        else{
            emptyNumsArray.push(right.shift())
        }
    }
    return[...emptyNumsArray,...left,...right]
}
let nums = [2, 90, 50, 6, 1, 8, 20]
console.log(divideNums(nums))
