export function isValid(date) {
    return date instanceof Date && !isNaN(date.getTime())
}

export function isAfter(date1, date2) {
    return date1 > date2
}

export function isBefore(date1, date2) {
    return date2 > date1
}

export function isFuture(date) {
    return isValid(date) && date > new Date()
}

export function isPast(date) {
    return isValid(date) && date < new Date();
}

