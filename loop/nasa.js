function nasa (N) {
    let str = '';
    for (let i = 1; i <= N; i++) {
        
        if (i % 5 === 0 && i % 3 === 0) {
            str += 'NASA';
            if (i < N) {
            str += ' ';
            }
            continue;
        }
        if (i % 3 === 0) {
            str += 'NA';
            if (i < N) { 
            str += ' ';
            }
            continue;
        }
        if (i % 5 === 0) {
            str += 'SA';
            if (i < N) {
                str += ' ';
            }
            continue;
        }
        str+= String(i);
        str += ' ';
    }
    return str;
}

