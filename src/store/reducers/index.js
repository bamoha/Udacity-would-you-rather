import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    ui: uiReducer
});

export default rootReducer