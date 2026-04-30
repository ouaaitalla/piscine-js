function flat(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(...flat(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res;
}


console.log(flat([1, 2, [3, 4, [5, 6]], 7])) // [1, 2, 3, 4, 5, 6, 7]