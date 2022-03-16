import { SEARCH_DATA_ADD, SEARCH_DATA_FETCH } from "./actionTypes";

export const searchDataAdd = (payload) => ({
	type: SEARCH_DATA_ADD,
	payload,
});

export const searchDataFetch = (payload) => ({
	type: SEARCH_DATA_FETCH,
	payload,
});
