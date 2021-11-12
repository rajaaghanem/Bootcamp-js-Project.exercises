//$ Ex5.6 - Mask

function maskify(str){
    let newStr = "";
    let lastFour = str.slice(str.length-4,str.length);
    if (str.length<=4) return str;

    for (let i=0; i<str.length-4; i++){
        newStr= newStr+"#";
    }
 return newStr+lastFour;
}


//! test

console.log(maskify("3i4i555jj"));
console.log(maskify("i4i5"));
console.log(maskify("1"));


