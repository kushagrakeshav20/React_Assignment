function view(num){
    document.getElementById("result").value+=num;
}
function output(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}
function C(){
    document.getElementById("result").value= " ";
}