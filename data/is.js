
    is.num= function (x) {
        if (typeof x === 'number') {
            return true
        }
        return false
    }
    is.nan= function (x) {
        if (is.num(x) && x !== x) {
            return true
        }
        return false
    }
    is.str= function (x) {
        if (typeof x === 'string') {
            return true
        }
        return false
    }
    is.bool= function (x) {
        if (typeof x === 'boolean') {
            return true
        }
        return false
    },
    is.undef= function (x) {
        if (typeof x === 'undefined') {
            return true
        }
        return false
    }
    is.def= function (x) {
        if (is.undef(x)) {
            return false
        }
        return true
    }
    is.arr= function (x) {
        return (Array.isArray(x)) 
    }
    is.obj= function (x) {
        if (typeof x === 'object' && !is.arr(x) && !is.undef(x)&&  x !== null) {
            return true
        }
        return false
    }
    is.fun= function (x) {
        if (typeof x === 'function') {
            return true
        }
        return false
    }
    is.truthy= function (x) {
        if (x) {
            return true
        }
        return false
    }
    is.falsy= function (x) {
        if (!x) {
            return true
        }
        return false
    }

