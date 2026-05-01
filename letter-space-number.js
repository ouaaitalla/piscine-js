function letterSpaceNumber(str){
    const he = new RegExp("[a-zA-Z] [0-9](?![^0-9A-Za-z])", "g")
    let arr = str.match(he)
    return arr === null ? [] : arr
}

console.log(letterSpaceNumber('I like 7up.'))
