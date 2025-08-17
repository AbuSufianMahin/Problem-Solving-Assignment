const countVowels = (word) => {
    const vowels = "aAeEiIoOuU";

    let count = 0;

    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }

    console.log(count);
}

countVowels("programming")
