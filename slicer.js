function slice (str, start, end= str.length-1) {
    let sign = false

    if (start < 0) {
        start = str.length + start
    }
    if (end < 0) {
        end = str.length + end
    }

    if (start >= end) {
        return ''
    }
    let result = ''
    for (let i = start; i < end && i < str.length; i++) {
        result += str[i]
    }
    return result
}
