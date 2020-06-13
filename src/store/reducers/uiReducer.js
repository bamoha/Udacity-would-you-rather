import { UI_LOADER } from "../types";
import { initialState } from "../initialStore";

const uiReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case UI_LOADER:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}

export default uiReducers;