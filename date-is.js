export function isValid(Date) {
    return new Date(Date) != "Invalid Date"
}

export function isAfter(Date1, Date2) {
    return new Date(Date1) > new Date(Date2);
}

export function isBefore(Date1, Date2) {
    return new Date(Date1) < new Date(Date2);
}

export function isFuture(Date1) {
    return new Date(Date1) > new Date();
}

export function isPast(Date1) {
    return new Date(Date1) < new Date();
}

