
export interface HourSchedule{
    hour: number,
    patient: string
}

export interface DateSchedule{
    id: number,
    doctorID: number,
    date: string,
    hours: HourSchedule[]
}

export const dScheduleMock: DateSchedule[] = [
    {id: 0, doctorID: 0, date: '2024-12-18', hours:[{hour:8, patient: 'Култыкшаш'}]}
]

export function GetSchedule(date: string): DateSchedule{
    return dScheduleMock.filter(item=> item.date == date)[0]
}