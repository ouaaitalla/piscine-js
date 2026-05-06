export function isValid(date) {
    if (typeof date === "string") {return false
    }
    let data=new Date(date)
    if (data.toString() === "Invalid Date") {
        return false
    }
    return true
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
console.log(new Date('invalid').toString())
