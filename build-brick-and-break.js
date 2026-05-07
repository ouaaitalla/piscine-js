export function build(num){
    let count = 1
    const inteval = setInterval(function(){
        if (count > num){
            clearInterval(inteval)
            return
        }
        const brick = document.createElement('div')
        brick.id =`btick-${count}`
        if (count % 3  === 2){
            brick.dataset.foundation = 'true'
        }
        document.body.appendChild(brick)
        count++

    },100)
}

export function repair(ids){
    ids.forEach(function(id){
        const brick = document.getElementById(id)
        if (!brick) return
        if (brick.dataset.foundation === 'true'){
            brick.dataset.repaired = 'in progress'
        }else{
            brick.dataset.repaired = 'true'
        }
    })
}

export function destroy(){
    const bricks = document.querySelectorAll('div')
    if (bricks.length===0) return
    bricks[bricks.length-1].remove()
}

