export interface Doctor{
    id: number,
    fullname: string,
    phone: string,
    specialization: string,
}

export const doctorList: Doctor[] = [
    {
        id: 0,
        fullname: 'Васильев Игорь Шпаненко',
        phone: '87758342149',
        specialization: 'Врачь общей практики',
    },
    {
        id: 1,
        fullname: 'Мыржакып Дулат Сулейменов',
        phone: '87022345674',
        specialization: 'Генеколог'
    }
]