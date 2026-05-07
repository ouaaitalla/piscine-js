function countLeapYears(date){
    const year = new Date(date).getFullYear()
    let res = Math.floor(year / 4)
         - Math.floor(year / 100)
         + Math.floor(year / 400)-1
    if (res <0 ){
        return 0
    }
    return res
}
console.log(countLeapYears(new Date('0001-12-01')))