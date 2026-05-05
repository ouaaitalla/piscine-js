function pyramid (str , num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += ' '.repeat((str.length * (2 * num - 1) - str.length * (2 * i - 1)) / 2) + str.repeat(2 * i - 1);
        if (i < num) {
            result += '\n';
        }
    }
    return result;
}

