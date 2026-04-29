function nasa (N) {
    let str = '';
    for (let i = 1; i <= N; i++) {
        
        if (i % 5 === 0 && i % 3 === 0) {
            str += 'NASA';
            i++;
        }
        if (i % 3 === 0) {
            str += 'Na';
            i++;
        }
        if (i % 5 === 0) {
            str += 'Sa';
            i++;
        }
        str+= String(i);
    }
    return str;
}


console.log(nasa(15))