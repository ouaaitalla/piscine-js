
const millisecond = 7 * 24 * 60 * 60 * 1000

export function firstDayWeek (num , str){
    if (num < 1 || num > 53) {
        return "Invalid week number"
    }
    let year = Number(str)
    let date = new Date(0)
    date.setFullYear(year, 0, 1 )
    let hook = new Date(date.getTime() + ((num -1) * millisecond))
    let day = hook.getDay()
    let counter = 0
    while (day !== 1 && counter < 6) {
        if (day === 0) {
            day -=6
            counter += 6
            break

        }
        day -= 1
        counter += 1
   
    }

    let daten = hook.setDate(hook.getDate() - counter)

    let batch = new Date(daten)
    console.log(batch)
    if (batch.getFullYear() !== year) {
        batch = new Date(year, 0, 1)
        let res = batch.toISOString().split("T")[0]
        let result = res.split("-").reverse().join("-")
       return result
    }
    let res = batch.toISOString().split("T")[0]
    let result = res.split("-").reverse().join("-")
    return result
    
}
    console.log(firstDayWeek(1, "1000"))
    
