import { IUser } from 'lib/types';
import clientApi from './clientApi';

export const signUp = async (user: IUser) => {
    const { data } = await clientApi.post(`/users/create`, user);
    return data;
};

export const login = async (user: IUser) => {
    const { data } = await clientApi.post(`/users/login`, user);
    return data;
};

