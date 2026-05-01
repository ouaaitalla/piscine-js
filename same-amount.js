function sameAmount(str , rexp1, rexp2){
    let arr1 = str.match(new RegExp(rexp1 ,"g"))
    if (arr1 === null) {arr1 = []}
    let arr2 = str.match(new RegExp(rexp2,"g"))
    console.log(arr1)
    
    if (arr2 === null) {arr2 = []}
    console.log(arr2)
    if (arr1.length === arr2.length){
        return true 
    }else{
        return false
    }
}
