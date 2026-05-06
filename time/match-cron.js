export function matchCron (str, date) {
    let bool = false
    let newDate = new Date(date)
    let crons = str.split(" ")
    let count = 0
    for (let i = 0 ; i < crons.length; i++){
        if (crons[i] === "*"){
            count ++
            continue
        }
        if (i === 0) {
            if (crons[0]== newDate.getMinutes()){
                bool = true
            }
        }
        if (i === 1){
            if (crons[1] == newDate.getHours() ){
                bool = true
            }else{
                return false
            }
        }
        if (i === 2){
            if (crons[2]== newDate.getDate()){
                bool = true
            }else{
                return false
            }
        }
        if (i=== 3 ){
            if (crons[3]== newDate.getMonth()+1 ){
                bool = true
            }else{
                return false
            }
        }
        if (i=== 4 ){
            if (crons[4]== newDate.getDay()){
                bool = true
            }else{
                return false
            }
        }

    }
    if (count === 5){
        return true
    }
    return bool
}

console.log(matchCron('* * * * *', new Date('2021-02-01 00:00:00')))