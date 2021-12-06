
const arr = [1,2,3,4,5,6,7,];
const k=2;
function arrayRotation(nums , numberofshift){
    for(var i=0;i<numberofshift;i++){
        nums.unshift(nums.pop());
        console.log("Final output",arr,k);
    }
    return arr,k;
}
console.log("final output",arrayRotation(arr ,k));
