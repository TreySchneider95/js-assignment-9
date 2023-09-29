function findNegitive(arr){
    for(let x=0;x<arr.length;x++){
        if(arr[x] < 0){
            arr[x] = "Negative"
        }
    }
    return arr
}

console.log(findNegitive([-1,2,6,-10,0]))


function reverseStr(str){
    return str.split("").reverse().join("")
}

console.log(reverseStr("String"))