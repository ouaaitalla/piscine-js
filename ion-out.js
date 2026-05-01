function ionOut(str){
    let exp = /\w*tion\w*/g
    let exp1 = new RegExp("tion","g")
    let words = str.match(exp)
    console.log(words)
    return words.map(e =>e.replace(exp1,"t"))
}

  console.log(ionOut("function sa3id nion propaganda passion"))