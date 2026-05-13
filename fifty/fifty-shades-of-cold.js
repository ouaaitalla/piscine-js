import { colors } from './fifty-shades-of-cold.data.js'

export function generateClasses() {
    const style = document.createElement('style')
    let css = ''
    colors.forEach(color => {
        css += `
            .${color} {
                background: ${color};
            }
        `
    })

    style.textContent = css
    document.head.append(style)
}

export function generateColdShades() {
    colors.forEach(function(color){
    const reg = new RegExp ("(aqua|blue|turquoise|green|cyan|navy|purple)")
        if (reg.test(color)){
            const div = document.createElement('div')
            div.classList.add(color)
            div.textContent = color
            document.body.append(div)
        }
    
    })
    
}

export function choseShade(shade) {
    const divs = document.querySelectorAll('div')
    divs.forEach(div => {
        div.className = shade
    })
}
