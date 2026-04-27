function arrToSet(arr) {
    return new Set(arr)
}
function arrToStr(arr) {
    return arr.join('')
}
function setToArr(set) {
    return Array.from(set)
}
function setToStr(set) {
    return Array.from(set).join('')
}
function strToArr(str) {
    return str.split('')
}
function strToSet(str) {
    return new Set(str.split(''))
}
function mapToObj(map) {
    return Object.fromEntries(map)
}
function objToArr(obj) {
    return Object.values(obj)
}
function objToMap(obj) {
    return new Map(Object.entries(obj))
}
function arrToObj(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i]
    }

    return obj
}
function strToObj(str) {
    return Object.fromEntries(str.split('').map((char, index) => [index, char]))
}

function superTypeOf(value) {
    if (value === null) {
        return 'null'
    }
    if (Array.isArray(value)) {
        return 'Array'
    }
    
    if (value instanceof Map) {
        return 'Map'
    }
    if (value instanceof Set) {
        return 'Set'
    }
    if (typeof value === "object") return "Object"
    if (typeof value === "string") return "String"
    if (typeof value === "number") return "Number"
    if (typeof value === "function") return "Function"
    if (typeof value === "boolean") return "Boolean"
    let type = typeof value
    return type 
}
