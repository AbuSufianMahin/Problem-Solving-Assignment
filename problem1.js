const reverse_word = (word) => {
    const last_index = word.length - 1;
    let reversed = "";

    for (let i = last_index; i >=0; i--){
        reversed += word[i];
    }
    console.log(reversed);
}

reverse_word("Hello");