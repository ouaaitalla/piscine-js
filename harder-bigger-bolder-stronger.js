export function generateLetters(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 11 ; i <= 130 ; i++){
        const div = document.createElement('div')
        let random = Math.floor(Math.random()*letters.length)
        div.textContent = letters[random]
        div.style.fontSize = i + 'px'
        if (i <= 50){
            div.style.fontWeight = 300 + 'px'
        }
        if (i <= 90){
            div.style.fontWeight = 400 + 'px'
        }else{
            div.style.fontWeight = 600 + 'px'
        }
        document.body.append(div)
    }
}
