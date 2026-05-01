function letterSpaceNumber(str){
    const he = new RegExp("[a-z A-Z] [0-9](?= )")
    return he.exec(str)
}
