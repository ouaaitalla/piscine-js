function vowelDots(str){
    const vowels = new RegExp("[aeiuo]" , "g");
    return str.replace(vowels,'$&.');
} 

console.log(vowelDots("hey a berra ss"))