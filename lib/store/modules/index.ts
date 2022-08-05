import { $CombinedState, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user, { UserMainState } from './user.module';

const reducer = combineReducers({
    user,
});

const persistConfig = {
    key: "root",
    storage,
}

export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    user: UserMainState;
}

export default persistReducer(persistConfig, reducer);