const capitalizeWords = (sentence) => {
    let shouldCapitalize = true;

    let result = "";

    for(let i = 0; i<sentence.length; i++){
        if(sentence[i] === " "){
            shouldCapitalize = true;
            // result += " ";
            result += sentence[i];
        }
        else{
            if(shouldCapitalize){
                result += sentence[i].toUpperCase();
            }
            else{
                result += sentence[i];
            }
            shouldCapitalize = false;
        }
    }

    return result;
}


console.log(capitalizeWords("abu sufian mahin"))