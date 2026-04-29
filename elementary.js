function multiply (a, b) {
    let result = 0
    let i = 0
    let sign = false
    if (a < 0) {
        a = -a
        sign = true
    }
    if (b < 0) {
        sign = true
        b = -b
    }
    if (a < 0 || b < 0) {
        return 0
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
    let modul = 0
    let sign = false
    if (a < 0) {
        a = -a
        sign = true
    }
    if (b < 0) {
        b = -b
        sign = true
    }
    while (a >= b) {
        a -= b
        result++
    }
    modul = a
    return  sign ? -result : result
}

function modulo (a, b) {
    let dived = 0
    let modul = 0
    let sign = false
    if (a < 0) {
        a = -a
        sign = true
    }
    if (b < 0) {
        b = -b
        sign = true
    }
    while (a >= b) {
        a -= b
        dived++
    }
    modul = a
    return  sign ? -modul : modul
}