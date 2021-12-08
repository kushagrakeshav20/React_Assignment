function printCapitalName(...name){
    console.log(name);
    let arr = [];
    for(i of name){
        arr[i] = i.toUpperCase();
    }
    console.log(arr);
}
let names=["kushagra","keshav","kundan","kumar"];
printCapitalName(...names);

