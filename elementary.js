function multiply (a, b) {
    let result = 0
    let i = 0
    while (i < b) {
        result += a
        i++
    }
    return result
}

function divide (a, b) {
    let result = 0
    let modul = 0
    while (a >= b) {
        a -= b
        result++
    }
    modul = a
    return  result
}

function modulo (a, b) {
    let dived = 0
    let modul = 0
    while (a >= b) {
        a -= b
        dived++
    }
    modul = a
    return  modul
}