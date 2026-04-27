const escapeStr = "\`, \\, /, \" \'."
const arr = [4, 2]
const obj = {
    str : "",
    num : 0,
    bool : false ,
    undef : undefined,
}
const nested ={
    arr : [4, undefined, 2],
    obj : {
        str : "hello",
        num : 1,
        bool : false ,
    }
}
Object.freeze(nested)
Object.freeze(obj)
Object.freeze(arr)
