function indexOf(arr, search, index = -1) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, search,) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}

function includes(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return true;
        }
    }
    return false;
}

