var arr1 = ["a","b","c"];
var arr2 = [1,2,3];
var ar3 = [];

var a = arr1.length;
var b = arr2.length;

if(a>b){
    for(var i=0;i<a;i++){
        ar3.push(arr1[i] , arr2[i]);
    }
}else{
    for(i=0;i<b;i++){
        ar3.push(arr1[i],arr2[i]);
    }
}
document.write(ar3);