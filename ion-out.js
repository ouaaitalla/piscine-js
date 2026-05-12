function ionOut(str){
    let exp = /\w*tion\w*/g
    let exp1 = new RegExp("tion","g")
    let words = str.match(exp)
    if (words === null){return []}
    return words.map(e =>e.replace(exp1,"t"))
}

