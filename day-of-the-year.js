export function dayOfTheYear(date){
    
    const d = new Date(date)

    const start = new Date(d.getFullYear(), 0, 1)

    const diff = d - start

    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1

}