function pyramid (str , num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += ' '.repeat(num - i) + str.repeat(2 * i - 1);
        if (i < num) {
            result += '\n';
        }
    }
    return result;
}

console.log(pyramid('{}', 12));