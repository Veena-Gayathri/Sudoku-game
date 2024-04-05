const Util ={
    print2DArray : function(arr){
        for(let i=0;i<arr.length;i++){
            console.log(...arr[i]);
        }
        console.log();
    }
}

export {Util};