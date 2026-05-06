export function countLeapYears(date){
    const year = new Date(date).getFullYear()

    return Math.floor(year / 4)
         - Math.floor(year / 100)
         + Math.floor(year / 400)
}