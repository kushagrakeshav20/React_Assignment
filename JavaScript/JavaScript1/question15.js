function bubble_sort(arr){
    var tamp = 0;
    for(var i=0; i<=arr.length - 1;i++){
        for(var j=0;j<=arr.length - 1 - i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

            }
        }
    }
    return arr;

}

console.log(bubble_sort([35, 10, 31, 11, 26]));