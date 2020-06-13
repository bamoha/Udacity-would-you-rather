import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
import pageReducers from "./pageReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    page: pageReducers
});

export default rootReducer