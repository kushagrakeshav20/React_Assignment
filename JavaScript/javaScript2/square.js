

const square = num => num*num;
function map(arr,f){
    var ele=[];
    for(var i=0;i<arr.length;i++){
        ele[i] = f(arr[i]);
    }
    return ele;
}
console.log(map([1,2,3,4,5],square));


function map(arr,f){
    var ele=[];
    for(var i=0;i<arr.length;i++){
        ele[i] = f(arr[i]);
    }
    return ele;
}
console.log(map([1,4,9,16,25],Math.sqrt));
