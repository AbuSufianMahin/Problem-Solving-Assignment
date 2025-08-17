const removeDuplicate = (numArray) => {
    let result = [];

    for( let i = 0; i < numArray.length; i++){
        if (result.includes(numArray[i])){
            continue;
        }
        else{
            result.push(numArray[i]);
        }
    }

    return result;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 4, 5]));