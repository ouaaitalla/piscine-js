function addWeek(input){
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'secondMonday',
        'secondTuesday',
        'secondWednesday',
        'secondThursday',
        'secondFriday',
        'secondSaturday',
        'secondSunday'
    ]
    const date = "0001-01-01"
    const dStart = new Date(date)
    const dCurrent = new Date(input)
    const diffTime = dStart - dCurrent
    const day = (diffTime/1000/60/60/24)%14
    return days[Math.abs(day)]
}

function timeTravel(objDate){
    if (objDate.hour <0 || objDate.hour > 23 || objDate.minute < 0 || objDate.minute > 59 || objDate.second < 0 || objDate.second > 59){
        return "Time is not valid"
    }
    if (objDate.hour >= 0 && objDate.hour < 24){
        objDate.date.setHours(objDate.hour)
    }
    if (objDate.minute >= 0 && objDate.minute < 60){
        objDate.date.setMinutes(objDate.minute)
    }
    if (objDate.second >= 0 && objDate.second < 60){
        objDate.date.setSeconds(objDate.second)
    }
    return objDate.date
}



