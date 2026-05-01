const vowels = new RegExp("[AOUIEaeiuo]" , "g");

function vowelDots(str){

    return str.replace(vowels,'$&.');
} 

