export function filterShortStateName(arr){
    return arr.filter(function(word){return word.length< 7})
}

const vowels = new RegExp("[AOUIEaeiuo]" , "g");
export function filterStartVowel(arr){
    return arr.filter(function(word){
        return  word.match(vowels)
    })
}

export function filter1DistinctVowel(arr){
    function vowels (str){
        str = str.toLowerCase()
        let set = new Set
        for (let l of str){
            if (l === "a" || l === "e" || l === "i" || l === "o" || l ==="u" || l === "A" || l === "E" || l === "I" || l === "O" || l === "U" ){
                set.add(l)
            }
        }
        if (set.size != 1){
            return false
        }
        return true
    }
    return arr.filter(vowels)
}

export function multiFilter(arr){   
    return arr.capital.filter(function(word){return word.length>=8 }).arr.name.filter(function(word){return !filterStartVowel(word[0])}).arr.tag.filter(function(word){return word.filterStartVowel()}).arr.region.filter(function(word){return word!== "South"}) ;
}
console.log(filterStartVowel(["Alabama", "hhhh", "bat"]))
console.log(filter1DistinctVowel(["Alabama", "hhhh", "batilo"]))