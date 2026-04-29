function split (str, sep) {
    let res = []
    let word = ''
    let x = sep.length
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i  ,i + x) === sep) {
            res.push(word)
            word = ''
            i += x - 1
        } else {
            word += str[i]
        }
    }
    res.push(word)
    return res
}

function join (arr, sep) {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i < arr.length - 1) {
            result += sep
        }
    }
    return result
}

console.log(split('ggg - ddd - b',' - '))
console.log(join(['hello', 'world'], ' '))