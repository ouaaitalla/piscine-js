function get (src, path) {
    let keys = path.split('.');
    let res = src;
    for (let i = 0; i < keys.length; i++) {
        if (res === undefined) {
            return undefined;
        }
        res = res[keys[i]];
    }
    return res;
}

