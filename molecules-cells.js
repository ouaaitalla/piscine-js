function RNA (str){
    strand = {
        C: 'G',
        G: 'C',
        T: 'A',
        A: 'U'
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += strand[str[i]];
    }
    return result;
}

function DNA (str){
    strand = {
        G: 'C',
        C: 'G',
        U: 'A',
        A: 'T'
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += strand[str[i]];
    }
    return result;
}   


console.log(RNA('ACGTGGTCTTAA'))
console.log(DNA('UGCACCAGAAUU'))