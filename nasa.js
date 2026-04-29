function nasa (N) {
    let str = '';
    for (let i = 1; i <= N; i++) {
        
        if (i % 5 === 0 && i % 3 === 0) {
            str += 'NASA';
            str += ' ';
            continue;
        }
        if (i % 3 === 0) {
            str += 'Na';
            str += ' ';
            continue;
        }
        if (i % 5 === 0) {
            str += 'Sa';
            str += ' ';
            continue;
        }
        str+= String(i);
        str += ' ';
    }
    return str;
}

