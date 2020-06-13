import { UI_LOADER } from "../types";

export const isLoading = payload => ({
    type: UI_LOADER,
    payload
});