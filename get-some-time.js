export function firstDayWeek (num , str){
    let year = Number(str)
    let date3tini = new Date(year, 0, 1)
    let firstDay = date3tini.getDay()
    let day = (num - firstDay + 7) % 7
    date3tini.setDate(date3tini.getDate() + day)
    return date3tini
}
 

console.log(firstDayWeek(1, "2024"))