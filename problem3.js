// palindrome

const isPalindrome = (word) =>{
    let back;

    for(let front = 0; front < Math.floor(word.length/2); front++){
        back = word.length - front - 1;

        if (word[front] !== word[back]){
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("madam"));