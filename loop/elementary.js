function multiply(a, b) {
    let result = 0
    let i = 0

    let sign = (a < 0) !== (b < 0) 

    a = Math.abs(a)
    b = Math.abs(b)

    while (i < b) {
        result += a
        i++
    }

    return sign ? -result : result
}

function divide(a, b) {
    if (b === 0) {
        return Infinity
    }

    let result = 0

    let sign = (a < 0) !== (b < 0)

    a = Math.abs(a)
    b = Math.abs(b)

    while (a >= b) {
        a -= b
        result++
    }

    return sign ? -result : result
}

function modulo(a, b) {
    if (b === 0) {
        return Infinity
    }

    let sign = a < 0

    a = Math.abs(a)
    b = Math.abs(b)

    while (a >= b) {
        a -= b
    }

    return sign ? -a : a
}

