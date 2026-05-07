function hasCity(country, arr){
    let st = new Set(arr)
    return function(city){
        for(let cit of st){
            if ( cit === city){
                return city +" is a city from "+country
            }
                
        }
        return city+ " is not a city from "+country
    }
}