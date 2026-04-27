const is = {
    num: function (x) {
        if (typeof x === 'number') {
            return true
        }
        return false
    },
    nan: function (x) {
        if (is.num(x) && x !== x) {
            return true
        }
        return false
    },
    str: function (x) {
        if (typeof x === 'string') {
            return true
        }
        return false
    },
    bool: function (x) {
        if (typeof x === 'boolean') {
            return true
        }
        return false
    },
    undef: function (x) {
        if (typeof x === 'undefined') {
            return true
        }
        return false
    },
    def: function (x) {
        if (is.undef(x)) {
            return false
        }
        return true
    },
    arr: function (x) {
        return (Array.isArray(x)) 
    },
    obj: function (x) {
        if (typeof x === 'object' && !is.arr(x) && !is.undef(x)) {
            return true
        }
        return false
    },
    fun: function (x) {
        if (typeof x === 'function') {
            return true
        }
        return false
    },
    truthy: function (x) {
        if (x) {
            return true
        }
        return false
    },
    falsy: function (x) {
        if (!x) {
            return true
        }
        return false
    }

}