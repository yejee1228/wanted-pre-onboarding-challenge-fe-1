import { IInsertTodo } from 'lib/types';
import clientApi from './clientApi';
import { getToken } from 'lib/util/token';

const token = getToken()
const config = {
    headers: {
        Authorization: token === null ? '' : token,
    },
}

export const getTodos = async (token: string) => {
    if (token !== "") {
        const config = {
            headers: {
                Authorization: token,
            },
        }
        const { data } = await clientApi.get(`/todos`, config);
        return data;
    } else {
        getTodos(token)
    }
};

export const getTodoById = async (id: string) => {
    const { data } = await clientApi.get(`/todos/${id}`, config);
    return data;
};

export const createTodo = async (todo: IInsertTodo) => {
    const { data } = await clientApi.post(`/todos`, todo, config);
    return data;
};
export const updateTodo = async (id: string, todo: IInsertTodo) => {
    const { data } = await clientApi.put(`/todos/${id}`, todo, config);
    return data;
};
export const deleteTodo = async (id: string) => {
    const { data } = await clientApi.delete(`/todos/${id}`, config);
    return data;
};

