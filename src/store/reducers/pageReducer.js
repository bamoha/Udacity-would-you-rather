import { PAGE_LOADER } from "../types";
import { initialState } from "../initialStore";

const pageReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case PAGE_LOADER:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}

export default pageReducers;