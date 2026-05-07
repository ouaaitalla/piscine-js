function every(arr, func){
    for (let ele of arr){
        if (!func(ele)){
            return false
        }
    }
    return true
}

function some(arr,func){
    for (let ele of arr){
        if (func(ele)){
            return true
        }
    }
    return false
}

function none(arr , func){
    for (let ele of arr){
        if (func(ele)){
            return false
        }
    }
    return true
}
