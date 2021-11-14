//$ Ex5.8 - shortest words version 2

function longest(str){

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

console.log (longest("hello there how are you?"));
console.log (longest("hello"));
console.log (longest("hello thereeee how are you?"));


