function multiply (a, b) {
    let result = 0
    let i = 0
    let sign = 1
    if (a < 0) {
        a = -a
        sign = -sign
    }
    if (b < 0) {
        b = -b
        sign = -sign
    }
    while (i < b) {
        result += a
        i++
    }
    return sign * result
}

function divide (a, b) {
    let result = 0
    let modul = 0
    let sign = 1
    if (a < 0) {
        a = -a
        sign = -sign
    }
    if (b < 0) {
        b = -b
        sign = -sign
    }
    while (a >= b) {
        a -= b
        result++
    }
    modul = a
    return  sign * result
}

function modulo (a, b) {
    let dived = 0
    let modul = 0
    let sign = 1
    if (a < 0) {
        a = -a
        sign = -sign
    }
    if (b < 0) {
        b = -b
        sign = -sign
    }
    while (a >= b) {
        a -= b
        dived++
    }
    modul = a
    return  sign * modul
}