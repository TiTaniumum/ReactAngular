export interface Doctor{
    id: number,
    FullName: string,
    Phone: string,
    Specialization: string,
}

export const doctorList: Doctor[] = [
    {
        id: 0,
        FullName: 'Васильев Игорь Шпаненко',
        Phone: '87758342149',
        Specialization: 'Врачь общей практики',
    },
    {
        id: 1,
        FullName: 'Мыржакып Дулат Сулейменов',
        Phone: '87022345674',
        Specialization: 'Генеколог'
    }
]