
export function citiesOnly(arr){
    return arr.map(obj=>obj.city)
}

export function upperCasingStates(arr) {
    return arr.map(function(str){
        let sting = str.split(" ")
        return sting.map(function(str){
            let word = str[0].toUpperCase() + str.slice(1).toLowerCase()
            return word
        }).join(" ")
    })

}

export function fahrenheitToCelsius(arr){
    let celarr = arr.map(function(str){
        let daraja = str.slice(0,-2)
        return Math.floor((daraja -32)/(9/5))
    })
    let cel = celarr.map(function(cell){
         return String(cell)+"°C"
    })
    return cel
}

export function trimTemp(arr){
    return arr.map(function(obj){
        obj.temperature =  obj.temperature.replace(/\s/g,"")
        return obj
    })
}

export function tempForecasts(arr){
    arr = trimTemp(arr)
    let temp = arr.map(function(obj){return obj.temperature })
    let cel = fahrenheitToCelsius(temp)
    let state = arr.map(obj=>obj.state)
    return arr.map(function(ar){
     ar = String(cel)+"elsius in "+ citiesOnly(arr)+", "+state
     return ar
    })
   
}

