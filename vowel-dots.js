const vowels = new RegExp("[aeiuo]" , "g");

function vowelDots(str){

    return str.replace(vowels,'$&.');
} 

