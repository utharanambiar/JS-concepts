let arr = [1,2,[3,4, [5,6]]]

console.log(arr.flat())


Array.prototype.myFlat = function (depth = 1){
    let flattened = []
    
    function flatten (arr, currDepth) {
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i]) && currDepth < depth){
                flatten(arr[i], currDepth + 1)
            } else {
                flattened.push(arr[i])
            }
        }
    }
    
    flatten(this,0)
    return flattened
}

console.log(arr.myFlat(2))