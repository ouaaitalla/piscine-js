function longWords(arr){
    return arr.every(function(ele){
        return ele.length >= 5
    })
}

function oneLongWord(arr){
    return arr.some(function(ele){
        return typeof ele === 'string' && ele.length >= 10
    })
}

function noLongWords(arr){
    return arr.some(function(elem){
        return !(typeof ele === 'string' && ele.length >= 7)
    })
}