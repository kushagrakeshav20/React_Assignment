const number = prompt("Enter the number");
let sum=0;
for(let i=1; i<=number;i++){
    if(i%3 === 0 || i%5 ===0){
    sum += i;
    }
   
}
console.log("The sum is",sum);