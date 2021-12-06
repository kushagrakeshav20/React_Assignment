const arr = [];
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100);
}
max=-1;
min=1000;
sum=0;
even=0;
odd=0;

for(let i=0;i<100;i++){
    let temp = arr[i];
    if(temp>max){
        max=temp;
    }
    if(temp<min){
        min=temp;
    }
    sum+=temp;
    if(temp%2==0){
        even+=1;
    }
    if(temp%2==1){
        odd+=1;
    }

}
 console.log("max: " ,max);
 console.log("min: ",min);
 if(even>odd){
     console.log("even is greater");
 }
 if(odd>even){
     console.log("odd id greater");
 }
 if(even == odd){
     console.log("even is same as odd");
 }
 console.log("sum: ",sum)
 console.log("Avg",sum/100);