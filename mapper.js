function map(arr, func){
    let res = []
    for(let i = 0; i < arr.length; i++){
        res.push(func(arr[i],i,arr))
    }
    return res 
}

function flat(arr , depth = 1) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            res.push(...flat(arr[i], depth - 1))
        } else {
            res.push(arr[i])
        }
    }
    return res;
}

function flatMap(arr , func){
    let pre = map(arr, func)
    return flat(pre) 
}


console.log(flatMap([1, 2, 3], n => [n, n]))