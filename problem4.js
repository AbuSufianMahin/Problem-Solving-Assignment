const findMaxNumber = (numArray) => {
    let maxNumber = numArray[0];

    for(let i = 1; i < numArray.length; i ++){
        if (numArray[i] > maxNumber){
            maxNumber = numArray[i]
        } 
    }
    
    return maxNumber;
}


const maxNumber = findMaxNumber([5, 1, 9, 3]);

console.log(maxNumber);