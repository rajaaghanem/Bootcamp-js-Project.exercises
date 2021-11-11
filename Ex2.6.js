//$ Ex2.6 - Years and Centuries

function century(year){

    if(year%100===0)
    return year/100;
    else return (Math.floor(year/100))+1;
}

//! test

console.log(century(1602));
console.log(century(2000));

