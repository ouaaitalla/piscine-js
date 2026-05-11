function invert(obj){
    let res = {}
    for (let key in obj ){
        res[obj[key]] = key
    }
    return res
}