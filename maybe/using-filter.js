function filterShortStateName(arr){
    return arr.filter(function(word){return word.length< 7})
}

const vowels = new RegExp("[AOUIEaeiuo]" , "gi");
function filterStartVowel(arr){
    return arr.filter(function(word){
        return  word[0].match(vowels)
    })
}
function filter5Vowels(arr) {
  return arr.filter(str => {
    let matches = str.match(vowels)
    return matches && matches.length >= 5
  })
}

function filter1DistinctVowel(arr){
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

function multiFilter(arr) {
  return arr.filter(obj => {
    const cond1 = obj.capital.length >= 8
    const cond2 = !/^[aeiou]/i.test(obj.name)
    const cond3 = /[aeiou]/i.test(obj.tag)
    const cond4 = obj.region !== "South"
    return cond1 && cond2 && cond3 && cond4
  })
}
