function sumSquareDifference(n){

    let numbers=[];
    for(let i=1;i<n+1;i++){
        numbers.push(i);
    }

    function squareSum(arr){
        let res=0;
        arr.forEach(e => {
            res+=e;
        });
        return res**2;
    }

    function sumSquare(arr){
        let res=0;
        arr.forEach(e => {
            res+=e**2;
        });
        return res;
    }

    return squareSum(numbers)-sumSquare(numbers);
}
console.log(sumSquareDifference(10));