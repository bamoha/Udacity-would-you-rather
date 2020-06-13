import { PAGE_LOADER } from "../types";

export const isLoading = payload => ({
    type: PAGE_LOADER,
    payload
});