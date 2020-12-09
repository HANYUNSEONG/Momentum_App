import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk  from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['name', 'bookmark']
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(enhancedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);