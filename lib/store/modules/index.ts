import { $CombinedState, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user, { UserMainState } from './user.module';
import todo, { TodoMainState } from './todo.module';

const reducer = combineReducers({
    user,
    todo
});

const persistConfig = {
    key: "root",
    storage,
}

export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    user: UserMainState;
} & {
    todo: TodoMainState;
}

export default persistReducer(persistConfig, reducer);