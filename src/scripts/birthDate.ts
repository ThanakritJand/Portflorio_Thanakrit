import type { date } from "../type"

export default function calculateAge(birthDate: Date): date {
    const today = new Date()
    let year = today.getFullYear() - birthDate.getFullYear()
    let month = today.getMonth() - birthDate.getMonth()
    let day = today.getDate() - birthDate.getDate()

    if(day < 0) {
        month--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        day += prevMonth.getDate()
    }

    if(month < 0) {
        year--;
        month += 12;
    }

    return { year, month, day }
}