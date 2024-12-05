export interface PostModel{
    avatar: string,
    author: string,
    status: string,
    nickName: string,
    description: string,
    photo: string
}

export function defaultPost(): PostModel{
    return {
        avatar: '',
        author: '',
        status: '',
        nickName: '',
        description: '',
        photo: ''
    }
}