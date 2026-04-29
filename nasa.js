function nasa (N) {
    let str = '';
    for (let i = 1; i <= N; i++) {
        
        if (i % 5 === 0 && i % 3 === 0) {
            str += 'NASA';
            str += ' ';
            i++;
        }
        if (i % 3 === 0) {
            str += 'Na';
            str += ' ';
            i++;
        }
        if (i % 5 === 0) {
            str += 'Sa';
            str += ' ';
            i++;
        }
        str+= String(i);
        str += ' ';
    }
    return str;
}


console.log(nasa(15))