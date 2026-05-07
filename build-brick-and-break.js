export function build(num){
    let count = 1
    const inteval = setInterval(function(){
        if (count > num){
            clearInterval(inteval)
            return
        }
        const brick = document.createElement('div')
        brick.id =`brick-${count}`
        if (count % 3  === 2){
            brick.dataset.foundation = 'true'
        }
        document.body.append(brick)
        count++

    },1)
}

export function repair(...ids){
    for(let id of ids){
           const brick = document.getElementById(id)
        console.log(brick,id)
        if (!brick) return

        if (brick.dataset.foundation === 'true'){
       console.log("yes",id)
            brick.dataset.repaired = 'in progress'
        }else{
            brick.dataset.repaired = 'true'
        } 
    }
    // ids.forEach(function(id){
    
    // })
}

export function destroy(){
    const bricks = document.querySelectorAll('div')
    if (bricks.length===0) return
    bricks[bricks.length-1].remove()
}

