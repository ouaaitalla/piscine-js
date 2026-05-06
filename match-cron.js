export function matchCron (str, date) {
    let bool = false
    let newDate = new Date(date)
    let crons = str.split(" ")
    for (let i = 0 ; i <= crons.length; i++){
        if (crons[i] === "*"){
            continue
        }
        if (i === 0) {
            if (crons[0]== newDate.getMinutes()){
                bool = true
            }
        }
        if (i === 1){
            if (crons[1] == newDate.getHour() ){
                bool = true
            }
        }
        if (i === 2){
            if (crons[2]== newDate.getDate()){
                bool = true
            }
        }
        if (i=== 3 ){
            if (crons[3]== newDate.getFullYear()){
                bool = true
            }
        }
        if (i=== 4 ){
            if (crons[4]== newDate.getDay()){
                bool = true
            }
        }

    }
    return bool
}