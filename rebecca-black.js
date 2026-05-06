export function isFriday (date) {
    if (date.getDay() === 5) {
        return true
    }
    return false
} 
export function isWeekend (date) {
    if (date.getDay() === 0 || date.getDay() === 6) {
        return true
    }
    return false
}

export function isLeapYear (date) {
    const year = date.getFullYear()
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true
    }
    return false
}

export function isLastDayOfMonth (date) {
    const nextDay = new Date(date)
    nextDay.setDate(date.getDate() + 1)
    if (nextDay.getDate() === 1) {
        return true
    }
    return false
}