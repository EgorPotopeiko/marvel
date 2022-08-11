import {TApplicationState} from "../applicationState";

export const statePage = (state: TApplicationState) => state.pagination.page;
export const stateTotal = (state: TApplicationState) => state.pagination.total;