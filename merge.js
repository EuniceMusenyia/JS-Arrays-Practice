function divideArr(numbers) {
    if (numbers.length<=1) {
        return numbers
        
    }
    let middle = Math.floor(numbers.length/2);
    let left = (0, middle);
    let right = (middle);
return sortedArr(divideArr(left), divideArr(right));
    
}

function sortedArr(left, right) {
    emtyArr = [0]
    while (left.length && right.length){
        if (left [0]<right[0]){
            emtyArr.push(left.shift())
        }
        else{
            emtyArr.push(right.shift())
        }
    }
    return[...emptyArr,...left,...right]
}

let numbers= [7, 3, 8, 4,5, 10,1]
console.log(divideArr(numbers));