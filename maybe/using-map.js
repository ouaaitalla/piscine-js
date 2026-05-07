
function citiesOnly(arr){
    return arr.map(obj=>obj.city)
}
const ToUpp=(str)=>{
         return  str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function upperCasingStates(arr) {

return arr.map((w)=>{
    return w.split(" ").map((str)=>ToUpp(str)).join(" ")
})
    // return arr.map(function(str){
    //     let sting = str.split(" ")
    //     return sting.map(function(str){
    //         let word = str[0].toUpperCase() + str.slice(1).toLowerCase()
    //         return word
    //     }).join(" ")
    // })

}

function fahrenheitToCelsius(arr){
    let celarr = arr.map(function(str){
        let daraja = str.slice(0,-2)
        return Math.floor((daraja -32)/(9/5))
    })
    let cel = celarr.map(function(cell){
         return String(cell)+"°C"
    })
    return cel
}

function trimTemp(arr){
    return arr.map(function(obj){
        obj.temperature =  obj.temperature.replace(/\s/g,"")
        return obj
    })
}

function tempForecasts(arr){
    arr = trimTemp(arr)
    
    let temp = arr.map(function(obj){return obj.temperature })
    let cel = fahrenheitToCelsius(temp)
    let state = arr.map(obj=>obj.state)
    let stat = upperCasingStates(state)
    let bim = citiesOnly(arr)
   
    return arr.map((obj, i) => {
   return cel[i] + "elsius in " + bim[i] + ", " + stat[i]
})
   
















}

console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
    {
    city: 'oujda',
    temperature: ' 89 °F',
    state: 'maroc',
    region: 'West',
  },
]))