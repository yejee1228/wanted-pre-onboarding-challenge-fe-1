export interface IUser {
    email: string,
    password: string
}
export interface IInsertTodo {
    title: string,
    content: string,
}
export interface ITodo {
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string
}