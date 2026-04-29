function slice (str, start, end= str.length) {

    if (start < 0) {
        start = str.length + start
    }
    if (end < 0) {
        end = str.length + end
    }
    if (start >= end) {
        return ''
    }

    if (Array.isArray(str)) {
        let result = []
        for (let i = start; i < end && i < str.length; i++) {
            result.push(str[i])
        }
        return result
    }
 
    let result = ''
    for (let i = start; i < end && i < str.length; i++) {
        result += str[i]
    }
    return result
}


