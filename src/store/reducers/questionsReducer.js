import { GET_ALL_QUESTIONS, STORE_POLL_DETAILS } from "../types";
import { initialState } from "../initialStore";

const questionsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state,
                questions: payload
            }
        case STORE_POLL_DETAILS:
            return {
                ...state,
                pollDetails: payload
            }
        default:
            return state;
    }
}

export default questionsReducer;