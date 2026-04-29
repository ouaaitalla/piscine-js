function multiply (a, b) {
    let result = 0
    let i = 0
    let sign = false
    if (a < 0 || b < 0) {
        sign = true
    }
    while (i < b) {
        result += a
        i++
    }
    if (sign) {
        return -result
    }
    return result
}

function divide (a, b) {
    let result = 0
    let sign = false
    if (a < 0 || b < 0) {
        sign = true
    }
    while (a >= b) {
        a -= b
        result++
    }
    if (sign) {
        return -result
    }
    return  result
}

function modulo (a, b) {
    let dived = 0
    let modul = 0
    let sign = false
    if (a < 0 || b < 0) {
        sign = true
    }
    while (a >= b) {
        a -= b
        dived++
    }
    if (sign) {
        return -a
    }
    modul = a
    return  modul
}