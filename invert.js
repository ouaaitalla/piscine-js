function invert(obj){
    let res = {}
    for (let key of Object.keys(obj) ){
        res[obj[key]] = key
    }
    return res
}