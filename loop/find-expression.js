// const add4 = '+4'
// const mul2 = '*2'

function findExpression (number) {
    if (number <= 0) {return undefined;}
    if (number%2 != 0) {return undefined;}
    let result = "1";
    let current = 1;
    if (number === 1) {return result;}
    while (current < number) {
        if ((number-current) %4 === 0) {
            result += " "+add4;
            current += 4;
        }else {
            result += " "+mul2;
            current *= 2;
        }
    }
    return result;
}


