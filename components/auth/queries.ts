import * as API from 'lib/api/auth';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUser } from 'lib/types';
import { AxiosError } from 'axios';

const queryKey = {
    user: ['user'] as const,
}

export const useSignup = () => {
    const queryClient = useQueryClient();
    return useMutation((user: IUser) => API.signUp(user), {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.user);
        },
        useErrorBoundary: (error: AxiosError) =>
            error instanceof AxiosError && error.response?.status !== undefined,
    });
}
export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation((user: IUser) => API.login(user), {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.user);
        },
        useErrorBoundary: (error: AxiosError) =>
            error instanceof AxiosError && error.response?.status !== undefined,
    });
}