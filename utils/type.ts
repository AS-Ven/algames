export type TcompleteUser = {
    id: number,
    name: string,
    password: string,
    title: string,
    icon: number,
    matching_marks: number[]
}

export type Tuser = {
    id: number,
    name: string,
    title: string,
    matching_marks: number[]
}

export type Tranking = {
    id: number,
    user_id: number,
    name?: string,
    score: number
}