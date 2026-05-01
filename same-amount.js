function sameAmount(str , rexp1, rexp2){
    let arr1 = str.match(rexp1)
    if (arr1 === null) {arr1 = []}
    let arr2 = str.match(rexp2)
    if (arr1 === null) {arr1 = []}
    if (arr1.length === arr2.length){
        return true 
    }else{
        return false
    }
}