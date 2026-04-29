function round (num) {
     let res = 0
    let sign = false
    if (num < 0) {
        num = -num
        sign = true
    }
    
    let x = num
    while (x >= 1) {
         x -= 1
         res += 1
    }
    let deff = num - res
    if (sign && deff >= 0.5) {
        res += 1
        return -res
    }
    if (deff >= 0.5) {
            return res += 1
    }
    return res

}

function ceil(num) {
    let res = 0
    let sign = false
    if (num < 0) {
        num = -num
        sign = true
    }
    let x = num
    while (x >= 1) {
         x -= 1
         res += 1
    }
    let deff = num - res
    if (sign && deff > 0) {
        return -res
    }
    if (deff > 0) {
            return res += 1
    }
    return res
}
function floor(num) {
     let res = 0
    let sign = false
    if (num < 0) {
        num = -num
        sign = true
    }
    
    let x = num
    while (x >= 1) {
         x -= 1
         res += 1
    }
    if (sign) {
        res += 1
        return -res
    }
    return res
}

function trunc(num) {
     let res = 0
    let sign = false
    if (num < 0) {
        num = -num
        sign = true
    }
    
    let x = num
    while (x >= 1) {
         x -= 1
         res += 1
    }
    if (sign) {
        return -res
    }
    return res
}

