function filter(arr, func){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if (func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res 
}

function reject(arr, func){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if (!func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res 
}

function partition(arr,func){
    let pass = filter(arr,func)
    let fail = reject(arr,func)
    return [pass,fail]
}
