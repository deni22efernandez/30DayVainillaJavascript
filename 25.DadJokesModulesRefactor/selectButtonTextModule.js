function selectButtonText(array, not){  
    console.log(not) 
    const text = array[Math.floor(Math.random() * array.length)];
    if(text == not){
        return selectButtonText(array, not);
    }
    return text;
}
export default selectButtonText;