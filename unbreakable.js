function split (str, sep) {
    res = []
    let word = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sep) {
            res.push(word)
            word = ''
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