//$ Ex2.5 - Summation

function Summation(num){
    let sum=0;
    for(let i=1; i<=num; i++)
    sum=sum+i;
    return sum;
}

//! test

console.log(Summation(4));