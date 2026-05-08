export function generateLetters(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0 ; i <= 120 ; i++){
        const div = document.createElement('div')
        let random = Math.floor(Math.random()*letters.length)
        div.textContent = letters[random]
        div.style.fontSize = (11 +i) + 'px'
        if (i <= 40){
            div.style.fontWeight = 300
        }
        if (i <= 80){
            div.style.fontWeight = 400
        }else{
            div.style.fontWeight = 600 
        }
        document.body.append(div)
    }
}
