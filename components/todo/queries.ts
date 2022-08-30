import * as API from 'lib/api/todo';
import { useMutation, useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { IInsertTodo, ITodo } from 'lib/types';
import { AxiosError } from 'axios';

const queryKey = {
    all: ['todos'] as const,
    detail: ['todoDetail'] as const
}

export const useTodos = (token: string, options?: UseQueryOptions<{ data: ITodo[] }, AxiosError>) => {
    return useQuery<{ data: ITodo[] }, AxiosError>(queryKey.all, () => API.getTodos(token), options);
}
export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation((todo: IInsertTodo) => API.createTodo(todo), {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.all);
        },
        useErrorBoundary: (error: AxiosError) =>
            error instanceof AxiosError && error.response?.status !== undefined,
    });
}
export const useGetTodoById = (id: string, options?: UseQueryOptions<{ data: ITodo }, AxiosError>) => {
    return useQuery<{ data: ITodo }, AxiosError>(queryKey.detail, () => API.getTodoById(id), options)
}
export const useUpdateTodo = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation((todo: IInsertTodo) => API.updateTodo(id, todo), {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.all);
        },
        useErrorBoundary: (error: AxiosError) =>
            error instanceof AxiosError && error.response?.status !== undefined,
    });
}
export const useDeleteTodo = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation(() => API.deleteTodo(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.all);
        },
        useErrorBoundary: (error: AxiosError) =>
            error instanceof AxiosError && error.response?.status !== undefined,
    });
}