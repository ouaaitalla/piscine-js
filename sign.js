function sign(number) {
    if (number > 0) {
        return 1
    }
    if (number < 0) {
        return -1
    }
    return 0
}
function sameSign(x,y) {
    if (sign(x) === sign(y)) {
        return true
    }
    return false
}