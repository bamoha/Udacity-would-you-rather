import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import rootReducer from './reducers/index';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    const finalCreateStore =
        process.env.NODE_ENV === "development"
            ? applyMiddleware(thunk, logger)(createStore)
            : applyMiddleware(thunk)(createStore);
    const store = finalCreateStore(persistedReducer);
    let persistor = persistStore(store)

    return { store, persistor };
};

export default configureStore;