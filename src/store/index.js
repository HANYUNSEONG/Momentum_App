import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['name']
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(enhancedReducer);
export const persistor = persistStore(store);