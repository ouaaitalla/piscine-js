function indexOf(arr, search, index = -1) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, search,index = arr.length) {
    for (let i = index - 1; i >= 0; i--) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}

function includes(arr, search, index = -1) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === search) {
            return true;
        }
    }
    return false;
}

