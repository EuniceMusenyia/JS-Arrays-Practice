function divideArr(numbers) {
    if (numbers.length<=1) {
        return numbers
        
    }
    let middle = Math.floor(numbers.length/2);
    let left = numbers.slice(0, middle);
    let right = numbers.slice(middle);
return sortedArr(divideArr(left), divideArr(right))
    
}

function sortedArr(left, right) {
    emtyArr = [];
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

function binary(nums, target) {
    left = 0;
    right = nums.length-1;
    while (left<=right) {
        let middle = Math.floor((left+ right)/2);
        if (nums[middle]===target) {
            return middle;
            
        }
        else if (nums[middle]<target) {
            left= middle+1
            
        }
        else
        right= middle-1

        
    }
    
}
let nums= [2, 3, 4, 5, 7,8, 9]
target=4
console.log(binary(nums, target));