import { people } from "./get-them-all.data.js"

export function getArchitects(){
    const all = document.querySelectorAll('a, span')

  const architects = []
  const nonArchitects = []

  all.forEach(function(el){
        if (el.tagName === 'A') {
            architects.push(el)
        } else {
                nonArchitects.push(el)
            }
    })

    return [architects, nonArchitects]
}

export function getClassical(){
    const [architects] = getArchitects()

    const classical = []
    const nonClassical = []

    architects.forEach(function(el){
    if (el.classList.contains('classical')) {
      classical.push(el)
    } else {
      nonClassical.push(el)
    }
  })

    return [classical, nonClassical]
}


export function getActive(){
    const [classical] = getClassical()

    const active = []
    const notActive = []

    classical.forEach(function(el){
    if (el.classList.contains('active')) {
      active.push(el)
    } else {
      notActive.push(el)
    }
  })

    return [active, notActive]
}

export function getBonannoPisano() {
    return [
        document.getElementById('BonannoPisano'),
        document.querySelectorAll('.classical.active:not(#BonannoPisano)')
    ]
}