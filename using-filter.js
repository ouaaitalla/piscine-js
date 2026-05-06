export function filterShortStateName(arr){
    return arr.filter(function(word){return word.length< 7})
}

const vowels = new RegExp("[AOUIEaeiuo]" , "g");
export function filterStartVowel(arr){
    return arr.filter(function(word){
        return  word[0].match(vowels)
    })
}

export function filter5Vowels(arr){
    return res = arr.map(function(word){
        char = word.split("")
        
        return char.filter(function(c){
            let count = c.match(vowels)
            return count.length >= 5
        })
    })

}

export function filter1DistinctVowel(arr){
    function vowel (str){
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
    return arr.filter(vowel)
}

export function multiFilter(arr){   
    return arr.capital.filter(function(word){return word.length>=8 }).arr.name.filter(function(word){return !filterStartVowel(word)}).arr.tag.filter(function(word){return word.match(vowels)}).arr.region.filter(function(word){return word!== "South"}) ;
}
console.log(filterStartVowel(["Alabama", "hhhh", "bat"]))
console.log(filter1DistinctVowel(["Alabama", "hhhh", "batilo"]))