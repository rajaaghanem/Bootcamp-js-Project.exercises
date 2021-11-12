//$ Ex5.4 - To Weird Case

function toWeirdCase(str){
    let newStr ="";
    for( let i=0; i<str.length; i++){
        if (i%2===0) newStr=newStr+str[i].toUpperCase();
        else newStr= newStr=newStr+str[i].toLowerCase()
    }
    return newStr;
}

//!test

console.log(toWeirdCase("rajaa ghanem"));