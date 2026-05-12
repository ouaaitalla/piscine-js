function reverse(str) {        
    if (Array.isArray(str)) {
      let reverse = [];
        for (let i = str.length - 1; i >= 0; i--) {
        reverse.push(str[i]);
    }

        return reverse;
    }
    if (typeof str === 'string') {
        let reverse = '';
        for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];  
    }        
        return reverse; 
    }
}

