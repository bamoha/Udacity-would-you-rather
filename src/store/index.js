import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import rootReducer from './reducers/index';

const configureStore = () => {
    const finalCreateStore =
        process.env.NODE_ENV === "development"
            ? applyMiddleware(thunk, logger)(createStore)
            : applyMiddleware(thunk)(createStore);
    
    return finalCreateStore(rootReducer);
};

export default configureStore;