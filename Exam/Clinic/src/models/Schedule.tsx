
export interface HourSchedule{
    schedule_time: number,
    patient_name: string
}

export interface DateSchedule{
    doctorID: number,
    date: string,
    hours: HourSchedule[]
}

export const dScheduleMock: DateSchedule[] = [
    {doctorID: 0, date: '2024-12-18', hours:[{schedule_time:8, patient_name: 'Култыкшаш'}]}
]

export function GetSchedule(date: string): DateSchedule{
    return dScheduleMock.filter(item=> item.date == date)[0]
}