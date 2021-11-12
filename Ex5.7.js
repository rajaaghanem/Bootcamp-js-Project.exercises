//$ Ex5.7 - shortest words

function shortest(str){

    let length=0;
    let max=0;
    let flag =true;

    if (!str.includes(" ")) return str.length;

    for (let i=0; i<str.length; i++){
        if (str[i]!==" "){
            length++;
        } 
        else {
            if (length>max) max=length;
            length=0;
        }
    }
    return max;
}

//! test

console.log (shortest("hello there how are you?"));
console.log (shortest("hello"));
console.log (shortest("hello thereeee how are you?"));


