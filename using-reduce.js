export function adder(arr, init){
    return arr.reduce(function(acc, num){
        return acc + num
    }, init)
}

export function sumOrMul(arr, init=0){
    return arr.reduce(function(acc , num){
        if (num %2=== 0){
            return acc *num
        }
        if (num%2 !==0){
            return acc + num
        }
    }, init)
}

function funcExec(arr, init){
    return arr.reduce(function(acc , func) {
    },init)
}


