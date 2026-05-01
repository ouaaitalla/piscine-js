function letterSpaceNumber(str){
    const he = new RegExp("[a-zA-Z] [0-9](?![0-9A-Za-z])", "g")
    let arr = str.match(he)
    return arr === null ? [] : arr
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
