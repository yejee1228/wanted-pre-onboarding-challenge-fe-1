import { AxiosInstance } from "axios"

export interface ITodo {
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string
}
export interface IConfig extends AxiosInstance {
    headers: {
        Authorization: string
    }
}