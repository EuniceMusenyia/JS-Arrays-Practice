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



function divideArr(numbers) {
    if (numbers.length<=1) {
        return numbers
        
    }
    let middle = Math.floor(numbers.length/2);
    let left = numbers.slice(0, middle);
    let right = numbers.slice(middle);
return sortedArr(divideArr(left), divideArr(right));
    
}

function sortedArr(left, right) {
    emtyArr = []
    while (left.length && right.length){
        if (left [0]<right[0]){
            emtyArr.push(left.shift())
        }
        else{
            emtyArr.push(right.shift())
        }
    }
    return[...emtyArr,...left,...right]
}

let numbers= [7, 3, 8, 4,5, 10,1]
console.log(divideArr(numbers));