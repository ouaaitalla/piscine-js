function round (num) {
    let res = 0
    let sign = false

    if (num < 0) {
        num = -num
        sign = true
    }
    let x = num
    if (x >= 10000000){
        while (x >= 10000000) {
         x -= 10000000
         res += 10000000
        }
    }
    if (x >= 1000){
        while (x >= 1000) {
         x -= 1000
         res += 1000
        }
    }
    while (x >= 1) {
        x -= 1
        res += 1
    }
    let deff = num - res
    if (sign && deff >= 0.5) {
        res += 1
        return -res
    }
    if (sign) {
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
    if (x >= 10000000){
        while (x >= 10000000) {
         x -= 10000000
         res += 10000000
        }
    }
    if (x >= 1000){
        while (x >= 1000) {
         x -= 1000
         res += 1000
        }
    }
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
    if (x >= 10000000){
        while (x >= 10000000) {
         x -= 10000000
         res += 10000000
        }
    }
    if (x >= 1000){
        while (x >= 1000) {
         x -= 1000
         res += 1000
        }
    }
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
    if (x >= 10000000){
        while (x >= 10000000) {
         x -= 10000000
         res += 10000000
        }
    }
    if (x >= 1000){
        while (x >= 1000) {
         x -= 1000
         res += 1000
        }
    }
    while (x >= 1) {
         x -= 1
         res += 1
    }
    if (sign) {
        return -res
    }
    return res
}

console.log(round(1547465189548745648.5))
console.log(ceil(1.5))
console.log(floor(1.5))
console.log(trunc(1.5))