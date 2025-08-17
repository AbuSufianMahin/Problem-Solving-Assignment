const findFactorial = (number) => {
    let result = 1;

    for(let i = number; i >= 1; i --){
        result = result * i;
    }

    return result;
}

console.log(findFactorial(5));