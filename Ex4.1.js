//$ Ex4.1 - Fibonacci -

function fibonacci(starting,n){
    let arr = [];
    arr[0]=starting;
    arr[1]=1;
    for (let i=2; i<=n ; i++){
        arr[i]=arr[i-1]+ arr[i-2];
    }
    return arr;
}

console.log(fibonacci(1,3));